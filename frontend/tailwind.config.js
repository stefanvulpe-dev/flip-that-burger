/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{html,tsx,jsx,ts,js}', 'index.html'],
  theme: {
    extend: {
      colors: {
        accent: {
          100: 'hsl(41, 96%, 60%)',
          200: 'hsl(358, 80%, 53%)',
          300: 'hsl(26, 99%, 54%)',
          400: 'hsl(0, 0%, 100%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 13%)',
          200: 'hsl(150, 2%, 75%)',
          300: 'hsl(0, 3%, 7%)',
          400: 'hsl(37, 100%, 94%)',
          500: 'hsl(0, 0%, 45%)',
          600: 'hsl(0, 0%, 75%)',
        },
      },
      transitionProperty: {
        position: 'left, right, top, bottom',
        borderRadius: 'border-radius',
        visibility: 'visibility',
      },
      gridTemplateColumns: {
        'fill-2': '2fr 1fr',
        'fill-3': '1fr 1fr 1fr',
      },
      backgroundImage: {
        'promo-mobile': "url('/src/assets/main/delivery-guy.png')",
        'promo-desktop': "url('/src/assets/main/delivery-guy-desktop.png')",
        'hero-desktop': "url('/src/assets/main/circle.svg')",
      },
      screens: {
        xs: '500px',
      },
      boxShadow: {
        '3xl': '0 0 5rem rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
