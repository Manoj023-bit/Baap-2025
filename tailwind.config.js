/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all relevant files that will use Tailwind classes
  ],
  theme: {
    extend: {
      keyframes: {
        rotateCard: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotateCard: 'rotateCard 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
