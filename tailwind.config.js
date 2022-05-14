module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lock-icon': '#027cd5',
        'top-blue': '#3398d8',
        'main-gray': '#373737',
        'login-btn': '#fbd200',
        'google-btn': '#d85133',
        'facebook-btn': '#425599',
        'input': '#e1e1e1',
        'input-text': '#4e4e4e',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
