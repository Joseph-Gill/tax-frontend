import styled from 'styled-components/macro'


export const InputLabel = styled.label`
  position: absolute;
  font-family: ${props => props.theme.nunitoFontFamily};
  font-weight: 600;
  font-size: 12px;
  line-height: 16.37px;
  margin-left: 17px;
  margin-top: -8px;
  background: linear-gradient(#FFFFFF, ${props => props.theme.inputBackgroundColor});
`
