/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051C2C",
        secondary: "#005587",
        accent: "#C4A273",
        bgLight: "#FFFFFF",
        bgOffWhite: "#F8F9FA",
        textDark: "#111111",
        textLight: "#4A4A4A",
        borderLight: "#EAEAEA"
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
