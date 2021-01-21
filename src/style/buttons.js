import styled from 'styled-components/macro'


export const BaseButton = styled.button`
    font-family: ${props => props.theme.spartanFontFamily};
    width: 301px;
    height: 40px;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.primaryBlue};
    box-shadow: ${props => props.theme.buttonBoxShadow};
    color: white;
    border: none;
    border-radius: ${props => props.theme.buttonBorderRadius};
    cursor: ${props => props.disabled ? '' : 'pointer'};
    text-align: center;

    :hover {
        background: ${props => props.disabled ? '' : props.theme.blueHover};
        transition: 500ms;
    }

    :active {
        outline: none;
        transform: translateY(1px);
    }
`

export const AuthenticatedButtonCancel = styled.button`
    width: 92px;
    height: 32px;
    text-align: center;
    background: ${props => props.theme.white};
    color: ${props => props.theme.grayTwo};
    border: 1px solid ${props => props.theme.grayTwo};
    border-radius: ${props => props.theme.buttonBorderRadius};
    cursor: ${props => props.disabled ? '' : 'pointer'};

    :hover {
        background: ${props => props.disabled ? '' : props.theme.grayFive};
        transition: 167ms;
    }

    :active {
        outline: none;
        transform: translateY(1px);
    }
`
export const TableButton = styled.button`
    width: 97px;
    height: 26px;
    text-align: center;
    background: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.buttonBorderRadius};
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 12px;
    font-weight: 600;
    line-height: 13px;

    :hover {
        border: 2px solid ${props => props.theme.primaryBlue};
        background: ${props => props.theme.grayFive};
        cursor: pointer;
        transition: 167ms;
    }

    :active {
        outline: none;
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

    :hover {
        border: 2px solid ${props => props.theme.grayTwo};
    }
`

export const WireFrameDeleteButton = styled(TableButton)`
    width: 72px;
    height: 26px;
    border: 1px solid ${props => props.theme.red};
    color: ${props => props.theme.red};
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
