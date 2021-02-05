import React from 'react'
import {AddMemberModalButtonContainer, BlueAddMemberButton} from '../styles'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'


const AddMemberButtons = ({cancelButtonHandler, addUserHandler}) => {
    return (
        <AddMemberModalButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <BlueAddMemberButton onClick={addUserHandler}>Send Invite</BlueAddMemberButton>
        </AddMemberModalButtonContainer>
    )
}

export default AddMemberButtons
