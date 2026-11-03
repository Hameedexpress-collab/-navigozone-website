/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce5f1',
          200: '#b9cce4',
          300: '#8aabcd',
          400: '#5b87b4',
          500: '#3c6a9e',
          600: '#2d5383',
          700: '#243f68',
          800: '#1a2d4d',
          900: '#11203a',
          950: '#0a1628',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f6eddc',
          200: '#ecd9b5',
          300: '#ddbd84',
          400: '#d0a45e',
          500: '#c08a3f',
          600: '#a67131',
          700: '#845628',
          800: '#6e4726',
          900: '#5d3c22',
        },
        cyan: {
          50: '#f0fbfc',
          100: '#d6f5f8',
          200: '#aeebef',
          300: '#7adde3',
          400: '#43c5cf',
          500: '#22aab6',
          600: '#168996',
          700: '#166d78',
          800: '#175662',
          900: '#164751',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
