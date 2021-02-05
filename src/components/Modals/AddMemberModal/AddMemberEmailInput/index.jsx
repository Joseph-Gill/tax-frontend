import React from 'react'
import {BaseInput} from '../../../../style/inputs'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {AddMemberErrorMessageContainer, AddTeamMemberContentContainer} from '../styles'


const AddMemberEmailInput = ({email, error}) => {
    return (
        <AddTeamMemberContentContainer>
            <ActiveInputLabel>Email</ActiveInputLabel>
            <BaseInput
                name='email'
                placeholder='Enter user email address'
                ref={email}
                type='email'
            />
            <AddMemberErrorMessageContainer>
                {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                {error && <ErrorMessage>{error.email}</ErrorMessage>}
            </AddMemberErrorMessageContainer>
        </AddTeamMemberContentContainer>
    )
}

export default AddMemberEmailInput
