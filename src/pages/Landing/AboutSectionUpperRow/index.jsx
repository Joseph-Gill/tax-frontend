import React from 'react'
import LandingLearnMore from '../../../components/LandingLearnMore'
import documentImage from '../../../assets/icons/tax_cheetah_landing_about_image_documents.svg'
import documentBackground from '../../../assets/icons/tax_cheetah_landing_about_background_documents.svg'
import documentEllipseLarge from '../../../assets/icons/tax_cheetah_landing_about_documents_ellipse_large.svg'
import documentEllipseSmall from '../../../assets/icons/tax_cheetah_landing_about_documents_ellipse_small.svg'
import consequenceImage from '../../../assets/icons/tax_cheetah_landing_about_image_consequences.svg'
import consequenceBackground from '../../../assets/icons/tax_cheetah_landing_about_background_consequences.svg'
import consequenceEllipse from '../../../assets/icons/tax_cheetah_landing_about_consequences_ellipse.svg'
import {AboutConsequenceSectionEllipse, AboutDocumentSectionEllipseLarge, AboutDocumentSectionEllipseSmall} from './styles'
import {AboutContainerRow, AboutSectionBackground, AboutSectionContainer, AboutSectionImage, AboutSectionTextContainer,
    AboutSectionTextContent, AboutSectionTextTitle} from '../styles'


const AboutSectionUpperRow = () => {
    return (
        <AboutContainerRow>
            <AboutSectionContainer>
                <AboutSectionImage alt='documents image' src={documentImage} />
                <AboutSectionBackground alt='documents background' src={documentBackground} />
                <AboutDocumentSectionEllipseLarge alt='background ellipse' src={documentEllipseLarge} />
                <AboutDocumentSectionEllipseSmall alt='background ellipse small' src={documentEllipseSmall} />
                <AboutSectionTextContainer>
                    <div>
                        <AboutSectionTextTitle>Tax and legal documents</AboutSectionTextTitle>
                        <AboutSectionTextContent>Tax Cheetah drafts all required tax and legal documents for standard corporate transactions such as mergers and liquidations</AboutSectionTextContent>
                    </div>
                    <LandingLearnMore />
                </AboutSectionTextContainer>
            </AboutSectionContainer>
            <AboutSectionContainer>
                <AboutSectionImage alt='tax consequences image' src={consequenceImage} />
                <AboutSectionBackground alt='tax consequences background' src={consequenceBackground} />
                <AboutConsequenceSectionEllipse alt='background ellipse' src={consequenceEllipse} />
                <AboutSectionTextContainer>
                    <div>
                        <AboutSectionTextTitle>Display of tax consequences</AboutSectionTextTitle>
                        <AboutSectionTextContent>Tax Cheetah recognizes Swiss tax consequences of various different corporate legal reorganizations steps</AboutSectionTextContent>
                    </div>
                    <LandingLearnMore />
                </AboutSectionTextContainer>
            </AboutSectionContainer>
        </AboutContainerRow>
    )
}

export default AboutSectionUpperRow
