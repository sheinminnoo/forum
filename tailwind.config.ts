import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Navy Palette moved here

        primary: "#081338",
        main: "#0092EF",
        card: "#070E27",
        secondary: "#05061B",
        tertiary: "#00154A",

        // You can also add your panel colors here
        panel: "#112240",
        panelHover: "#1e293b",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
