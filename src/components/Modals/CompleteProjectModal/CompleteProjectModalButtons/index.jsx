import React from 'react'
import {AddDeleteModalButtonContainer} from '../../styles'
import {AuthenticatedButtonCancel, GreenLargeButton} from '../../../../style/buttons'


const CompleteProjectModalButtons = ({cancelButtonHandler, completeProjectHandler}) => {
    return (
        <AddDeleteModalButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <GreenLargeButton onClick={completeProjectHandler}>Complete</GreenLargeButton>
        </AddDeleteModalButtonContainer>
    )
}

export default CompleteProjectModalButtons
