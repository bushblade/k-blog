module.exports = {
  // mode: 'jit',
  purge: ['./app/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bgposition: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        bgposition: 'bgposition 2s ease infinite',
      },
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
  },
  corePlugins: { aspectRatio: false },
  variants: {},
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: ['garden', 'lemonade', 'dracula', 'retro', 'business'],
    darkTheme: 'dracula',
  },
}
