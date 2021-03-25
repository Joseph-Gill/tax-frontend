import styled from 'styled-components/macro'
import checkmarkV2 from '../assets/icons/stark_custom_checkbox_check_2.png'


export const InputLabel = styled.label`
    position: absolute;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16.37px;
    margin-left: 20px;
    margin-top: -8px;
    z-index: 1;
    padding-left: 4px;
    padding-right: 4px;
`

export const ActiveInputLabel = styled(InputLabel)`
    background: ${props => props.disabled ? `linear-gradient(#FFFFFF, #FFFFFF, #d4d4d4, ${props.theme.grayFour})`
        : `linear-gradient(#FFFFFF, ${props.theme.graySix})`};
    margin-left: 35px;

`

export const TextActiveInputLabel = styled(ActiveInputLabel)`
    margin-left: 20px;
`

export const EmailInputLabel = styled(InputLabel)`
    background: linear-gradient(#FFFFFF, #FFFFFF, #d4d4d4, ${props => props.theme.grayFour});
`

export const ModalInputLabel = styled(ActiveInputLabel)`
    margin-top: -40px;
`

export const FilterLabel = styled.label`
    position: absolute;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.primaryBlue};
    z-index: 1;
    margin-top: 8px;
    margin-left: 44px;
`

export const TaskInputLabel = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
`

export const StepFilterInputLabel = styled(InputLabel)`
    color: ${props => props.theme.primaryBlue};
    background: linear-gradient(${props => props.theme.grayFive}, ${props => props.theme.white});
    margin-top: -10px;
`

export const AccessProjectRoleLabel = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    font-style: normal;
    font-weight: normal;
    color: ${props => props.theme.grayOne};
    margin-left: 14px;

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }
`

export const FilterCustomCheckbox = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 10px 0;

    .checkmark {
        width: 15px;
        height: 15px;
        border: 1.2px solid ${props => props.theme.grayThree};
        display: inline-block;
        border-radius: 3px;
        background: ${props => props.theme.primaryBlue} url(${checkmarkV2}) center/1250% no-repeat;
        transition: background 0.2s ease;
    }

    input:checked + .checkmark {
        background-size: 60%;
        transition: background 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
    }

    input {
        display: none;
    }
`
