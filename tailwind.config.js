/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        staat: ["Staatliches", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        ieee: "url('/ieeebg.png')",
        about: "url('/about/aboutUsBg.png')",
      },
      colors:{
        spl_ticket_b: "#d9d9d9",
        spl_ticket_t: "#737373",
        cwk_ticket_b: "#bbdefb",
        cwk_ticket_t: "#6f8495",
        iec_ticket_b: "#90caf9",
        iec_ticket_t: "#557793",
        iem_ticket_b: "#307ebe",
        iem_ticket_t: "#27608f",
        nim_ticket_b: "#1565c0",
        nim_ticket_t: "#0a2f5a"
      }
    },
  },
  plugins: [],
};
