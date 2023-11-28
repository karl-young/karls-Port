/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/**/*.{ts,tsx}', './index.html'],
  theme: {
    colors: {
      green: '#15803d',
      lime: '#4d7c0f',
      sky: '#bae6fd',
      neutral: '#d6d3d1',
      blue: '#60a5fa',
      stone: '#0c0a09',
      slate: "#0f172a"
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
