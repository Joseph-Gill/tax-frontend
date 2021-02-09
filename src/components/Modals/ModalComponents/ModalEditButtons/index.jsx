import React from 'react'
import {AddEntitySaveButton, EditEntityLinkButtonContainer} from '../../styles'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'


const ModalEditButtons = ({cancelButtonHandler, saveButtonHandler}) => {
    return (
        <EditEntityLinkButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <AddEntitySaveButton onClick={saveButtonHandler}>Save</AddEntitySaveButton>
        </EditEntityLinkButtonContainer>
    )
}

export default ModalEditButtons
