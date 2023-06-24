import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import { COLOR_PRESET } from './uno-presets'

export default defineConfig({
  rules: [],
  presets: [
    COLOR_PRESET,
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins',
        poppins: [
          {
            name: 'Poppins',
            weights: ['300', '400', '500', '600', '700'],
          },
        ],
      },
    }),
  ],
})
