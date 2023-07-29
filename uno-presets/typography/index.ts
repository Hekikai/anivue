import type { Preset } from '@unocss/core'

export const TYPOGRAPHY_PRESET: Preset = {
  name: 'typography-preset',
  rules: [
    ['heading-1', { 'line-height': '44px', 'font-size': '36px', 'font-weight': '600' }],
    ['heading-2', { 'line-height': '40px', 'font-size': '32px', 'font-weight': '600' }],
    ['heading-3', { 'line-height': '32px', 'font-size': '24px', 'font-weight': '600' }],
    ['text-lg-semibold', { 'line-height': '24px', 'font-size': '18px', 'font-weight': '600' }],
    ['text-lg', { 'line-height': '28px', 'font-size': '18px', 'font-weight': '400' }],
    ['text-base-medium', { 'line-height': '24px', 'font-size': '16px', 'font-weight': '500' }],
    ['text-base', { 'line-height': '26px', 'font-size': '16px', 'font-weight': '400' }],
    ['text-sm-medium', { 'line-height': '20px', 'font-size': '14px', 'font-weight': '500' }],
    ['text-sm', { 'line-height': '20px', 'font-size': '14px', 'font-weight': '400' }],
    ['text-xs', { 'line-height': '18px', 'font-size': '12px', 'font-weight': '400' }],
  ],
}
