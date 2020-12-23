import styled from 'styled-components/macro'


export const BaseButton = styled.button`
    font-family: ${props => props.theme.spartanFontFamily};
    width: 301px;
    height: 40px;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.primaryBlue};
    box-shadow: ${props => props.theme.buttonBoxShadow};
    color: white;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    cursor: ${props => props.disabled ? '' : 'pointer'};

    :hover {
        background: ${props => props.disabled ? '' : props.theme.blueHover};
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
    background: ${props => props.theme.green};

    :hover {
        background: ${props => props.theme.greenDark};
    }
`
export const AuthenticatedButtonLarger = styled(BaseButton)`
    width: 186px;
    height: 32px;
`

export const RedLargerButton = styled(AuthenticatedButtonLarger)`
    background: ${props => props.theme.red};

    :hover {
        background: ${props => props.theme.redDark};
    }
`

export const AuthenticatedButtonLargest = styled(BaseButton)`
    width: 213px;
    height: 32px;
`


export const AuthenticatedButtonCancel = styled.button`
    width: 92px;
    height: 32px;
    background: ${props => props.theme.white};
    color: ${props => props.theme.grayTwo};
    border: 1px solid ${props => props.theme.grayTwo};
    border-radius: ${props => props.theme.borderRadius};
    cursor: ${props => props.disabled ? '' : 'pointer'};
    :hover {
       background: ${props => props.disabled ? '' : props.theme.grayFive};
    }
    :active {
      transform: translateY(1px);
    }
`

export const TableButton = styled.button`
    width: 97px;
    height: 26px;
    background: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    line-height: 13px;

  :hover {
      background: ${props => props.theme.grayFive};
      cursor: pointer;
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

export const CancelButton = styled(TableButton)`
    height: 32px;
    width: 92px;
    color: ${props => props.theme.grayTwo};
    border: 1px solid ${props => props.theme.grayTwo};
`

export const SaveButton = styled(BaseButton)`
    height: 32px;
    width: 78px;
    background: ${props => props.theme.green};

    :hover {
        background: ${props => props.theme.greenDark};
    }
`

export const DeleteButton = styled(BaseButton)`
    height: 32px;
    width: 89px;
    background: ${props => props.theme.red};
    box-shadow: 0 4px 10px rgba(255, 96, 92, 0.24);

    :hover {
        background: ${props => props.theme.redDark};
    }
`

export const AddEntityButton = styled(BaseButton)`
    width: 129px;
    height: 26px;
    font-size: 12px;
`

export const AddNewStepButton = styled(BaseButton)`
    width: 149px;
    height: 32px;
`
