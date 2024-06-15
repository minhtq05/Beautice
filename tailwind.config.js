/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '250px',
      'md': '768px',
      'lg': '976px',
      'xl': '1024px',
      '2xl': '1440px',
    },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      'regular': ['Poppins-Regular'],
      'medium': ['Poppins-Medium'],
      'semibold': ['Poppins-SemiBold'],
      'bold': ['Poppins-Bold'],
      'medium-italic': ['Poppins-MediumItalic'],
    },
    extend: {
      spacing: {
        'px': '1px',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'navy-blue': '#091156',
        'purple': '#414880',
        'pink': '#FF64AE',
        'light-grey': '#EEEEEE',
        'grey': '#8B8B8B',
        'input-grey': '#C5C5C5',
        'outline': '#D9DDFE',
      },
      boxShadow: {
        'base': '0px 25px 50px 25px #F7F7FF',
        'sm': '-2px 6px 16px -1px #E6E9FD',
        'button': '0px 17px 22px #FFEDF6',
      },
      dropShadow: {
        'logo': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [],
}