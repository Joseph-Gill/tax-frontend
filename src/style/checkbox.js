import styled from 'styled-components/macro'
import checkmarkV2 from '../assets/icons/stark_custom_checkbox_check_2.png'


export const CustomCheckbox = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 10px 0;

    .checkmark {
        width: 20px;
        height: 20px;
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
