/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // purge: [
  //   './src/**/*..{js,ts,jsx,tsx,mdx,css,scss}',
  // ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'rgba(var(--hahan-primary) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-primary-foreground) / <alpha-value>)'
  			},
  			secondary: {
  				DEFAULT: 'rgba(var(--hahan-secondary) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-secondary-foreground) / <alpha-value>)'
  			},
  			background: 'rgba(var(--hahan-background) / <alpha-value>)',
  			foreground: 'rgba(var(--hahan-foreground) / <alpha-value>)',
  			card: {
  				DEFAULT: 'rgba(var(--hahan-card) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-card-foreground) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'rgba(var(--hahan-popover) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-popover-foreground) / <alpha-value>)'
  			},
  			muted: {
  				DEFAULT: 'rgba(var(--hahan-muted) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-muted-foreground) / <alpha-value>)'
  			},
  			accent: {
  				DEFAULT: 'rgba(var(--hahan-accent) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-accent-foreground) / <alpha-value>)'
  			},
  			error: {
  				DEFAULT: 'rgba(var(--hahan-error) / <alpha-value>)',
  				foreground: 'rgba(var(--hahan-error-foreground) / <alpha-value>)'
  			},
  			border: 'rgba(var(--hahan-border) / <alpha-value>)',
  			input: 'rgba(var(--hahan-input) / <alpha-value>)',
  			ring: 'rgba(var(--hahan-ring) / <alpha-value>)',
  			chart: {
  				'1': 'rgba(var(--hahan-chart-1) / <alpha-value>)',
  				'2': 'rgba(var(--hahan-chart-2) / <alpha-value>)',
  				'3': 'rgba(var(--hahan-chart-3) / <alpha-value>)',
  				'4': 'rgba(var(--hahan-chart-4) / <alpha-value>)',
  				'5': 'rgba(var(--hahan-chart-5) / <alpha-value>)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--hahan-radius)',
  			md: 'calc(var(--hahan-radius) - 2px)',
  			sm: 'calc(var(--hahan-radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
