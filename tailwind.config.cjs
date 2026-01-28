/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './branding/**/*.{css,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-alt': 'var(--primary-color-alt)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--ovd-green)'
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    }
  },
  plugins: [],
}
