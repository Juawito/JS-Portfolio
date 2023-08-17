/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'basic': {
        'onyx': '#181818',
        'red-light': '#E93F406E',
        'yellow-light': '#FFB8006E',
        'gray-dark': '#808080',
        'gray-medium': '#80808080',
        'gray-light': '#C5C5C5',
        'white': {
          'DEFAULT': '#FFFFFF',
        },
        'black': {
          'DEFAULT': '#0D0D0D',
        }
      },
      'light': {
        'main-bg': '#FBFBFB',
        'card-bd': '#EBEBEB',
        'card-bg': '#F6F6F6',
        'b-10': 'rgb(21,21,21, 0.1)',
        'faint-white': '#F3F3F3'
      },
      'dark': {
        'w-10': '#FFFFFF1A',
        'w-25': '#FFFFFF40',
        'w-70': '#FFFFFFB2',
        'card-bd': 'rgb(56, 55, 55, 1)',
        'b-50': 'rgb(21, 21, 21, 0.5)'
      }
    },
    extend: {},
  },
  plugins: [],
}

