import React from 'react'
import taxCalculator from '../../../../assets/icons/tax_cheetah_tax_calculator_image.jpg'
import {ComingSoonCard, ComingSoonCardTextContainer, ComingSoonImage, ComingSoonImageContainer} from '../styles'


const ComingSoonCalculator = () => {
    return (
        <ComingSoonCard>
            <ComingSoonImageContainer>
                <ComingSoonImage alt='tax calculator' src={taxCalculator} />
            </ComingSoonImageContainer>
            <ComingSoonCardTextContainer>
                <h2>Tax Calculator</h2>
                <span>Easy to use Swiss corporate tax calculator to</span>
                <span>calculate your tax provision and review of tax</span>
                <span>assessments.</span>
            </ComingSoonCardTextContainer>
        </ComingSoonCard>
    )
}

export default ComingSoonCalculator
