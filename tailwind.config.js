/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#146ef5',
        secondary: '#111111',
        tertiary: 'rgb(43, 43, 43)',
        dark: '#080808',
      },
      fontSize: {
        xxl: '40px',
      },
    },
  },
  plugins: [],
}
