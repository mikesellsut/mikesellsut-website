# Mike Sells UT — mikesellsut.com

This is the website for Mike Price, REALTOR with Heritage Realty Group LLC, serving Central Utah (Sanpete, Sevier, Millard & Juab Counties).

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), [GSAP](https://greensock.com/gsap/) animations, and [Decap CMS](https://decapcms.org/) for content management.

---

## Project Structure

Here's what's in each folder:

```
mikesellsut-website/
├── public/                  Static files (images, admin panel, robots.txt)
│   ├── admin/               Decap CMS admin panel
│   │   ├── index.html       CMS login page
│   │   └── config.yml       CMS configuration (collections, fields)
│   ├── images/
│   │   ├── areas/           Photos for each county/area
│   │   ├── site/            Logo, biplane SVG, hero image, etc.
│   │   └── uploads/         Images uploaded through the CMS
│   └── robots.txt           Search engine crawler rules
├── src/
│   ├── components/          Reusable site components
│   │   ├── Header.astro     Site navigation (desktop + mobile)
│   │   ├── Footer.astro     Site footer with contact info, links
│   │   ├── ContactForm.astro  Lead capture form (Netlify Forms)
│   │   ├── BlogCard.astro   Blog post preview card
│   │   ├── AreaCard.astro   County/area preview card
│   │   ├── TestimonialCard.astro  Client testimonial card
│   │   ├── FAQAccordion.astro     Expandable FAQ section
│   │   ├── PlaceholderImage.astro Styled placeholder for missing images
│   │   └── SEO.astro        Meta tags, Open Graph, Twitter cards
│   ├── content/             CMS-managed content (markdown files)
│   │   ├── blog/            Blog posts
│   │   ├── testimonials/    Client testimonials
│   │   └── areas/           Area guides (empty for now)
│   ├── layouts/
│   │   └── BaseLayout.astro Main page layout (head, header, footer, scripts)
│   ├── pages/               Each file = one page on the site
│   │   ├── index.astro      Home page
│   │   ├── about.astro      About Mike
│   │   ├── areas.astro      Areas I Serve
│   │   ├── blog/            Blog listing + individual post template
│   │   ├── listings.astro   Property listings (links to MLS)
│   │   ├── buyers.astro     Buyer resources
│   │   ├── sellers.astro    Seller resources
│   │   ├── contact.astro    Contact page
│   │   ├── testimonials.astro  Testimonials page
│   │   ├── privacy.astro    Privacy policy
│   │   ├── terms.astro      Terms of service
│   │   └── 404.astro        Custom 404 error page
│   └── styles/
│       └── global.css       Global styles (Tailwind + custom CSS)
├── astro.config.mjs         Astro configuration
├── tailwind.config.mjs      Tailwind CSS config (brand colors, fonts)
├── package.json             Dependencies and scripts
└── tsconfig.json            TypeScript configuration
```

---

## How to Run the Site Locally

1. Open a terminal (Command Prompt or PowerShell) and navigate to the project folder:
   ```
   cd Desktop\mikesellsut-website
   ```

2. Install dependencies (only needed the first time, or after changes to package.json):
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and go to **http://localhost:4321**

5. To stop the server, press `Ctrl+C` in the terminal.

---

## How to Access the CMS

The CMS (Content Management System) lets you add blog posts, testimonials, and area guides without touching any code.

1. Go to **https://mikesellsut.com/admin** (note: CMS login only works on the live deployed site, not localhost)
2. Log in with your email (mikesellsut@gmail.com)
3. You'll see three collections:
   - **Blog Posts** — Write and publish blog articles
   - **Testimonials** — Add client reviews
   - **Area Guides** — Add information about specific areas/towns

### Adding a New Blog Post

1. Go to mikesellsut.com/admin
2. Click **Blog Posts** in the left sidebar
3. Click the **New Blog Post** button
4. Fill in:
   - **Title**: Your post headline
   - **Publish Date**: When to publish
   - **Category**: Pick from the dropdown (Market Updates, Buyer Tips, etc.)
   - **Featured Image**: Click to upload a photo (landscape, roughly 1200x600px)
   - **Excerpt**: A 1-2 sentence summary (shows on the blog listing and in Google)
   - **Published**: Leave ON to publish, or turn OFF to save as draft
   - **Body**: Write your post content. You can add headings, bold text, links, and images.
5. Click **Publish** in the top right

Your new post will appear on the site within about 60 seconds after Netlify rebuilds.

### Adding a Testimonial

1. Go to mikesellsut.com/admin
2. Click **Testimonials**
3. Click **New Testimonial**
4. Fill in:
   - **Client Name**: First name + last initial for privacy (e.g., "Sarah M.")
   - **Quote**: The testimonial text
   - **Date**: When you received it
   - **Featured**: Turn ON to display on the home page (aim for 2-3 featured)
5. Click **Publish**

---

## How to Replace Placeholder Images with Real Photos

### Headshot (About page + Home page)
The headshot is currently a placeholder. To add your real photo:
1. Name your photo `mike-headshot.jpg` (square crop, at least 600x600 pixels)
2. Put it in the `public/images/site/` folder
3. Open `src/pages/index.astro` and `src/pages/about.astro`
4. Find the `PlaceholderImage` component and replace it with:
   ```html
   <img src="/images/site/mike-headshot.jpg" alt="Mike Price, REALTOR" class="w-full max-w-md rounded-lg" />
   ```

### Hero Image
The hero currently uses `hero-horseshoe-mountain.jpg`. To change it:
1. Put your new photo in `public/images/site/`
2. Open `src/pages/index.astro`
3. Find `src="/images/site/hero-horseshoe-mountain.jpg"` and change the filename

### Area Photos
Area photos are in `public/images/areas/`. Current files:
- `sanpete-county-sign.jpg`, `sanpete-mountain.jpg`
- `sevier-river.jpg`, `sevier-ute-stampede.jpg`
- `millard-veterans-memorial.jpg`, `millard-meadow-hotsprings.jpg`, `millard-lynndyl-feedmill.jpg`
- `juab-mt-nebo.jpg`, `juab-nebo-2.jpg`, `juab-nebo-3.jpg`, `juab-yuba.jpg`

To replace: just put a new file with the same name in the same folder. Keep landscape orientation.

### Blog Post Images
Upload through the CMS when creating a blog post. Saved in `public/images/uploads/`.

---

## How to Edit Static Page Content

Pages not managed by the CMS are in `src/pages/`. They're HTML with Astro syntax.

- **About page bio**: Edit `src/pages/about.astro` — look for the paragraph tags in the bio section
- **Buyer/Seller steps**: Edit the `steps` array at the top of `buyers.astro` or `sellers.astro`
- **FAQ answers**: Edit the `faqs` array in `buyers.astro` or `sellers.astro`
- **Contact info**: If phone/email/address changes, update `src/components/Footer.astro` and `src/pages/contact.astro`

After making changes, push to GitHub and Netlify will automatically rebuild.

---

## Deployment

This site is deployed on **Netlify** (free tier):

1. Push code changes to GitHub
2. Netlify detects the change and rebuilds automatically
3. New version goes live within 1-2 minutes

When you add content through the CMS, it commits to GitHub automatically, triggering the same rebuild.

### Netlify Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

## Troubleshooting

**CSS isn't loading / site looks broken**
- Run `npm install` then `npm run dev` again

**Can't log into the CMS**
- CMS only works on the deployed site (mikesellsut.com/admin), not localhost
- Make sure you accepted the Netlify Identity invitation email
- Try incognito mode or clearing your browser cache

**Blog post not showing up**
- Wait 1-2 minutes for Netlify to rebuild after publishing
- Make sure "Published" is toggled ON in the CMS
- Check app.netlify.com for build errors

**Images look blurry or stretched**
- Hero: at least 1920x800px
- Headshot: square, at least 600x600px
- Area photos: landscape, at least 1200x600px
- Blog images: roughly 1200x600px

**Build failed**
- Check Netlify dashboard for error details
- Most common: a blog post is missing a required field (title, date, excerpt, category)
