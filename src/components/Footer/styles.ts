import styled from '@emotion/styled'

export const FooterContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[1]};
  border-top: 1px solid ${({ theme }) => theme.grayScale[1]};
  width: 100%;
  min-height: 176px;
  height: auto;
  display: flex;
  padding-left: 40px;
  margin-top: 100px;
  ${({ theme }) => theme.media.mobile`
   padding-left: 0;
  `}
`

export const FooterInner = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  ${({ theme }) => theme.media.sm`
   flex-direction: column;
  `}
  ${({ theme }) => theme.media.mobile`
   flex-direction: column;
  `}
`

export const FooterLogo = styled.img`
  width: 130px;
  height: 24px;
  cursor: pointer;
`

export const LinkGroup = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 50%;
  a {
    justify-content: flex-start;
    ${({ theme }) => theme.typography.pl};
    font-weight: 400;
  }
  ${({ theme }) => theme.media.sm`
  width: 100%;
  margin-bottom: 20px;
  `}
  ${({ theme }) => theme.media.mobile`
   width: 100%; 
   margin-bottom: 20px;
  `}
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: auto;
`

export const UnderFooter = styled.div`
  width: 100%;
  height: 82px;
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.mobile`
     margin: 40px 0;
     height: auto;
     flex-direction: column;
     align-items: flex-start;
     padding-left:0;
  `}
`

export const UnderFooterLeft = styled.div`
  width: 30%;
  display: flex;
  color: ${({ theme }) => theme.grayScale[4]};
  ${({ theme }) => theme.typography.ps};
  a {
    color: ${({ theme }) => theme.grayScale[3]};
    ${({ theme }) => theme.typography.ps};
    text-decoration: none;
    margin: 0 4px;
    &:hover {
      color: ${({ theme }) => theme.grayScale[5]};
    }
  }
  ${({ theme }) => theme.media.sm`
  width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
  width: 100%;
  padding-left: 56px;
  `}
`

export const UnderFooterRight = styled.div`
  width: 70%;
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    color: ${({ theme }) => theme.grayScale[4]};
    ${({ theme }) => theme.typography.ps};
    text-decoration: none;
    margin-left: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    ${({ theme }) => theme.media.sm`
     margin-left: 0;
      margin-right: 32px;
  `} ${({ theme }) => theme.media.mobile`
         margin-left: 0;
         margin-right: 32px;
         margin-top: 16px;
  `}
  }

  ${({ theme }) => theme.media.md`
     margin-right: 0;
  `}

  ${({ theme }) => theme.media.sm`  
      margin-right: 0;
      width: 100%;
      margin-top: 16px;
      justify-content: flex-start;
  `} 
  
  ${({ theme }) => theme.media.mobile`
    margin-right: 0;
      padding-left: 56px;
      width: 100%;
      margin-top: 16px;
      flex-direction: column;
      align-items: flex-start;
  `}
`

export const FirstFooterSection = styled.div`
  width: 200px;
  display: flex;
  flex-grow: 1;
  height: 136px;
  align-items: center;
  ${({ theme }) => theme.media.sm`
  margin-right: 0;
  width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
   width: 100%;
   margin-left: 62px;
  `}
`

export const MiddleFooterSection = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-flow: row wrap;
  padding: 50px 0;
  margin-left: 70px;

  ${({ theme }) => theme.media.md`
    margin-left: 0;
  `}
  ${({ theme }) => theme.media.sm`
    padding: 32px 0; 
    margin-left: 0;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-left: 0;  
    padding: 0; 
    width: 100%;
    margin-left: 48px;
  `}
`

export const EndFooterSection = styled.div`
  width: 200px;
  display: flex;
  flex-grow: 1;
  height: 100%;
  margin-right: 10%;
  min-width: 110px;
  justify-content: flex-end;
  text-align: center;
  padding: 50px 0;
  ${({ theme }) => theme.media.md`
    margin-right: 0;
  `}

  ${({ theme }) => theme.media.sm`
    margin-right: 0;
    padding: 32px 0;
    justify-content: flex-start;
  `}
  
  ${({ theme }) => theme.media.mobile`
    margin-right: 0;
    padding: 32px 0 64px 0;
    width: 100%;
    justify-content: flex-start;
    margin-left: 56px;
  `}
`

export const Block = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  ${({ theme }) => theme.media.sm`
  flex-direction: column;
  `}
  ${({ theme }) => theme.media.mobile`
  flex-direction: column;
  `}
`

export const SectionFooterWrap = styled.div`
  display: flex;
  width: calc(100% - 200px);
  align-items: flex-start;
  flex-grow: 1;
  ${({ theme }) => theme.media.sm`
  width: 100%;
  `}
  ${({ theme }) => theme.media.mobile`
  width: 100%;
  flex-direction:column;
  `}
`

export const Flex = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.media.sm`
   flex-direction: column;
  `}
  ${({ theme }) => theme.media.mobile`
   flex-direction: column;
  `}
`
