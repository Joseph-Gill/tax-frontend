import styled from 'styled-components/macro'


export const BaseInput = styled.input`
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    color: ${props => props.theme.grayOne};
    border-radius: ${props => props.theme.borderRadius};
    padding: 12px 11px 10px 11px;
    height: 42px;
    width: 302px;
    font-size: 14px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 0.5s;
    }
    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 1s;
    }
    ::placeholder {
        color: ${props => props.theme.grayTwo};
        font-size: 14px;
    }
    :disabled {
        background-color: ${props => props.theme.grayFour};
        border: 1px solid ${props => props.theme.grayThree};
    }
`

export const NameInput = styled(BaseInput)`
    width: 145px;
`
