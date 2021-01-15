import React from 'react'
import {UserProfileInputErrorContainer} from '../styles'
import {BaseInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'


const UserProfileTextInput = ({error, label, name, placeholder, profileInfo, setProfileInfo, type}) => {
    return (
        <UserProfileInputErrorContainer>
            <ActiveInputLabel>{label}</ActiveInputLabel>
            <BaseInput
                name={name}
                onChange={e => setProfileInfo({...profileInfo, [name]: e.target.value})}
                placeholder={placeholder}
                type={type}
                value={profileInfo[name]}
            />
            {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
        </UserProfileInputErrorContainer>
    )
}

export default UserProfileTextInput
