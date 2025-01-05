module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}", // Incluye archivos HTML o JS en la raíz
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
