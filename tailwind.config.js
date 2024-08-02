/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#146ef5',
        secondary: '#080808',
        tertiary: 'rgb(43, 43, 43)',
        dark: 'rgb(137, 137, 137)',
      },
      fontSize: {
        xxl: '40px',
      },
    },
  },
  plugins: [],
}
