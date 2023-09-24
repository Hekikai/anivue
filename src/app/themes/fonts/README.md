# Fonts

This directory contains all work with typography. Normalization, variables, classes creation, etc.

## How to use

It's recommended to use utility classes like `.text-` and `.heading-` according to the design guideline.  
Do not change `font-size` etc inline, except strange and weird cases.
## Examples
```vue
<header :class="[$s.header, 'text-sm']">
  It is Header! 
</header>
```
