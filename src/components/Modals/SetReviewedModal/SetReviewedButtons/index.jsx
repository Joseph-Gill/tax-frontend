import React from 'react'
import {AddDeleteModalButtonContainer, BlueConfirmReviewedButton} from '../../styles'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'


const SetReviewedButtons = ({cancelButtonHandler, setReviewedHandler}) => {
    return (
        <AddDeleteModalButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <BlueConfirmReviewedButton onClick={setReviewedHandler}>Confirm Reviewed</BlueConfirmReviewedButton>
        </AddDeleteModalButtonContainer>
)
}

export default SetReviewedButtons
