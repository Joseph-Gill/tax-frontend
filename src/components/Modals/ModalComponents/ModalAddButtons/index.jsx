import React from 'react'
import {AddDeleteModalButtonContainer, AddEntitySaveButton} from '../../styles'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'


const ModalAddButtons = ({cancelHandler, saveHandler}) => {
    return (
        <AddDeleteModalButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelHandler}>Cancel</AuthenticatedButtonCancel>
            <AddEntitySaveButton onClick={saveHandler}>Save</AddEntitySaveButton>
        </AddDeleteModalButtonContainer>
    )
}

export default ModalAddButtons
