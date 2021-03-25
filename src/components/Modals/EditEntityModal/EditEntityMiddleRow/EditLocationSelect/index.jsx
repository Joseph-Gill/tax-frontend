import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import {ErrorMessage} from '../../../../../style/messages'
import {EntityErrorContainer} from '../../../styles'
import {TextActiveInputLabel} from '../../../../../style/labels'



const EditLocationSelect = ({countryName, editEntityInfo, error, setCountryName}) => {
    return (
        <div>
            <TextActiveInputLabel
                disabled={!editEntityInfo.entitySelected}
            >
                Location
            </TextActiveInputLabel>
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
