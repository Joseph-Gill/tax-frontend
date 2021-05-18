import React from 'react'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'
import {CompleteStepButtonContainer, SaveStepButton} from './styles'


const CompleteStepModalButtons = ({cancelButtonHandler, confirmButtonHandler}) => {
    return (
        <CompleteStepButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <SaveStepButton onClick={confirmButtonHandler}>Confirm</SaveStepButton>
        </CompleteStepButtonContainer>
    )
}

export default CompleteStepModalButtons
