const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        textColor: {
          DEFAULT: "var(--textColor)",
        },
        bgColor: {
          DEFAULT: "var(--bgColor)",
        },
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}