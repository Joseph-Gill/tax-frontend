import React from 'react'
import styled from 'styled-components/macro'
import addTax from '../../../assets/icons/stark_add_tax_icon.svg'
import {DisplayStepButtonText, DisplayStepImage, DisplayStepImageButtonContainer, DisplayStepSectionTitle, DisplayStepTitleContainer} from '../styles'


const TaxInfoContainer = styled.div`
    width: 497px;
    height: 438px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px 26px 12px 20px;
`

const TaxInfo = () => {
    return (
        <TaxInfoContainer>
            <DisplayStepTitleContainer>
                <DisplayStepSectionTitle>Tax Consequences</DisplayStepSectionTitle>
                <DisplayStepImageButtonContainer>
                    <DisplayStepImage alt='add tax' src={addTax} />
                    <DisplayStepButtonText>Add Country Consequence</DisplayStepButtonText>
                </DisplayStepImageButtonContainer>
            </DisplayStepTitleContainer>
        </TaxInfoContainer>
    )
}

export default TaxInfo
