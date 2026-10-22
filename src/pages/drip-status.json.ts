// Build-time snapshot used by the daily drip-rebuild scheduled function
// (netlify/functions/drip-rebuild.mjs). It lists ONLY the dates of published
// posts that this build did NOT show yet (future-dated drip posts) — no slugs
// or titles. Uses the exact same visibility rule as /blog and the homepage.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const now = new Date();
  const pendingDates = [
    ...new Set(
      (await getCollection("blog"))
        .filter((p) => p.data.published && !(new Date(p.data.date) <= now))
        .map((p) => p.data.date.toISOString().slice(0, 10))
    ),
  ].sort();

  return new Response(JSON.stringify({ builtAt: now.toISOString(), pendingDates }), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
