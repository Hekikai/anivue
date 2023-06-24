import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import { typographyPreset } from './uno-presets'

export default defineConfig({
  rules: [

  ],
  presets: [
    typographyPreset,
    presetUno(),
    presetWebFonts(),
  ],
})
