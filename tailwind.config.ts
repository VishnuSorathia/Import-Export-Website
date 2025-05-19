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
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          light: 'rgb(var(--color-primary-light))',
          dark: 'rgb(var(--color-primary-dark))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          light: 'rgb(var(--color-secondary-light))',
          dark: 'rgb(var(--color-secondary-dark))',
        },
        background: 'rgb(var(--color-background))',
        surface: 'rgb(var(--color-surface))',
        'surface-alt': 'rgb(var(--color-surface-alt))',
        accent: {
          purple: 'rgb(var(--color-accent-purple))',
          orange: 'rgb(var(--color-accent-orange))',
          pink: 'rgb(var(--color-accent-pink))',
          green: 'rgb(var(--color-accent-green))',
          teal: 'rgb(var(--color-accent-teal))',
        },
        gray: {
          50: 'rgb(var(--color-gray-50))',
          100: 'rgb(var(--color-gray-100))',
          200: 'rgb(var(--color-gray-200))',
          300: 'rgb(var(--color-gray-300))',
          400: 'rgb(var(--color-gray-400))',
          500: 'rgb(var(--color-gray-500))',
          600: 'rgb(var(--color-gray-600))',
          700: 'rgb(var(--color-gray-700))',
          800: 'rgb(var(--color-gray-800))',
          900: 'rgb(var(--color-gray-900))',
          950: 'rgb(var(--color-gray-950))',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out var(--animation-delay, 0ms) forwards',
        'float': 'floatBlob 8s ease-in-out infinite',
        'float-slow': 'floatBlob 12s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatBlob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(5px, -5px) scale(1.02)' },
          '50%': { transform: 'translate(10px, 10px) scale(0.98)' },
          '75%': { transform: 'translate(-5px, 5px) scale(1.01)' },
        },
      },
      boxShadow: {
        'apple-sm': '0 2px 5px rgba(var(--color-shadow), 0.08)',
        'apple-md': '0 4px 12px rgba(var(--color-shadow), 0.12)',
        'apple-lg': '0 12px 24px rgba(var(--color-shadow), 0.14)',
      },
      backdropBlur: {
        apple: '16px',
      },
      borderRadius: {
        apple: '12px',
        'apple-lg': '18px',
      },
      spacing: {
        'section': '0rem',
        'section-sm': '0rem',
        'section-lg': '0rem',
        'content-gap': '1rem',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, fill, stroke',
        'layout': 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
};

export default config;