/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: 'var(--f)',
        accent: 'var(--a)',
        deep: 'var(--d)',
        paper: 'var(--paper)',
        paper2: 'var(--paper2)',
        line: 'var(--line)',
        ink: 'var(--ink)',
        read: 'var(--read)',
        cream: 'var(--cream)',
      },
      fontFamily: {
        display: ['var(--font-cal)', 'system-ui', 'sans-serif'],
        body: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: 'var(--radius)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}
