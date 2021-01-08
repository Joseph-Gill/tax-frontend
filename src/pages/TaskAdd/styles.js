import styled from 'styled-components/macro'
import {BaseInput} from '../../style/inputs'
import {ProjectDescriptionTextArea} from '../../style/textarea'


export const NewTaskTitleInput = styled(BaseInput)`
    background: ${props => props.theme.white};
    margin-left: 153px;
`

export const NewTaskDescriptionTextArea = styled(ProjectDescriptionTextArea)`
    width: 607px;
    height: 101px;
    margin-left: 107px;
`
