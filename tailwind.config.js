module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '320px',
      xsm: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Montserrat', 'source-sans-pro', 'system-ui'],
      serif: ['Prata', 'ui-sans-serif', 'system-ui'],
      digit: ['Roboto Mono', 'source-sans-pro', 'system-ui'],
    },
    fontSize: {
      xxs: '0.68rem', // 11px
      xs: '0.75rem', // 12px
      xsm: '0.81rem', // 13px
      sm: '0.875rem', // 14px
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.625rem',
      '3.25xl': '1.8rem',
      '3.5xl': '2rem',
      '4xl': '2.25rem',
      '4.5xl': '2.5rem',
      '5xl': '3rem',
      '5.25xl': '3.25rem',
      '6xl': '4rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      2: '2px',
      3: '3px',
    },
    extend: {
      colors: {
        blue: {
          200: '#E3E8F5',
          500: '#100160',
        },
        red: {
          100: '#FFEBF5',
          400: '#CA396B',
          450: '#CC364D',
          500: '#A43269',
          800: '#D5124D',
        },
        gray: {
          20: '#D0CDE0',
          25: '#F4F6FB',
          50: '#EAEEFA',
          100: '#EFEEF7',
          450: '#cacaca',
          900: '#1D0929',
          950: '#12011A',
        },
        purple: {
          400: '#CF90EE',
          500: '#7f76a8',
          700: '#521372',
          750: '#762FA6',
          800: '#5B00AB',
          888:'#A421ED',
          889:'#560D66'
        },
      },
      width: {
        120: '420px',
        140: '560px',
      },
      height: {
        9.5: '38px',
        120: '420px',
        132: '500px',
        140: '560px',
      },
      lineHeight: {
        11: '3.25rem',
        12: '3.75rem',
        14: '4rem',
      },
      flex: {
        6: '5 4 0%',
        4: '4 5 0%',
        card: '1 0 220px',
        'card-sm': '0 1 calc(50% - 32px)',
        'card-lg': '0 1 calc(33% - 32px)',
        'card-xl': '0 1 calc(25% - 32px)',
      },
      backgroundImage: {
        primary: 'linear-gradient(168.54deg, #8B12FF 0%, #FF59AF 100%)',
        placeholder: "url('/assets/images/placeholder.jpg')",
        'candidate-placeholder':
          "url('/assets/images/candidate-placeholder.jpg')",
        'red-white':
          'linear-gradient(to right, rgba(217,255,241,0.5) 54%, white 46%)',
        'blue-60-white-40':
          'linear-gradient(to right, rgba(217,255,241,0.5) 54%, white 46%)',
        'blue-40-white-60':
          'linear-gradient(to right, rgba(217,255,241,0.5) 45%, white 45%)',
      },
      boxShadow: {
        outer: '0 0 24px 0 rgba(227,223,255,0.5)',
      },
    },
  },
  plugins: [],
};
