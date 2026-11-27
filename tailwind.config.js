/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        espresso: {
          bg: '#1B1714',
          alt: '#211B17',
          footer: '#15120F',
          card: '#30251F',
          elevated: '#40332A',
          border: 'rgba(243, 235, 221, 0.12)',
        },
        cream: {
          DEFAULT: '#F3EBDD',
          soft: '#FAF5EC',
          secondary: '#C8BBA9',
          muted: '#A39584',
        },
        caramel: {
          DEFAULT: '#C49A6C',
          hover: '#D4AD83',
          deep: '#8F6339',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 4px 14px -4px rgba(10, 7, 5, 0.45)',
        'warm': '0 10px 30px -10px rgba(10, 7, 5, 0.6)',
        'warm-lg': '0 18px 40px -12px rgba(10, 7, 5, 0.72)',
        'card-dark': '0 10px 30px -10px rgba(10, 7, 5, 0.55), 0 0 0 1px rgba(243, 235, 221, 0.12)',
        'card-light': '0 10px 30px -10px rgba(48, 37, 31, 0.08), 0 0 0 1px rgba(48, 37, 31, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
