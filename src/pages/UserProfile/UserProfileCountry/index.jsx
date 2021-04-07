import React from 'react'
import {TextActiveInputLabel} from '../../../style/labels'
import {CountryDropdown} from 'react-country-region-selector'
import {UserProfileInputErrorContainer} from '../styles'


const UserProfileCountry = ({profileInfo, setProfileInfo}) => {
    return (
        <UserProfileInputErrorContainer>
            <TextActiveInputLabel>Country</TextActiveInputLabel>
            <CountryDropdown
                classes='profileCountryDropdown'
                onChange={(val) => setProfileInfo({...profileInfo, country: val})}
                value={profileInfo.country}
            />
        </UserProfileInputErrorContainer>
    )
}

export default UserProfileCountry
