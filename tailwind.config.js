/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'kinkOmite': ['KinkOMite']
    },
    extend: {
      boxShadow: {
        'orangey': '6px 6px 10px rgba(252, 236, 221, 0.6)',
      },
      animation: {
        'transition': 'all 1s ease-in-out'
      },
      colors: {
        'biege': '#FCECDD',
        'lightorange': '#FFC288',
        'medorange': '#FEA82F',
        'darkorange': '#FF6701'
      }
    },
  },
  plugins: [],
}
