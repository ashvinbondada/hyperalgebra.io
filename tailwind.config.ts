import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'smoky-black' : '#14110F',
        'jet' : '#34312D',
        'gray' : '#7E7F83',
        'dun' : '#D9CB52',
        'anti-flash-white' : '#F3F3F4'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
