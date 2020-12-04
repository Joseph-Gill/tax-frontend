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
  color: ${props => props.theme.grayOne}
`
