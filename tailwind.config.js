/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium jewellery palette — deep brown + gold + cream
        gold: {
          50: '#FBF6EC',
          100: '#F5E9CE',
          200: '#ECD49C',
          300: '#DDB861',
          400: '#C99B3A',
          500: '#B07F22', // primary gold
          600: '#8E6418',
          700: '#6E4D14',
          800: '#4D3610',
          900: '#2C1F0A',
        },
        espresso: {
          50: '#F7F2EC',
          100: '#E9DED2',
          200: '#C9B6A2',
          300: '#9E8267',
          400: '#6E5640',
          500: '#4A3A2A', // body brown
          600: '#3A2D20',
          700: '#2A1F15',
          800: '#1C140D',
          900: '#0F0A06', // deepest
        },
        cream: '#F7F1E6',
        sand: '#EFE3D0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(176, 127, 34, 0.35)',
        'gold-lg': '0 20px 60px -15px rgba(176, 127, 34, 0.55)',
        deep: '0 25px 80px -20px rgba(15, 10, 6, 0.8)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DDB861 0%, #B07F22 50%, #6E4D14 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #8E6418 0%, #DDB861 25%, #FBF6EC 50%, #DDB861 75%, #8E6418 100%)',
      },
    },
  },
  plugins: [],
};
