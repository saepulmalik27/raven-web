import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        "main" : '1280px'
      },
      width : {
        'main': "1280px"
      },
      colors : {
        primary : '#0CC03E',
        danger : '#E5111E',
        "jet-black" : {
          100 : '#CCCCCC',
          200 : '#B5B5B5',
          300 : '#7C7C7C',
          400 : '#E3E3E3',
          500 : '#333333'
        },
        "green-raven" : {
          200 : '#4BFF72'
        }
      }
    },
  },
  plugins: [],
}
export default config
