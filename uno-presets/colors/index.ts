import type { Preset } from '@unocss/core'

export const COLOR_PRESET: Preset = {
  name: 'color-preset',
  theme: {
    colors: {
      neutral: {
        900: '#171717',
        800: '#262626',
        700: '#404040',
        600: '#525252',
        500: '#737373',
        400: '#A3A3A3',
        300: '#D4D4D4',
        200: '#E9E9E9',
        100: '#F0F0F0',
        50: '#FAFAFA',
      },
      lime: {
        900: '#365314',
        800: '#3F6212',
        700: '#4D7C0F',
        600: '#65A30D',
        500: '#84CC16',
        400: '#A3E635',
        300: '#BEF264',
        200: '#D9F99D',
        100: '#ECFCCB',
        50: '#F7FEE7',
      },
      rose: {
        600: '#E11D48',
        400: '#FB7185',
        50: '#FFF1F2',
      },
      amber: {
        600: '#D97706',
        400: '#F59E0B',
        50: '#FEF3C7',
      },
      teal: {
        600: '#0D9488',
        400: '#2DD4BF',
        50: '#F0FDFA',
      },
      accent: {
        400: '#FBBF24',
      },
    },
  },
}
