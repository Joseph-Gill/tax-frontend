import React from 'react'
import DocumentText from './DocumentText'
import ConsequenceText from './ConsequenceText'
import documentImage from '../../../assets/icons/tax_cheetah_landing_about_image_documents.svg'
import documentBackground from '../../../assets/icons/tax_cheetah_landing_about_background_documents.svg'
import documentEllipseLarge from '../../../assets/icons/tax_cheetah_landing_about_documents_ellipse_large.svg'
import documentEllipseSmall from '../../../assets/icons/tax_cheetah_landing_about_documents_ellipse_small.svg'
import consequenceImage from '../../../assets/icons/tax_cheetah_landing_about_image_consequences.svg'
import consequenceBackground from '../../../assets/icons/tax_cheetah_landing_about_background_consequences.svg'
import consequenceEllipse from '../../../assets/icons/tax_cheetah_landing_about_consequences_ellipse.svg'
import {AboutConsequenceSectionEllipse, AboutDocumentSectionEllipseLarge, AboutDocumentSectionEllipseSmall} from './styles'
import {AboutContainerRow, AboutSectionBackground, AboutSectionContainer, AboutSectionImage} from '../styles'


const AboutSectionUpperRow = () => {
    return (
        <AboutContainerRow>
            <AboutSectionContainer>
                <AboutSectionImage alt='documents image' src={documentImage} />
                <AboutSectionBackground alt='documents background' src={documentBackground} />
                <AboutDocumentSectionEllipseLarge alt='background ellipse' src={documentEllipseLarge} />
                <AboutDocumentSectionEllipseSmall alt='background ellipse small' src={documentEllipseSmall} />
                <DocumentText />
            </AboutSectionContainer>
            <AboutSectionContainer>
                <AboutSectionImage alt='tax consequences image' src={consequenceImage} />
                <AboutSectionBackground alt='tax consequences background' src={consequenceBackground} />
                <AboutConsequenceSectionEllipse alt='background ellipse' src={consequenceEllipse} />
                <ConsequenceText />
            </AboutSectionContainer>
        </AboutContainerRow>
    )
}

export default AboutSectionUpperRow
