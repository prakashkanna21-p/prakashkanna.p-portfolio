/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'card-bg': '#111111',
        'primary': '#6366f1',
        'secondary': '#8b5cf6',
        'accent': '#ec4899',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(99,102,241,0.5)' },
          '100%': { textShadow: '0 0 20px rgba(139,92,246,0.8)' },
        },
      },
    },
  },
  plugins: [],
}