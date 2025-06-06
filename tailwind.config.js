
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }, 
      fontFamily: {
        doto: [ 'Russo One', 'sans-serif'],
        Payton: ['Paytone One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}