import { css } from '@emotion/react'
import { isMobileOnly, isTablet } from 'react-device-detect'
// local libs
import { useStoreon } from '@/store/index'
// types
import { ArrayCSSInterpolation } from '@emotion/serialize/types'
import { SerializedStyles } from '@emotion/react'

export enum BreakpointsEnum {
  xxs = 'xxs',
  xs = 'xs',
  mobile = 'mobile',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type BreakpointsUnion = keyof typeof BreakpointsEnum

export const breakpoints = {
  [BreakpointsEnum.xl]: {
    min: 1920,
    max: 5120,
  },
  [BreakpointsEnum.lg]: {
    min: 1420,
    max: 1920 - 1,
  },
  [BreakpointsEnum.md]: {
    min: 960,
    max: 1420 - 1,
  },
  [BreakpointsEnum.sm]: {
    min: 600,
    max: 960 - 1,
  },
  [BreakpointsEnum.mobile]: {
    min: 320,
    max: 600 - 1,
  },
  [BreakpointsEnum.xs]: {
    min: 375,
    max: 600 - 1,
  },
  [BreakpointsEnum.xxs]: {
    min: 320,
    max: 375 - 1,
  },
}

const breakpointsOrdering: Array<BreakpointsUnion> = [
  // ordering
  BreakpointsEnum.xxs,
  BreakpointsEnum.xs,
  BreakpointsEnum.sm,
  BreakpointsEnum.md,
  BreakpointsEnum.lg,
  BreakpointsEnum.xl,
]

const compareCurrentBreakpoint = (a: BreakpointsUnion, b: BreakpointsUnion) =>
  breakpointsOrdering.indexOf(a) === breakpointsOrdering.indexOf(b)
    ? 'EQ'
    : breakpointsOrdering.indexOf(a) > breakpointsOrdering.indexOf(b)
    ? 'GT'
    : 'LT'

const getApproximateBreakpoint = (): Exclude<BreakpointsUnion, 'mobile'> => {
  if (isMobileOnly) return BreakpointsEnum.xs
  else if (isTablet) return BreakpointsEnum.sm
  else return BreakpointsEnum.lg
}

type CurrentWidth = number | null
const getCurrentBreakpoint = (
  x: CurrentWidth = null
): Exclude<BreakpointsUnion, 'mobile'> =>
  x === null
    ? getApproximateBreakpoint() // by default (for SSR also), you're free to change it
    : x <= breakpoints.xxs.max
    ? BreakpointsEnum.xxs
    : x >= breakpoints.xs.min && x <= breakpoints.xs.max
    ? BreakpointsEnum.xs
    : x >= breakpoints.sm.min && x <= breakpoints.sm.max
    ? BreakpointsEnum.sm
    : x >= breakpoints.md.min && x <= breakpoints.md.max
    ? BreakpointsEnum.md
    : x >= breakpoints.lg.min && x <= breakpoints.lg.max
    ? BreakpointsEnum.lg
    : BreakpointsEnum.xl

// for using breakpoints inside components
export const useBreakpoints = (): {
  ccb: typeof compareCurrentBreakpoint
  cb: Exclude<BreakpointsUnion, 'mobile'>
} => {
  const { windowState } = useStoreon('windowState')

  return {
    ccb: compareCurrentBreakpoint,
    cb: getCurrentBreakpoint(windowState.innerWidth),
  }
}

type Media = Record<
  BreakpointsUnion,
  (
    template: TemplateStringsArray,
    ...args: ArrayCSSInterpolation
  ) => SerializedStyles
>
// for using breakpoints in styled
export const media = (
  Object.keys(breakpoints) as Array<BreakpointsUnion>
).reduce((acc, current: BreakpointsUnion) => {
  acc[current] = (...args) =>
    current === BreakpointsEnum.xxs || current === BreakpointsEnum.mobile
      ? css`
          @media (max-width: ${breakpoints[current].max}px) {
            ${css(...args)}
          }
        `
      : css`
          @media (min-width: ${breakpoints[current]
              .min}px) and (max-width: ${breakpoints[current].max}px) {
            ${css(...args)}
          }
        `

  return acc
}, {} as Media)
