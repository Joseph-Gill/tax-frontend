import React from 'react'
import {RemoveLinkEntityButton, RemoveLinkEntityButtonContainer} from '../../styles'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'


const ModalRemoveButtons = ({cancelButtonHandler, removeButtonHandler}) => {
    return (
        <RemoveLinkEntityButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <RemoveLinkEntityButton onClick={removeButtonHandler}>Remove</RemoveLinkEntityButton>
        </RemoveLinkEntityButtonContainer>
    )
}

export default ModalRemoveButtons
