import styled from 'styled-components/macro'
import {BaseInput} from '../../../../style/inputs'
import {AddNewStepButton} from '../../../../style/buttons'


export const DisabledDateInput = styled(BaseInput)`
    width: 128px;
    height: 32px;
`

export const DateInputAddStepButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepDisplayAddStepButton = styled(AddNewStepButton)`
    margin-left: 40px;

    :disabled {
        box-shadow: none;
        border: 1px solid ${props => props.theme.grayTwo};
        background: ${props => props.theme.grayTwo};
    }
`
