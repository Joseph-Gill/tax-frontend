import styled from 'styled-components/macro'
import {BaseInput} from '../../style/inputs'


export const NewTaskTitleInput = styled(BaseInput)`
    background: ${props => props.theme.white};
    margin-left: 153px;
`

export const NewTaskDescriptionTextArea = styled.textarea`
    width: 607px;
    height: 101px;
    resize: none;
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    margin-left: 107px;
    padding: 16px;
`
