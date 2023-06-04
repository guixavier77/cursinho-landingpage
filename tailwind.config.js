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
      nunitosans: ['Nunito Sans', 'sans-serif'],
      fredoka: ['Fredoka', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-introducao': "url('src/assets/img/bg-introducao.png')",
      },
      content: {
        discount: 'url("src/assets/img/discount.png")',
        discountMobile: 'url("src/assets/img/discountmobile.png")',
      },

      animation: {
        'show-down':
          'show-down 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   forwards',
        'animated-image':
          'animated-image 1s  alternate  ease-in-out infinite forwards ',
      },
      keyframes: {
        'show-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -30px, 0)',
          },
          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'animated-image': {
          from: {
            bottom: 0,
          },

          to: {
            bottom: '10px',
          },
        },
      },
    },
  },
  plugins: [],
}
