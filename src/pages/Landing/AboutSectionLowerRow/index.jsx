import React from 'react'
import LandingLearnMore from '../../../components/LandingLearnMore'
import stakeholderImage from '../../../assets/icons/tax_cheetah_landing_about_image_stakeholders.svg'
import stakeholderBackground from '../../../assets/icons/tax_cheetah_landing_about_background_stakeholders.svg'
import stakeholderEllipse from '../../../assets/icons/tax_cheetah_landing_about_stakeholder_ellipse.svg'
import chartImage from '../../../assets/icons/tax_cheetah_landing_about_image_chart.svg'
import chartBackground from '../../../assets/icons/tax_cheetah_landing_about_background_chart.svg'
import chartEllipseLarge from '../../../assets/icons/tax_cheetah_landing_about_chart_ellipse_large.svg'
import chartEllipseSmall from '../../../assets/icons/tax_cheetah_landing_about_chart_ellipse_small.svg'
import {AboutChartSectionEllipseLarge, AboutChartSectionEllipseSmall, AboutStakeholderSectionEllipse} from './styles'
import {AboutContainerBottomRow, AboutSectionBackground, AboutSectionContainer, AboutSectionImage, AboutSectionTextContainer,
    AboutSectionTextContent, AboutSectionTextTitle} from '../styles'


const AboutSectionLowerRow = () => {
    return (
        <AboutContainerBottomRow>
            <AboutSectionContainer>
                <AboutSectionImage alt='stakeholders image' src={stakeholderImage} />
                <AboutSectionBackground alt='stakeholders background' src={stakeholderBackground} />
                <AboutStakeholderSectionEllipse alt='background ellipse' src={stakeholderEllipse} />
                <AboutSectionTextContainer>
                    <div>
                        <AboutSectionTextTitle>Easy access for all stakeholders</AboutSectionTextTitle>
                        <AboutSectionTextContent>Easy handling of access rights including view-only access for auditors</AboutSectionTextContent>
                    </div>
                    <LandingLearnMore />
                </AboutSectionTextContainer>
            </AboutSectionContainer>
            <AboutSectionContainer>
                <AboutSectionImage alt='chart image' src={chartImage} />
                <AboutSectionBackground alt='chart background' src={chartBackground} />
                <AboutChartSectionEllipseLarge alt='background ellipse large' src={chartEllipseLarge} />
                <AboutChartSectionEllipseSmall alt='background ellipse small' src={chartEllipseSmall} />
                <AboutSectionTextContainer>
                    <div>
                        <AboutSectionTextTitle>Live legal <br /> entity chart</AboutSectionTextTitle>
                        <AboutSectionTextContent>A live legal entity chart of your corporate group is always availabel in Tax Cheetah including all tax relevant information of an entity</AboutSectionTextContent>
                    </div>
                    <LandingLearnMore />
                </AboutSectionTextContainer>
            </AboutSectionContainer>
        </AboutContainerBottomRow>
    )
}

export default AboutSectionLowerRow
