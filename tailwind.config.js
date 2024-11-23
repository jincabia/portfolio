/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    'animate-fade-in',  // Replace with the classes used for animations
    'opacity-0',
    'opacity-100',
    'translate-y-0',
    'translate-y-10',
    "hover:scale-125",
    "hover:cursor-pointer",
    "hover:text-yellow-200",
    "transition",
    "ease-in-out ",
   
  ],
  plugins: [],
};
