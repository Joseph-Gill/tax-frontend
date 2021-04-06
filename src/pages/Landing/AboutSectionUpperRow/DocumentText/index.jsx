import React from 'react'
import LandingLearnMore from '../../../../components/LandingLearnMore'
import {AboutSectionTextContainer, AboutSectionTextContent, AboutSectionTextTitle} from '../../styles'


const DocumentText = () => {
    return (
        <AboutSectionTextContainer>
            <div>
                <AboutSectionTextTitle>Tax and legal documents</AboutSectionTextTitle>
                <AboutSectionTextContent>Tax Cheetah drafts all required tax and legal documents for standard corporate transactions such as mergers and liquidations</AboutSectionTextContent>
            </div>
            <LandingLearnMore />
        </AboutSectionTextContainer>
    )
}

export default DocumentText
