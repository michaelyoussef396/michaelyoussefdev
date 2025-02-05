/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F52A03",
        orange: "f95c28",
        white10: 'rgba(255, 255, 255, 0.1)',
        white: "#ffffff",
        paragraphGray : "#8C8C8C", 
        darkGray: "#201F1F",
        dark: '#0E0E0E',
        black: "#000000",
      }
    },
  },
  plugins: [],
};
