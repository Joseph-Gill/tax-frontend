import styled from 'styled-components/macro'


export const BaseInput = styled.input`
    background: #FAFAFA;
    border: 1px solid #D3D8DD;
    color: #949A9F;
    border-radius: 4px;
    padding: 12px 11px 10px 11px;
    height: 42px;
    width: 302px;
    font-size: 14px;
    font-family: ${props => props.theme.nunitoFontFamily};

    :hover {
      border: ${props => props.theme.accentColor} solid 1px;
      cursor: pointer;
      transition: 0.5s;
    }
    :focus {
      border: ${props => props.theme.accentColor} solid 1px;
      width: 76%;
      outline: none;
      transition: 1s;
    }
    ::placeholder {
      color: #949A9F;
      font-size: 14px;
    }
`




