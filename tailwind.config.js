import { config } from './lib/server/config'
import { FONTS_SANS, FONTS_SERIF } from './consts'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
            underlineOffset: {
        '8': '8px',
        '6': '6pd'},
      colors: {
        day: {
          DEFAULT: config.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: config.darkBackground || '#111827'
        },
                'gray-800': 'rgb(45, 45, 45)',
                'gray-600': 'rgb(8a, 8a, 8a)',
      },
      fontFamily: {
        sans: FONTS_SANS,
        serif: FONTS_SERIF,
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
