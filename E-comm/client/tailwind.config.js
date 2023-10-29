/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Handjet'],
      body: ['Ubuntu'],
      title: ['"Ysabeau SC"'],
    },
  },
  daisyui: {
    themes: ['dark'],
  },
  plugins: [require('daisyui')],
};
