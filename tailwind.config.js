/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/**/*.{ts,tsx}', './index.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      green: '#15803d',
      sky: '#bae6fd',
      neutral: '#d6d3d1',
      blue: '#60a5fa',
      red: '#dc2626',
      yellow: '#eab308',
      stone: {
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      },
      slate: {
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      shadow: {
        xl: '0 35px 60px -15px rgba(255, 0, 255, 0.5)',
        dark: '0px 3px 22px 0px rgba(0, 0, 0, .7)',
      },
    },
  },
  plugins: [],
}
