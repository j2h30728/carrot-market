/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //어느 component 혹은 page에서 Tailwind를 사용할 것인지 tailwind에게 알림
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
