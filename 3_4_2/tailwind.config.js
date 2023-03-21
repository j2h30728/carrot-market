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
  darkMode: "media", //media: 사용자의 os 세팅기준 , class: 최상단 태그에 수동으로 부여
  plugins: [],
};
