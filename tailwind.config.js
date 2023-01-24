module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  media: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
      '4xl': '2560px',
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '',
        sm: '',
        md: '',
      },
    },
    extend: {
      colors: {
        'oc-orange': '#ee7100',
        'oc-orangeDark': '#e6550a',
        'oc-black': '#1b1b1b',
        'oc-grayDark': '#272727',
        'oc-gray': '#a3a2a2',
        'oc-grayLight': '#efefef',
      },
      gap: {
        'calc-2': 'calc(100% / 2)',
        'calc-4': 'calc(100% / 4)',
        'calc-6': 'calc(100% / 6)',
        'calc-8': 'calc(100% / 8)',
        'calc-10': 'calc(100% / 10)',
        'calc-12': 'calc(100% / 12)',
        'calc-16': 'calc(100% / 16)',
        'calc-20': 'calc(100% / 20)',
        'calc-24': 'calc(100% / 24)',
        'calc-48': 'calc(100% / 48)',
      },
      padding: {
        'calc-0': '0',
        'calc-4': 'calc(100% / 4)',
        'calc-5': 'calc(100% / 5)',
        'calc-6': 'calc(100% / 6)',
        'calc-7': 'calc(100% / 7)',
        'calc-8': 'calc(100% / 8)',
        'calc-12': 'calc(100% / 12)',
        'calc-16': 'calc(100% / 16)',
        'calc-20': 'calc(100% / 20)',
        'calc-24': 'calc(100% / 24)',
        'calc-32': 'calc(100% / 32)',
        'calc-36': 'calc(100% / 36)',
        'calc-40': 'calc(100% / 40)',
        'calc-48': 'calc(100% / 48)',
        'calc-56': 'calc(100% / 56)',
        'calc-64': 'calc(100% / 64)',
      },
      margin: {
        'calc-0': '0',
        'calc-4': 'calc(100% / 4)',
        'calc-5': 'calc(100% / 5)',
        'calc-6': 'calc(100% / 6)',
        'calc-7': 'calc(100% / 7)',
        'calc-8': 'calc(100% / 8)',
        'calc-12': 'calc(100% / 12)',
        'calc-16': 'calc(100% / 16)',
        'calc-20': 'calc(100% / 20)',
        'calc-24': 'calc(100% / 24)',
        'calc-48': 'calc(100% / 48)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '1920px',
        },
      })
    },
  ],
}
