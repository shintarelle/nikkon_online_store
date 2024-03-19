import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'san-serif',],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'dark-grey': '#545454',
      'middle-grey': '#c4c4c4',
      'light-grey': '#aba9a9',
      'white-grey': '#efeded',
      'powder-pink': '#e8dcdc',
      'powder-beige': '#ebd9d5',
      'powder-red': '#f05151',
      'light-red': '#f57876',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
