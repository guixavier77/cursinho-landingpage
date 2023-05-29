/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      d: '1140px',
      t: { min: '768px', max: '1139px' },
      s: { max: '767px' },
    },
    colors: {
      primary: '#252160',
      secondary: '#3affe5',
      gray200: '#7b7b7b',
      gray100: '#f8f8f8',
      white: '#fff',
      black: '#000',
      blue: '#32b5ff',
      orange: '#ff9900',
    },

    fontFamily: {
      inter: ['Inter ', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-introducao': "url('src/assets/img/bg-introducao.png')",
      },
    },
  },
  plugins: [],
}
