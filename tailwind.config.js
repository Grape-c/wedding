/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#dbeafe',
          DEFAULT: '#3b82f6',
          600: '#2563eb'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
} 