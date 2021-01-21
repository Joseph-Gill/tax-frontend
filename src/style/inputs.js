import styled from 'styled-components/macro'


export const BaseInput = styled.input`
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    color: ${props => props.theme.grayOne};
    border-radius: ${props => props.theme.inputBorderRadius};
    padding: 12px 11px 10px 11px;
    height: 42px;
    width: 302px;
    font-size: 14px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 167ms;
    }
    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 167ms;
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

export const ProjectNameInput = styled(BaseInput)`
    width: 302px;
`

export const FilterInput = styled(BaseInput)`
    width: 160px;
    height: 32px;
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`

export const FilterCheckBox = styled.input`
    height: 14px;
    width: 14px;
    margin-left: 3px;

    :hover {
    cursor: pointer;
}
`

export const TaskTitleInput = styled(BaseInput)`
    background: ${props => props.theme.white};
    margin-left: 153px;
`
