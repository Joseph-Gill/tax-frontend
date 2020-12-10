import styled from 'styled-components/macro'


export const AuthenticatedText = styled.p`
  font-family: ${props => props.theme.nunitoFontFamily};
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  font-style: normal;
  font-weight: normal;
  color: ${props => props.theme.grayOne};
`

export const ModalText = styled.p`
  font-family: ${props => props.theme.nunitoFontFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.grayOne};
`

export const HomePageText = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: ${props => props.theme.grayTwo};
`

export const HomeGroupText = styled.p`
  font-family: ${props => props.theme.nunitoFontFamily};
  font-size: 14px;
  line-height: 19px;
`

export const ExpandCollapseText = styled(HomeGroupText)`
  color: ${props => props.theme.primaryBlue};
`

export const CardTitleText = styled(HomePageText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
    margin-top: 16px;
`

export const CardInfoText = styled(HomeGroupText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
`
