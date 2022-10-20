module.exports = {
  // mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
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
  },
  variants: {},
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: ['garden', 'lemonade', 'dracula', 'retro', 'business'],
    darkTheme: 'dracula',
  },
}
