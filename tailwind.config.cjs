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
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
        },
      },
      boxShadow: {
        'ovd-sm': '0 1px 2px rgba(12, 14, 20, 0.04)',
        'ovd-md': '0 6px 18px rgba(12,14,20,0.08)',
        'ovd-lg': '0 24px 48px rgba(12,14,20,0.12)'
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        full: '9999px'
      },
      transitionTimingFunction: {
        'ovd-in-out': 'cubic-bezier(.2,.8,.2,1)'
      },
      zIndex: {
        dropdown: '60',
        header: '50',
        overlay: '70'
      },
      motionSafe: {},
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [],
}
