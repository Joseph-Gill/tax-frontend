import React from 'react'
import LandingLearnMore from '../../../../components/LandingLearnMore'
import {AboutSectionTextContainer, AboutSectionTextContent, AboutSectionTextTitle} from '../../styles'


const ChartText = () => {
    return (
        <AboutSectionTextContainer>
            <div>
                <AboutSectionTextTitle>Live legal <br /> entity chart</AboutSectionTextTitle>
                <AboutSectionTextContent>A live legal entity chart of your corporate group is always availabel in Tax Cheetah including all tax relevant information of an entity</AboutSectionTextContent>
            </div>
            <LandingLearnMore />
        </AboutSectionTextContainer>
    )
}

export default ChartText
