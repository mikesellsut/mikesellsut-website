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
        heading: ['Oswald', 'Arial Narrow', 'sans-serif'],
        body: ['Source Sans 3', 'Helvetica Neue', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
