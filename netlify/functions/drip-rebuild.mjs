// Daily drip-post check for mikesellsut.com (Netlify Scheduled Function).
//
// Each production deploy costs credits, so this only triggers a rebuild on days
// a scheduled post is actually due. It reads /drip-status.json from the LIVE
// deploy (written at build time: dates of published posts that build didn't
// show yet). If any of those dates is today or earlier (America/Denver), it
// POSTs once to the build hook. After that rebuild the date drops off the list,
// so it never re-triggers for the same post. Any error = no build.
//
// Needs env var DRIP_BUILD_HOOK_URL (Netlify UI, Functions scope). Not in git.
// Optional: DRIP_DRY_RUN=1 to log the decision without calling the hook.

export const config = {
  // 13:00 UTC = 6:00 AM Denver in winter (MST), 7:00 AM in summer (MDT).
  schedule: "0 13 * * *",
};

/** Today's calendar date in Denver as YYYY-MM-DD. */
export function denverToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Denver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Pure decision: which pending post dates are due on or before `today`. */
export function decide(status, today) {
  const pending = Array.isArray(status?.pendingDates) ? status.pendingDates : null;
  if (!pending) return { trigger: false, reason: "drip-status.json missing or malformed", due: [] };
  const due = pending.filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && d <= today);
  return due.length
    ? { trigger: true, reason: `post(s) due: ${due.join(", ")}`, due }
    : { trigger: false, reason: "no post due", due: [] };
}

export default async function handler() {
  const siteUrl = process.env.URL || "https://mikesellsut.com";
  const today = denverToday();
  let status;
  try {
    const res = await fetch(`${siteUrl}/drip-status.json`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    status = await res.json();
  } catch (err) {
    console.log(`[drip] ${today}: could not read drip-status.json (${err.message}); not building.`);
    return new Response("status unavailable", { status: 200 });
  }

  const result = decide(status, today);
  console.log(`[drip] ${today}: ${result.reason} (live build ${status.builtAt})`);
  if (!result.trigger) return new Response(result.reason, { status: 200 });

  if (process.env.DRIP_DRY_RUN === "1") {
    console.log("[drip] DRY RUN: would trigger build hook");
    return new Response("dry run: would build", { status: 200 });
  }
  const hook = process.env.DRIP_BUILD_HOOK_URL;
  if (!hook) {
    console.log("[drip] DRIP_BUILD_HOOK_URL not set; cannot trigger build.");
    return new Response("hook not configured", { status: 200 });
  }
  const r = await fetch(`${hook}?trigger_title=${encodeURIComponent(`Drip post due ${result.due.join(", ")}`)}`, { method: "POST" });
  console.log(`[drip] build hook responded ${r.status}`);
  return new Response(`build triggered (${r.status})`, { status: 200 });
}
