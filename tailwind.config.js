/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
      colors: {
        blueTheme: '#1a97f5',
        greenTheme: '#03c9d7',
        purpleTheme: '#7352ff',
        redTheme: '#ff5c8e',
        indigoTheme: '#1e4db7',
        orangeTheme: '#fb9678',
        salte: '#0f172a'
      },
      keyframes : {
        moveRight: {
          '0%' : {transform: 'translateX(0)'},
          '50%' : {transform: 'translateX(10px)'},
          '100%' : {transform: 'translateX(0)'},
        }
      },
      animation : {
        moveRight : 'moveRight 1s ease-in-out infinite', 
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200',
        '2xl': '1400px'
      },
    },
  },
  plugins: [],
}

