/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ovd: {
          blue: '#0033A0',
          green: '#00A676',
          yellow: '#F2C94C',
          midnight: '#0A0F1F',
          purple: '#6A0DAD',
          slate: '#1C2333',
          light: '#F5F7FA',
          grey: '#A7A9AC',
        },
      },
      backgroundImage: {
        'ovd-gradient': 'linear-gradient(90deg, #0033A0, #00A676, #F2C94C)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
      },
    },
  },
  plugins: [],
}
