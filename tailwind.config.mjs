/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple design system tokens
        apple: {
          label: '#1D1D1F',
          secondary: '#6E6E73',
          tertiary: '#AEAEB2',
          blue: '#0071E3',
          'bg-primary': '#FFFFFF',
          'bg-secondary': '#F5F5F7',
          separator: '#D2D2D7',
        },
        // Radix slate scale
        slate: {
          1: '#FCFCFD',
          2: '#F9F9FB',
          3: '#F2F2F5',
          4: '#EBEBEF',
          5: '#E4E4E9',
          6: '#DCDCE1',
          7: '#D0D0D8',
          8: '#B9B9C3',
          9: '#8B8B97',
          10: '#80808D',
          11: '#60606D',
          12: '#1C1C28',
        },
      },
      fontFamily: {
        headline: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'Inter',
          'sans-serif',
        ],
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          'Inter',
          'sans-serif',
        ],
        label: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          'Inter',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '-0.01em',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      fontSize: {
        display: ['76px', { lineHeight: '1.05', letterSpacing: '-0.045em' }],
        'display-sm': ['56px', { lineHeight: '1.07', letterSpacing: '-0.04em' }],
        headline: ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'headline-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        subhead: ['22px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        body: ['17px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        callout: ['15px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        footnote: ['13px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        caption: ['12px', { lineHeight: '1.3', letterSpacing: '0' }],
      },
    },
  },
  plugins: [],
};
