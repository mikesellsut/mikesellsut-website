// Blog post dates come from frontmatter as plain dates (e.g. `date: 2026-10-15`),
// which YAML/Astro turn into a Date at UTC midnight. Formatting that Date in a
// local time zone west of UTC (e.g. America/Denver) shows the previous day, so
// always read and format post dates in UTC. Display only — this does not touch
// which posts are visible (the drip-schedule filters compare dates as before).

/** "October 15, 2026" — exactly the frontmatter calendar date. */
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** "2026-10-15" — plain calendar date for <time datetime> and schema.org. */
export function postDateISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}
