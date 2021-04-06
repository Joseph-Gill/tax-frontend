import React from 'react'
import LandingLearnMore from '../../../../components/LandingLearnMore'
import {AboutSectionTextContainer, AboutSectionTextContent, AboutSectionTextTitle} from '../../styles'


const StakeholderText = () => {
    return (
        <AboutSectionTextContainer>
            <div>
                <AboutSectionTextTitle>Easy access for all stakeholders</AboutSectionTextTitle>
                <AboutSectionTextContent>Easy handling of access rights including view-only access for auditors</AboutSectionTextContent>
            </div>
            <LandingLearnMore />
        </AboutSectionTextContainer>
    )
}

export default StakeholderText
