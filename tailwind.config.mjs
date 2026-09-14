/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B2E5A',
        sky: '#4A9BD9',
        gold: '#D4A629',
        red: '#C62828',
        cream: '#F5F0E8',
        white: '#FFFFFF',
      },
      fontFamily: {
        // "heading" is a semantic alias (uppercase/tracked labels, nav, buttons) —
        // kept as its own token so those spots stay easy to re-theme, but it now
        // points at the same physical family as body text. Down to 2 typefaces
        // total on the site: Source Sans 3 (body + heading) and Playfair Display
        // (display only). Oswald was dropped — see design-taste audit.
        heading: ['Source Sans 3', 'Helvetica Neue', 'sans-serif'],
        body: ['Source Sans 3', 'Helvetica Neue', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
