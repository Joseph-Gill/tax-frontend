import styled from 'styled-components/macro'
import {BaseInput} from '../../style/inputs'


export const NewTaskInputsContainer = styled.div`
    width: 860px;
    height: 484px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 30px;
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NewTaskCancelSaveButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
        margin-left: 20px;
    }
`

export const NewTaskInputRow = styled.div`
    display: flex;
    align-items: center;
`

export const NewTaskUpperLabelRow = styled(NewTaskInputRow)`
    align-items: flex-start;
`

export const NewTaskInputLabel = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
`

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

export const NewTaskFileListItem = styled.li`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.primaryBlue};
`

export const NewTaskErrorContainer = styled.div`
    height: 10px;
    margin-left: 213px;
`
