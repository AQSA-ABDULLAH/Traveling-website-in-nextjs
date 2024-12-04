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
      fontFamily: {
        volkhov: ['Volkhov', 'serif'],
        poppins: ['Poppins']
      },
      lineHeight: {
        'extra-loose': '10.4rem',
        'loose': '5.4rem',
        'large': '3.4rem'
      },
      borderRadius: {
        default: '0.25rem',
        large: '8rem'
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'large-screen': '1920'
      },
    },
  },
  plugins: [],
};
