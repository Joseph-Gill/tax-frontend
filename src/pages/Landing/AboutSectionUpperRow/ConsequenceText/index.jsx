import React from 'react'
import LandingLearnMore from '../../../../components/LandingLearnMore'
import {AboutSectionTextContainer, AboutSectionTextContent, AboutSectionTextTitle} from '../../styles'


const ConsequenceText = () => {
    return (
        <AboutSectionTextContainer>
            <div>
                <AboutSectionTextTitle>Display of tax consequences</AboutSectionTextTitle>
                <AboutSectionTextContent>Tax Cheetah recognizes Swiss tax consequences of various different corporate legal reorganizations steps</AboutSectionTextContent>
            </div>
            <LandingLearnMore />
        </AboutSectionTextContainer>
    )
}

export default ConsequenceText
