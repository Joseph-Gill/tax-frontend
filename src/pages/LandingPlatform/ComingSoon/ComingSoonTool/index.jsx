import React from 'react'
import taxCompliance from '../../../../assets/icons/tax_cheetah_compliance_tool_image.jpg'
import {ComingSoonCard, ComingSoonCardTextContainer, ComingSoonImage, ComingSoonImageContainer} from '../styles'


const ComingSoonTool = () => {
    return (
        <ComingSoonCard>
            <ComingSoonImageContainer>
                <ComingSoonImage alt='compliance tool' src={taxCompliance} />
            </ComingSoonImageContainer>
            <ComingSoonCardTextContainer>
                <h2>Tax Compliance Tool</h2>
                <span>One-click preparation and storing of all Swiss</span>
                <span>withholding tax and stamp duty forms and</span>
                <span>enclosures.</span>
            </ComingSoonCardTextContainer>
        </ComingSoonCard>
    )
}

export default ComingSoonTool
