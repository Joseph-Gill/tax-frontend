import React from 'react'
import {EditEntityButtonContainer} from '../styles'
import {AuthenticatedButtonCancel} from '../../../../style/buttons'
import {AddEntitySaveButton} from '../../styles'


export const EditEntityButtons = ({cancelButtonHandler, saveButtonHandler}) => {
    return (
        <EditEntityButtonContainer>
            <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
            <AddEntitySaveButton onClick={saveButtonHandler}>Save</AddEntitySaveButton>
        </EditEntityButtonContainer>
    )
}

export default EditEntityButtons
