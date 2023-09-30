import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        body: 'var(--body)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        text: 'var(--text)',
        link: 'var(--link)',
        border: 'var(--border)',
        projbuttons: 'var(--projbuttons)',
        fontweight: 'var(--fontweight)'
      },
      maxWidth: {
        maxwidth: 'var(--maxwidth)'
      },
      fontFamily: {
        fontprimary: 'var(--fontprimary)',
        fontsecondary: 'var(--fontsecondary)'
      }
    }
  },
  plugins: []
}
export default config
