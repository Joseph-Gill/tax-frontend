import React from 'react'
import arrow from '../../assets/icons/tax_cheetah_landing_button_icon.svg'
import {LearnMoreContainer} from './styles'


const LandingLearnMore = () => {
    return (
        <LearnMoreContainer>
            <span>Learn More</span>
            <img alt='Learn more' src={arrow} />
        </LearnMoreContainer>
    )
}

export default LandingLearnMore
