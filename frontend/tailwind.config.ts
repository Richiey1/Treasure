import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TreaSure Color Palette
        'deep-blue': {
          50: '#f0f5fb',
          100: '#dce6f5',
          200: '#b3cfe9',
          300: '#7fb3db',
          400: '#5a9ad4',
          500: '#2c5aa0', // Primary
          600: '#1f4080',
          700: '#1a3366',
          800: '#142d52',
          900: '#0d1a2e',
        },
        'mint-green': {
          50: '#f0f9f7',
          100: '#d1f0e8',
          200: '#a3e4d7',
          300: '#6fd4c0',
          400: '#4ac5af',
          500: '#1fb89d', // Primary
          600: '#16a085',
          700: '#12836d',
          800: '#0d6b5a',
          900: '#08453a',
        },
        'slate': {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#495057',
            a: {
              color: '#2c5aa0',
              '&:hover': {
                color: '#1f4080',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
