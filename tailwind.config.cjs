/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
      'move-logo': 'move 0.7s linear forwards',
      'wiggle': 'wiggle 1s ease-in-out infinite',
      'fade' : 'fade 1s linear 0.7s forwards'
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      move: {
        '0%' : { transform: 'translateX(50px)' },
        '100%' : { transform: 'translateX(0px)' }
      },
      fade: {
        '0%' : { opacity : '0' },
        '100%' : { opacity : '1' }
      }
    },

    colors: {
        'qsystem' : {DEFAULT : "#ea7e34"},
        'q-green' : "#1fb58f",
        'q-black' : {
          50 :'#686B6E',
          100:'#383C41',
          DEFAULT: '#202327'
        },
        'q-card' : '#282B30'
    },

    fontSize: {
        '2xl': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '3xl': ['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
    },

    fontFamily: {
        sans: ["Roboto, sans-serif"],
    },

    backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
    },
  },
},

variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      
    }
},

plugins: [
  require('@tailwindcss/typography'), require('tailwind-scrollbar')({ nocompatible: true })
],
})