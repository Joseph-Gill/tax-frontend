import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'


const AddLocationSelect = ({changeHandler, value, error}) => {
    return (
        <div>
            <ActiveInputLabel>Location</ActiveInputLabel>
            <CountryDropdown
                classes='profileCountryDropdown'
                onChange={changeHandler}
                value={value}
            />
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityCountryName}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLocationSelect
