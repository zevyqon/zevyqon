/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        primary: "#6C3BFF",
        accent: "#00D1FF",
        highlight: "#FF2E88",
        muted: "#1A1A22",
        border: "#2A2A35",
      },

      boxShadow: {
        glow: "0 0 25px rgba(108, 59, 255, 0.35)",
        glowBlue: "0 0 25px rgba(0, 209, 255, 0.35)",
      },

      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
