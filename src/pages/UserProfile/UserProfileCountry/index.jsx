import React from 'react'
import {ActiveInputLabel} from '../../../style/labels'
import {CountryDropdown} from 'react-country-region-selector'
import {UserProfileInputErrorContainer} from '../styles'


const UserProfileCountry = ({profileInfo, setProfileInfo}) => {
    return (
        <UserProfileInputErrorContainer>
            <ActiveInputLabel>Country</ActiveInputLabel>
            <CountryDropdown
                classes='profileCountryDropdown'
                onChange={(val) => setProfileInfo({...profileInfo, country: val})}
                value={profileInfo.country}
            />
        </UserProfileInputErrorContainer>
    )
}

export default UserProfileCountry
