import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  padding: 0 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 500;
  background-color: #fff;
  align-items: center;
  ${({ theme }) => theme.media.md`
  padding: 0 32px;
  `}
  ${({ theme }) => theme.media.sm`
  padding: 0;
  `} ${({ theme }) => theme.media.mobile`
  padding: 0;
    `}
`

export const HeaderInner = styled.div`
  height: 88px;
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  ${({ theme }) => theme.media.md`
    // padding: 0;
    width: calc(100% - 32px * 2);
  `}
  ${({ theme }) => theme.media.sm`
 
    width: calc(100% - 32px * 2);
  `}
`

export const Logo = styled.img`
  width: 130px;
  height: 24px;
  cursor: pointer;
`
export const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.grayScale[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #ebebf0;
  margin: 0 16px;
  ${({ theme }) => theme.media.sm`
   margin: 0;
  `}
  ${({ theme }) => theme.media.mobile`
   margin: 0;
  `}
`

export const NavLink = styled.a`
  ${({ theme }) => theme.typography.pm};
  color: #a0a0b0;
`

export const LocationText = styled.h4`
  ${({ theme }) => theme.typography.pm};
  color: ${({ theme }) => theme.grayScale[3]};
  font-weight: 400;
  padding: 0 24px;
  height: 100%;
  align-items: center;
  display: flex;
`

export const BurgerButton = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`

export const BurgerIconWrapper = styled.div`
  color: #a0a0b0;
  cursor: pointer;
  position: relative;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.sm`
  padding: 0 16px;
  `}
  ${({ theme }) => theme.media.mobile`
   padding: 0 16px;
  `}
  svg path {
    stroke: ${({ theme }) => theme.grayScale[1]};
  }
  &:hover {
    ${CloseButton} {
      border: 2px solid ${({ theme }) => theme.grayScale[2]};
    }

    svg path {
      stroke: ${({ theme }) => theme.grayScale[2]};
      fill: ${({ theme }) => theme.grayScale[0]};
    }
  }
  &:active {
    ${CloseButton} {
      border: 2px solid ${({ theme }) => theme.grayScale[3]};
    }
    svg path {
      stroke: ${({ theme }) => theme.grayScale[3]};
    }
  }
`
export const MobileFloatMenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  inset: 87px 0 0 0;
  overflow-y: scroll;
`

export const LeftBlock = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 50%;
  justify-content: flex-start;
  align-items: center;
`

export const RightBlock = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 50%;
  justify-content: flex-end;
  align-items: center;
`

export const LogoWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 100%;
`

export const MapPinIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 0 20px;
  svg path {
    stroke: ${({ theme }) => theme.grayScale[3]};
  }
  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[4]};
    }
  }
  &:active {
    svg path {
      stroke: ${({ theme }) => theme.grayScale[5]};
    }
  }
`

export const SearchIconWrapper = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 0 20px;
  svg path {
    stroke: ${({ theme, isActive }) =>
      isActive ? theme.primary[0] : theme.grayScale[3]};
    transition: stroke 0.2s ease-in-out;
  }
  transition: 0.2s ease-in-out;
  &:hover {
    svg path {
      stroke: ${({ theme }) => theme.primary[2]};
    }
  }
  &:active {
    svg path {
      stroke: ${({ theme }) => theme.primary[1]};
    }
  }

  ${({ theme }) => theme.media.mobile`
 display: none;
  `}
`
