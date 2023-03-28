/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.3em',
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // Configure your color palette here
        'redmix': '#d90429',
        'greenmix': '#2b9348',
        'bluemix': '#023047',
        'orangemix': '#f77f00',
        'black1': '#212428',
        'black2': '#16181c',
        'black3': '#172121',
        'white1': '#c4cfde',
        'white2': '#ffffff',
        'skyblue1': '#61dafb',
        'pink1': '#ff014f',
        'whitemix': '#878e99'

      },
      boxShadow: {
        '3xl': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
        

      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    
    },
  
  },
  plugins: [],
}
