import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': {
          DEFAULT: '#0071e3',
          dark: '#0077ED',
          light: '#007AFF'
        },
        'apple-gray': {
          50: '#fafafa',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#424245',
          700: '#1d1d1f',
          800: '#0a0a0a',
          900: '#000000'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)'
        },
        background: {
          DEFAULT: 'rgb(var(--color-background))'
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out var(--animation-delay, 0ms) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
        },
      },
      boxShadow: {
        'apple-sm': '0 2px 5px rgba(0, 0, 0, 0.08)',
        'apple-md': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 12px 24px rgba(0, 0, 0, 0.14)',
        'apple-xl': '0 20px 40px rgba(0, 0, 0, 0.16)',
        'apple-inner': 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        apple: '20px',
      },
      borderRadius: {
        apple: '12px',
        'apple-lg': '18px',
        'apple-xl': '20px',
        'apple-2xl': '30px',
      },
      spacing: {
        '3': '0.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      screens: {
        '3xl': '1792px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
};

export default config;
