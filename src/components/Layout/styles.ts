import styled from '@emotion/styled'
import { headerHeight } from '@/src/components/layouts/Header/constants'

export const Container = styled.div`
  //max-width: 1298px;
  //margin: 0 auto;
  width: 100%;
`

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  padding-top: ${headerHeight}px;
  padding-top: ${headerHeight}px;
  ${({ theme }) => theme.media.mobile`
    padding-top: 42px;
    padding-top: ${headerHeight}px;
  `}
  min-height: calc(100vh - ${headerHeight}px);
  min-height: calc(100vh - ${headerHeight}px);
  ${({ theme }) => theme.media.mobile`
    min-height: calc(100vh - 42px);
    min-height: calc(100vh - ${headerHeight}px);
  `}
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${headerHeight + 2}px;
  min-height: calc(100vh - ${headerHeight}px);
`
