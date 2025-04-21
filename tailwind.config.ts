import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Inter var', ...defaultTheme.fontFamily.sans],
  //     },
  //     colors: {
  //       blue: {
  //         100: '#dbeafe',
  //         DEFAULT: '#3b82f6',
  //         600: '#2563eb'
  //       }
  //     }
  //   }
  // },
  plugins: [require('@tailwindcss/forms')]
}