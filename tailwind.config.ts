import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'text-gradient':
          'linear-gradient(45deg, rgb(134, 185, 26) 30%, rgb(237, 213, 50))',
        'bg-gradient':
          'bg-[linear-gradient(-45deg,rgba(134,185,26,0.376)30%,rgba(237,213,50,0.376))]',
      },
      colors: {
        primary: {
          dark: '#1b1b1f',
          light: '#1b1b1f',
          // light: '#ffffff',
        },
        onPrimary: {
          dark: '#dfdfd6',
          light: '#dfdfd6',
          // light: '#3c3c43',
        },
        secondary: {
          dark: 'rgb(32, 33, 39)',
          light: 'rgb(32, 33, 39)',
        },
        onSecondary: {
          dark: 'rgba(235, 235, 245, 0.6)',
          light: 'rgba(235, 235, 245, 0.6)',
        },
        green: '#88ba1b',
        yellow: 'rgb(237, 213, 50)',
        greenOpaque: 'rgba(134, 185, 26, 0.376) 30%',
        yellowOpaque: 'rgba(237, 213, 50, 0.376)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
