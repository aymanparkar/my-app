/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      "./App.{js,jsx,ts,tsx}", 
      "./app/**/*.{js,jsx,ts,tsx}",  
      "./components/**/*",
      "./app/**/*",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }