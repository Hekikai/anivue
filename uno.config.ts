import { defineConfig, presetUno, presetWebFonts } from 'unocss';
import { COLOR_PRESET } from './uno-presets/colors';
import { TYPOGRAPHY_PRESET } from './uno-presets/typography';

export default defineConfig({
  rules: [
    [/^p-(\d+)$/, match => ({ padding: `${match[1]}px` })],
    [/^px-(\d+)$/, match => ({ 'padding-left': `${match[1]}px`, 'padding-right': `${match[1]}px` })],
    [/^py-(\d+)$/, match => ({ 'padding-top': `${match[1]}px`, 'padding-bottom': `${match[1]}px` })],
  ],
  presets: [
    COLOR_PRESET,
    TYPOGRAPHY_PRESET,
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Rubik',
        rubik: [
          { name: 'Rubik', weights: ['400', '500', '600'] },
        ],
      },
    }),
  ],
  configDeps: ['./uno-presets/typography/index.ts', './uno-presets/colors/index.ts'],
});
