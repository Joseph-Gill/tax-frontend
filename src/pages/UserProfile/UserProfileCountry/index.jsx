import React from 'react'
import {ActiveInputLabel} from '../../../style/labels'
import {CountryDropdown} from 'react-country-region-selector'
import {UserProfileInputErrorContainer} from '../styles'


const UserProfileCountry = ({profileInfo, setProfileInfo}) => {
    return (
        <UserProfileInputErrorContainer>
            <ActiveInputLabel>Country</ActiveInputLabel>
            <CountryDropdown
                onChange={(val) => setProfileInfo({...profileInfo, country: val})}
                // eslint-disable-next-line react/forbid-component-props
                style={{
                    width: '302px',
                    height: '42px',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '19px',
                    background: '#FAFAFA',
                    border: '1px solid #D3D8DD',
                    borderRadius: '4px',
                    fontFamily: 'Nunito Sans, sans-serif',
                    paddingLeft: '7px',
                }}
                value={profileInfo.country}
            />
        </UserProfileInputErrorContainer>
    )
}

export default UserProfileCountry
