# Private ranch and recreation listings

Page: `/p/4ba5be6adfbde7a3eb61da5d/`

This page is private. It is not linked from the nav, footer, or anywhere else. It is `noindex, nofollow`, the Netlify `/p/*` `X-Robots-Tag` covers it, and `astro.config.mjs` keeps every `/p/` URL out of the sitemap.

`index.astro` renders the cards from `listings.json` at build time. Do not paste listings into the template.

## Update the listings

1. Replace `listings.json` in this folder. Keep the same shape: an object with a `listings` array. Each item uses `hrg_code` as its id and the fields the page already reads (`name`, `area`, `county`, `price`, `acres`, `price_per_acre`, `tier`, `water_note`, `has_water`, `buildings`, `short_description`, `forest_note`, `hero_photo`, `photos`, `badge`, `sort_priority`, `courtesy_brokerage`).
2. Add photo files under `public/p/4ba5be6adfbde7a3eb61da5d/photos/`. File names must match `photos` and `hero_photo` (`HRG-XX_NN.jpg`). Photos are already web-sized; the build copies them as-is.
3. Delete photo files the new JSON no longer names. The build fails if a named photo is missing.
4. Open a pull request so Netlify can build a deploy preview. Do not deploy production from a laptop.

`page_meta.json` in this folder holds Mike's contact, the brand colors, and the footer disclaimer. Change it only when those change.

Cards with `hero_photo: null` show a branded placeholder. Cards with `courtesy_brokerage: null` omit the courtesy line. Do not add MLS numbers, street addresses, listing-site links, or agent names to the JSON fields the page prints.
