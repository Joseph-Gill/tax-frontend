import styled from 'styled-components/macro'


export const BaseButton = styled.button`
    width: 301px;
    height: 40px;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.accentColor};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    cursor: ${props => props.disabled ? '' : 'pointer'};
    :hover {
       background: ${props => props.disabled ? '' : props.theme.accentColorLighter};
    }
    :active {
      transform: translateY(4px);
    }
`

export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    align-self: flex-end;
    font-size: 15px;
    cursor: pointer;

    :hover {
      font-size: 16px;
      font-weight: bold;
    }
    :active {
      transform: translateY(4px);
    }
`

export const EditButton = styled(BaseButton)`
    width: 50px;
    height: 28px;
    background: orange;
`

export const DeleteButton = styled(BaseButton)`
    width: 50px;
    height: 28px;
    background: red;
`
