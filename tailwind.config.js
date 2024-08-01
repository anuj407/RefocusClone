/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '920px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {
      keyframes: {
        rightSlide: {
          'to': { transform: 'translateX(0%)' },
          'from': { transform: 'translateX(-100%)' },
        },
        slide: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-100%)' },
        },
        slideTop:{
          'from': { transform: 'translateY(0%)' },
          'to': { transform: 'translateY(-100%)' },
        },
        slideDown:{
          'to': { transform: 'translateY(0%)' },
          'from': { transform: 'translateY(-100%)' },
        },
        slideMenu:{
          'to': { transform: 'translateX(50%)' },
          'from': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slide: 'slide 20s linear infinite',
        rightSlide: 'rightSlide 20s linear infinite',
        slideTop:'slideTop 0.4s linear ',
        slideDown:'slideDown 0.4s linear ',
        slideMenu:'slideMenu 0.4s linear ',
      },
      
    },
  },
  plugins: [],
}

