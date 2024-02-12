/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: ({ opacityValue = 1 }) => {
          return `rgba(var(--color-main), ${opacityValue})`;
        },
        "main-foreground": ({ opacityValue = 1 }) => {
          return `rgba(var(--color-main-foreground), ${opacityValue})`;
        },
        gray: ({ opacityValue = 1 }) => {
          return `rgba(var(--color-text), ${opacityValue})`;
        },
      },
    },
  },
  plugins: [],
  prefix: "rs-",
};
