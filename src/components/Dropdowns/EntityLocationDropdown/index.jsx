import React from 'react'
import {CountryDropdown} from 'react-country-region-selector'
import {ErrorMessage} from '../../../style/messages'
import {EntityErrorContainer} from '../../Modals/styles'
import {TextActiveInputLabel} from '../../../style/labels'


const EntityLocationDropdown = ({changeHandler, error, errorLocation, value}) => {
    return (
        <div>
            <TextActiveInputLabel>Location</TextActiveInputLabel>
            <CountryDropdown
                classes='profileCountryDropdown'
                onChange={changeHandler}
                value={value}
            />
            <EntityErrorContainer>
                {error && <ErrorMessage>{errorLocation}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EntityLocationDropdown
