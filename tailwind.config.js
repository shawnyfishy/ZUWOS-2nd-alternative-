/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0061FE', // Dropbox Brand Blue
        graphite: '#1E1919', // Standard Dark
        coconut: '#F7F5F2', // Standard Light
        atlas: '#2B2929', // Secondary Dark
        success: '#007828',
        warning: '#9B6400',
        'accent-yellow': '#FAE100', // For bento grids
        'accent-pink': '#FFD7E4',
        'accent-pink-dark': '#DB2777',
        'accent-blue': '#E6F5FF',
        // Vision Page Colors - Indigenous & Roles
        saffron: '#FF9933',
        'india-green': '#138808',
        terracotta: '#E97451',
        employee: '#4A90E2',
        hr: '#2DBECD',
        facilities: '#FF9933', // Reusing saffron or similar orange
        finance: '#5B3A9B',
        procurement: '#27AE60',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['8rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'brutalist': '8px 8px 0px #1E1919',
        'brutalist-hover': '12px 12px 0px #1E1919',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
