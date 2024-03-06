/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: {
        200: '#eee',
        300: '#ddd',
        400: '#ccc',
        500: '#999',
        600: '#666',
        700: '#595959',
        800: '#333',
        900: '#141414',
      },
      orange: {
        100: '#ff7900',
        200: '#f16e00',
      },
      forest: {
        100: '#6c6',
        200: '#228722',
      },
      fire: {
        100: '#f66',
        200: '#cd3c14',
      },
      water: {
        100: '#69f',
        200: '#4170d8',
      },
      sun: {
        100: '#fc0',
        200: '#8f7200',
      },
      blue: {
        100: '#b5e8f7',
        200: '#80ceef',
        300: '#4bb4e6',
        400: '#3e9dd6',
        500: '#237eca',
        600: '#085ebd',
      },
      green: {
        100: '#b8ebd6',
        200: '#84d5af',
        300: '#50be87',
        400: '#27a971',
        500: '#198c51',
        600: '#0a6e31',
      },
      pink: {
        100: '#ffe8f7',
        200: '#ffceef',
        300: '#ffb4e6',
        400: '#ff8ad4',
        500: '#d573bb',
        600: '#bc4d9a',
      },
      purple: {
        100: '#d9c2f0',
        200: '#c1a4e4',
        300: '#a885d8',
        400: '#9373bd',
        500: '#6e4aa7',
        600: '#492191',
      },
      yellow: {
        100: '#fff6b6',
        200: '#ffe45b',
        300: '#ffd200',
        400: '#ffb400',
        500: '#b98f11',
        600: '#9d6e06',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      arimo: ['Arimo', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
