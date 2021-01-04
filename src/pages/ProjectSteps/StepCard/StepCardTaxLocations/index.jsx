import React from 'react'
import styled from 'styled-components/macro'


const TaxLocationsContainer = styled.div`
    display: flex;
`

const TaxLocation = styled.div`
    background: ${props => props.theme.primaryBlueLight};
    padding: 2px 6px;
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 10px;
    line-height: 14px;
    color: ${props => props.theme.primaryBlue};
    margin-left: 5px;
`

const StepCardTaxLocations = ({taxConsequences}) => {
    return (
        <TaxLocationsContainer>
            {taxConsequences.map(tax => <TaxLocation key={tax.id}>{tax.location}</TaxLocation>)}
        </TaxLocationsContainer>
    )
}

export default StepCardTaxLocations
