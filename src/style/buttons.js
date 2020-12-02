import styled from 'styled-components/macro'


export const BaseButton = styled.button`
    width: 301px;
    height: 40px;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.accentColor};
    box-shadow: ${props => props.theme.boxShadowButton};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    cursor: ${props => props.disabled ? '' : 'pointer'};
    :hover {
       background: ${props => props.disabled ? '' : props.theme.accentColorLighter};
    }
    :active {
      transform: translateY(1px);
    }
`

export const AuthenticatedButtonLarge = styled(BaseButton)`
    width: 148px;
    height: 32px;
`

export const GreenLargeButton = styled(AuthenticatedButtonLarge)`
    :hover {
      background: ${props => props.theme.colorButtonGreenHover}
    }
    background: ${props => props.theme.colorButtonGreen}
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
