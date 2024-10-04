/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.html", "./src/**/*.js" ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-desktop-bg': "url('./src/assets/images/pattern-background-desktop.svg')",
        'custom-mobile-bg': "url('./src/assets/images/pattern-background-mobile.svg')",
      },
      fontFamily: {
        'red-hat-display': ['"Red Hat Display"', 'sans-serif'],
      },
      colors: {
        'lavender': 'hsl(248, 53%, 58%)', // Lavender color
        primary: {
          pale: 'hsl(225, 100%, 94%)',
          bright: 'hsl(245, 75%, 52%)',
        },
        neutral: {
          'very-pale': 'hsl(225, 100%, 98%)',
          'desaturated': 'hsl(224, 23%, 55%)',
          'dark': 'hsl(223, 47%, 23%)',
        },
      },
    },
  },
  plugins: [],
}

/*
Add colors
### Primary

- Pale blue: hsl(225, 100%, 94%)
- Bright blue: hsl(245, 75%, 52%)

### Neutral

- Very pale blue: hsl(225, 100%, 98%)
- Desaturated blue: hsl(224, 23%, 55%)
- Dark blue: hsl(223, 47%, 23%)
*/