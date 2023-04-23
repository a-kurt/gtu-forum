/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'beige': '#f3f3f3',
      'beige-300': '#d1d1d1',
      'logo': '#55925a',
      'white': '#ffffff',
      
    },
  },
  plugins: [require("daisyui")],
};