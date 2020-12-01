import styled from 'styled-components/macro'


export const BaseInput = styled.input`
    background: ${props => props.theme.inputBackgroundColor};
    border: 1px solid ${props => props.theme.inputBorderColor};
    color: #949A9F;
    border-radius: 4px;
    padding: 12px 11px 10px 11px;
    height: 42px;
    width: 302px;
    font-size: 14px;
    font-family: ${props => props.theme.nunitoFontFamily};

    :hover {
      //border: ${props => props.theme.accentColor} solid 1px;
      filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
      cursor: pointer;
      transition: 0.5s;
    }
    :focus {
      border: ${props => props.theme.accentColor} solid 1px;
      //width: 76%;
      outline: none;
      transition: 1s;
    }
    ::placeholder {
      color: #949A9F;
      font-size: 14px;
    }
    :disabled {
      background-color: ${props => props.theme.disabledInputBackgroundColor};
      border: 1px solid ${props => props.theme.disabledInputBorderColor};
    }
`

export const NameInput = styled(BaseInput)`
    width: 145px;
`




