/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{html,tsx,jsx,ts,js}'],
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
        },
      },
      transitionProperty: {
        position: 'left, right',
      },
    },
  },
  plugins: [],
};
