/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        lightblue:"#4A83E7",
        darkblue:"#4A5AE7",
        lightgray: "#EBF2FF",
        "primary": "#000",
      },
      fontSize: {
        sm: ["14px"],
        md: ["16px"],
        lg: ["18px"],
        xl: ["20px"],
        xxl: ["24px"],
        header: ["36px"],
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1600px",
      // // => @media (min-width: 1536px) { ... }
      "4xl": "1800px",
    },
    backgroundImage: {
      'gradient--1': 'linear-gradient(0deg, rgba(122, 160, 255, 0.22) 0%, rgba(128, 232, 255, 0.22) 100%)',
      'gradient--2': 'linear-gradient(180deg, rgba(74, 131, 231, 0.55) 5.73%, rgba(151, 71, 255, 0.00) 100%)',
      'gradient--3': 'linear-gradient(180deg, #E7EFFF 0%, #FAF2FF 100%)',
      'gradient--4': 'linear-gradient(180deg, #4A83E7 0%, #F2DFFF 100%)',
      'gradient--5': 'linear-gradient(89deg, rgba(81, 98, 255, 0.22) -46.9%, rgba(128, 232, 255, 0.22) 125.81%)',
      'bg--none' : 'none',
    },
  },
  plugins: [],
};
