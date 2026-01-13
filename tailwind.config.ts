import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",         // Next.js pages & layouts
    "./src/components/**/*.{js,ts,jsx,tsx}",  // UI components
    "./src/lib/**/*.{js,ts,jsx,tsx}",         // Utility components/libs
  ],
  theme: {
    extend: {},  // Customize your theme here
  },
  plugins: [],
};

export default config;

