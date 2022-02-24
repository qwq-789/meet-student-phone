module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'club': '1180px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}