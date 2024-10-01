/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // purge: [
  //   './src/**/*..{js,ts,jsx,tsx,mdx,css,scss}',
  // ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      }
    },
  },
  plugins: [],
};
