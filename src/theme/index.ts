import { media } from './breakpoints'
import { ButtonStylesEnum, ButtonStylesSizeEnum } from '@/theme/enum'
import React from 'react'

const lineHeight = 1.4

const fontSize = {
  h6: '10px',
  h5: '12px',
  h4: '14px',
  h3: '16px',
  h2: '18px',
  h1: '24px',
  lg: '32px',
  xxl: '64px',
}

const typography = {
  pl: { s: 16, h: 24 },
  pm: { s: 14, h: 24 },
  ps: { s: 12, h: 18 },
  h7: { s: 10, h: 16 },
  h6: { s: 12, h: 16 },
  h5: { s: 14, h: 24 },
  h4: { s: 16, h: 24 },
  h3: { s: 24, h: 32 },
  h2: { s: 32, h: 40 },
  extraMobile: { s: 64, h: 64 },
  extra: { s: 96, h: 96 },
}

for (const [key, value] of Object.entries(typography)) {
  typography[key] = `font-size: ${value.s}px; line-height:${value.h}px;`
}

const primary = {
  0: '#FF005D',
  1: '#D80E5D',
  2: '#B01B5D',
}

const opacity = {
  70: {
    0: 'rgba(247,0,91,0.7)',
    1: 'rgba(216,14,93,0.7)',
    2: 'rgba(176,27,93,0.7)',
  },
  50: {
    0: 'rgba(247,0,91,0.5)',
    1: 'rgba(216,14,93,0.5)',
    2: 'rgba(176,27,93,0.5)',
  },
}

const grayScale = {
  0: '#ffffff',
  1: '#EBEBF0',
  2: '#D0D0DB',
  3: '#A0A0B0',
  4: '#40404A',
  5: '#1E1E29',
  6: '#F5F5F7',
}

const support = {
  0: '#0077ED',
  1: '#FFD166',
  2: '#2FC27D',
}

const gradient = {
  0: 'linear-gradient(243.71deg, #FF005D -12.85%, #D80E5D 51.36%, #B01B5D 114.24%);',
}

const button = {
  background: {
    [ButtonStylesEnum.primary]: primary[0],
    [ButtonStylesEnum.secondary]: grayScale[0],
    [ButtonStylesEnum.tertiary]: grayScale[0],
    [ButtonStylesEnum.neutral]: support[0],
    [ButtonStylesEnum.link]: 'none',
  },
  color: {
    [ButtonStylesEnum.primary]: grayScale[0],
    [ButtonStylesEnum.secondary]: primary[0],
    [ButtonStylesEnum.tertiary]: grayScale[5],
    [ButtonStylesEnum.neutral]: grayScale[0],
    [ButtonStylesEnum.link]: grayScale[3],
  },
  border: {
    [ButtonStylesEnum.primary]: `2px solid ${primary[0]}`,
    [ButtonStylesEnum.secondary]: `2px solid ${primary[0]}`,
    [ButtonStylesEnum.tertiary]: `2px solid ${grayScale[2]}`,
    [ButtonStylesEnum.neutral]: `2px solid ${support[0]}`,
    [ButtonStylesEnum.link]: 'none',
  },
  icon: {
    [ButtonStylesEnum.primary]: primary[0],
    [ButtonStylesEnum.secondary]: primary[0],
    [ButtonStylesEnum.tertiary]: grayScale[2],
    [ButtonStylesEnum.neutral]: grayScale[0],
    [ButtonStylesEnum.link]: grayScale[3],
  },
  padding: {
    [ButtonStylesSizeEnum.default]: '0 32px',
    [ButtonStylesSizeEnum.medium]: '0 24px',
    [ButtonStylesSizeEnum.small]: '0 16px',
  },
  height: {
    [ButtonStylesSizeEnum.default]: '48px',
    [ButtonStylesSizeEnum.medium]: '40px',
    [ButtonStylesSizeEnum.small]: '32px',
  },

  hover: {
    background: {
      [ButtonStylesEnum.primary]: grayScale[0],
      [ButtonStylesEnum.secondary]: 'rgba(255,0,93,0.05)',
      [ButtonStylesEnum.tertiary]: grayScale[0],
      [ButtonStylesEnum.neutral]: grayScale[0],
      [ButtonStylesEnum.link]: 'none',
    },
    color: {
      [ButtonStylesEnum.primary]: primary[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.neutral]: support[0],
      [ButtonStylesEnum.link]: grayScale[5],
    },
    border: {
      [ButtonStylesEnum.primary]: `2px solid ${primary[0]}`,
      [ButtonStylesEnum.secondary]: `2px solid ${primary[0]}`,
      [ButtonStylesEnum.tertiary]: `2px solid ${grayScale[5]}`,
      [ButtonStylesEnum.neutral]: `2px solid ${support[0]}`,
      [ButtonStylesEnum.link]: 'none',
    },
    icon: {
      [ButtonStylesEnum.primary]: primary[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.neutral]: support[0],
      [ButtonStylesEnum.link]: grayScale[3],
    },
  },
  active: {
    background: {
      [ButtonStylesEnum.primary]: primary[1],
      [ButtonStylesEnum.secondary]: 'rgba(255,0,93,0.1)',
      [ButtonStylesEnum.tertiary]: 'rgba(208,208,219,0.3)',
      [ButtonStylesEnum.neutral]: '#0077ed91',
      [ButtonStylesEnum.link]: 'none',
    },
    color: {
      [ButtonStylesEnum.primary]: grayScale[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.neutral]: grayScale[0],
      [ButtonStylesEnum.link]: grayScale[5],
    },
    border: {
      [ButtonStylesEnum.primary]: `2px solid ${primary[1]}`,
      [ButtonStylesEnum.secondary]: `2px solid ${primary[0]}`,
      [ButtonStylesEnum.tertiary]: `2px solid ${grayScale[5]}`,
      [ButtonStylesEnum.neutral]: `2px solid ${support[0]}`,
      [ButtonStylesEnum.link]: 'none',
    },
    icon: {
      [ButtonStylesEnum.primary]: grayScale[0],
      [ButtonStylesEnum.secondary]: primary[0],
      [ButtonStylesEnum.tertiary]: grayScale[5],
      [ButtonStylesEnum.neutral]: support[0],
      [ButtonStylesEnum.link]: grayScale[3],
    },
  },
  disabled: {
    background: {
      [ButtonStylesEnum.primary]: grayScale[6],
      [ButtonStylesEnum.secondary]: grayScale[6],
      [ButtonStylesEnum.tertiary]: grayScale[6],
      [ButtonStylesEnum.neutral]: grayScale[6],
      [ButtonStylesEnum.link]: 'none',
    },
    color: {
      [ButtonStylesEnum.primary]: grayScale[2],
      [ButtonStylesEnum.secondary]: grayScale[2],
      [ButtonStylesEnum.tertiary]: grayScale[2],
      [ButtonStylesEnum.neutral]: grayScale[2],
      [ButtonStylesEnum.link]: grayScale[2],
    },
    border: {
      [ButtonStylesEnum.primary]: null,
      [ButtonStylesEnum.secondary]: null,
      [ButtonStylesEnum.tertiary]: null,
      [ButtonStylesEnum.neutral]: null,
      [ButtonStylesEnum.link]: null,
    },
  },
}

export const theme = {
  media,
  lineHeight,
  fontSize,
  primary,
  opacity,
  grayScale,
  support,
  button,
  typography,
  gradient,
}

export type Theme = typeof theme

export * from './enum'
export * from './union'
export * from './breakpoints'
