/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    screens: {
      lg: { max: "1540px" },
      md: { max: "840px" },
      semiMd: { max: "740px" },
      small: { max: "600px" },
      semiSmall   : { max: "450px" },
    },

    colors: {
      "border-gray": "#363738",
      "muted-gray": "#76787A",
      "bg-gray": "#232324",
      "text-white": "#E1E3E6",
      "input-text": "#B0B1B6",
      "btn-bg": "#0047BB",
      "modal-bg": "#141414",
      danger: "#D77556",
    },
  },
  plugins: [],
};
