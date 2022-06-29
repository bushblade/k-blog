module.exports = {
  // mode: 'jit',
  purge: ['./app/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['garden', 'lemonade', 'dracula', 'retro', 'business'],
    darkTheme: 'dracula',
  },
}
