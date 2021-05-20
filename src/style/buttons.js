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
        font-weight: 500;
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
        border: 2px solid ${props => props.theme.grayTwo};
        font-weight: 500;
    }

    :active {
        outline: none;
        transform: translateY(1px);
        transition: 167ms;
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
    line-height: 12px;

    :hover {
        border: 2px solid ${props => props.theme.primaryBlue};
        background: ${props => props.theme.grayFive};
        cursor: pointer;
        transition: 167ms;
        font-weight: 700;
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

    :hover {
        border: 2px solid ${props => props.theme.red};
        background: ${props => props.theme.grayFive};
        cursor: pointer;
        transition: 167ms;
        font-weight: 700;
    }
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

    :disabled {
        box-shadow: none;
        border: 1px solid ${props => props.theme.grayTwo};
        background: ${props => props.theme.grayTwo};
    }
`

export const AddNewStepButton = styled(BaseButton)`
    width: 149px;
    height: 32px;
`

export const AddEntityLinkButton = styled(TableButton)`
    width: 110px;
    height: 26px;

    :disabled {
        box-shadow: none;
        border: 1px solid ${props => props.theme.grayTwo};
        color: ${props => props.theme.grayTwo};
    }
`

export const EditGroupButton = styled(BaseButton)`
    width: 122px;
    height: 32px;
`
