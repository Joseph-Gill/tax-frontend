import styled from 'styled-components/macro'


export const BaseInput = styled.input`
    background: none;
    border: #d1d1d1 solid 2px;
    color: #212121;
    border-radius: 5px;
    padding: 4px 8px;
    height: 36px;
    width: 75%;
    font-size: 15px;
    :hover {
      border-bottom: ${props => props.theme.accentColor} solid 2px;
      cursor: pointer;
      transition: 0.5s;
    }
    :focus {
      border: ${props => props.theme.accentColor} solid 2px;
      width: 76%;
      outline: none;
      transition: 1s;
    }
    ::placeholder {
      color: #b4b4b4;
      font-size: 15px;
    }
`




