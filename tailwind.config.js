/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#e1e1e1',
          light: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
}
