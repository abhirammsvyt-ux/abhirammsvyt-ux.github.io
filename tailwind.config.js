/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swiss: {
          black: '#000000',
          dark: '#080808',
          card: '#111111',
          white: '#ffffff',
          light: '#f5f5f7',
          gray: '#888888',
          borderDark: 'rgba(255, 255, 255, 0.12)',
          borderLight: 'rgba(0, 0, 0, 0.12)',
        },
        crimson: {
          DEFAULT: '#e60000',
          hover: '#cc0000',
          bright: '#ff1744',
          dark: '#990000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '10xl': '9rem',
        '11xl': '11rem',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
