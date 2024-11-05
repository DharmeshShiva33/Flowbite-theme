/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts, scss}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
     screens: { 
        'sm': '640px', 
        'md': '1024px', 
        'lg': '1280px', 
        'xl': '1920px', 
      }, 
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

