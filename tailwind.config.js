/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/**/*.{ts,tsx}', './index.html'],
  theme: {
    colors: {
      green: '#15803d',
      sky: '#bae6fd',
      neutral: '#d6d3d1',
      blue: '#60a5fa',
      stone: '#0c0a09',
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
    extend: {},
  },
  plugins: [],
}
