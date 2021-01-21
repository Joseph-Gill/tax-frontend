import React from 'react'
import PhoneInput from 'react-phone-input-2'
import {ActiveInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {UserProfileInputErrorContainer} from '../styles'


const UserProfilePhone = ({error ,profileInfo, setProfileInfo}) => {
    return (
        <UserProfileInputErrorContainer>
            <ActiveInputLabel>Phone</ActiveInputLabel>
            <PhoneInput
                country='ch'
                inputClass='phoneInput'
                inputStyle={{
                    background: '#FAFAFA',
                    height: '42px',
                    fontFamily: 'Nunito Sans, sans-serif',
                    fontSize: '14px',
                    borderRadius: '1.5rem'
                }}
                onChange={phone => setProfileInfo({...profileInfo, phone: phone})}
                value={profileInfo.phone}
            />
            {error && <ErrorMessage>{error.phone_number}</ErrorMessage>}
        </UserProfileInputErrorContainer>
    )
}

export default UserProfilePhone
