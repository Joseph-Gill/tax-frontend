import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import {ActiveInputLabel} from '../../../../../style/labels'
import {ErrorMessage} from '../../../../../style/messages'
import {EntityErrorContainer} from '../../../styles'



const EditLocationSelect = ({countryName, editEntityInfo, error, setCountryName}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={!editEntityInfo.entitySelected}
            >
                Location
            </ActiveInputLabel>
            <CountryDropdown
                classes='profileCountryDropdown'
                disabled={!editEntityInfo.entitySelected}
                onChange={(val) => setCountryName(val)}
                value={countryName}
            />
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityCountryName}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditLocationSelect
