import React from 'react'
import {TaxLocation, TaxLocationsContainer} from './styles'


const StepCardTaxLocations = ({taxConsequences}) => {
    return (
        <TaxLocationsContainer>
            {taxConsequences.map(tax => <TaxLocation key={tax.id}>{tax.location}</TaxLocation>)}
        </TaxLocationsContainer>
    )
}

export default StepCardTaxLocations
