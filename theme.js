import { rgba } from 'polished'

const brand = {
  // Lead Pilot
  black: '#000000',
  white: '#ffffff',
  gray: '#565768',
  lightGray: '#ACADB8',
  lighterGray: '#BFC0CD',
  lightestGray: '#E1DFE4',
  darkPurple: '#271667',
  midPurple: '#565768',
  lightPurple: '#E8E9FF',

  grape: '#271667',
  highlight: '#6743C0',
  purple: '#6743C0',
  pastel: '#f1f2f4',

  errorColor: '#e74c3c',
  salmon: '#E26F42',
  orange: '#F89928',
  yellow: '#FFB600',
  green: '#00CA86'
}

const theme = {
  space: [0, 6, 12, 18, 24],
  breakpoints: ['520px', '800px', '980px', '1300px'],
  leadPilot: {
    themeName: 'Lead Pilot',
    colors: brand,
    defaultColor: brand,
    background: brand.white,
    color: brand.darkPurple,

    button: {
      background: brand.darkPurple,
      color: brand.white,
      loading_color: rgba(brand.white, 0.7),
      fancy: {
        background: brand.purple,
        color: brand.white
      },
      primary: {
        background: brand.highlight,
        color: brand.white
      },
      secondary: {
        background: rgba(brand.darkPurple, 0.4),
        color: rgba(brand.darkPurple, 0.4)
      },
      accent: {
        background: brand.green,
        color: brand.white
      },
      danger: {
        background: brand.errorColor,
        color: brand.white
      }
    },
    form: {
      color_required_after_filled: brand.purple,
      color_required_after_error: brand.white
    },
    chip: {
      background: brand.midPurple,
      color: brand.white,
      primary: brand.highlight,
      secondary: brand.midPurple,
      dark: brand.darkPurple,
      success: brand.green,
      error: brand.errorColor
    }
  }
}

export default theme
