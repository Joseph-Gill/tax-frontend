import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'


const EditLocationSelect = ({countryName, editEntityInfo, error, setCountryName}) => {
    return (
        <div>
            <ActiveInputLabel>Location</ActiveInputLabel>
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
