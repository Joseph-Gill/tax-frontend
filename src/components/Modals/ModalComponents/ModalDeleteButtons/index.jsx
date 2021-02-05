import React from 'react'
import {AddDeleteModalButtonContainer} from '../../styles'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../../style/buttons'


const ModalDeleteButtons = ({cancelButtonHandler, deleteButtonHandler, deleteText}) => {
    return (
        <AddDeleteModalButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <RedLargerButton onClick={deleteButtonHandler}>{deleteText}</RedLargerButton>
        </AddDeleteModalButtonContainer>
    )
}

export default ModalDeleteButtons
