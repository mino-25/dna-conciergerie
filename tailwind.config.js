/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"  // adapte selon ton stack
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b2b2b',  
        accent: '#f9da2dff',   
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        body: ['"Open Sans"', 'serif'],
        serif: ['"Abhaya Libre"', 'serif'],
      },
    },
  },
  plugins: [],
}
