import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import { typographyPreset } from './uno-presets'

export default defineConfig({
  rules: [

  ],
  presets: [
    typographyPreset,
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
