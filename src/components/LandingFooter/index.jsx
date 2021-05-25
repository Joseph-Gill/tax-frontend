import React from 'react'
import {FooterAddressContainer, FooterAddressInfoContainer, FooterInfoContainer, LandingFooterContainer} from './styles'


const LandingFooter = () => {
    return (
        <LandingFooterContainer>
            <FooterAddressInfoContainer>
                <FooterAddressContainer>
                    <h2>Address</h2>
                    <span>Sihlquai 125</span>
                    <span>Zurich, 8005 CH</span>
                    <a href="mailto:info@tax-cheetah.com">info@tax-cheetah.com</a>
                </FooterAddressContainer>
                <FooterInfoContainer>
                    <span>&copy;{` 2021 Tax Cheetah`}</span>
                </FooterInfoContainer>
            </FooterAddressInfoContainer>
        </LandingFooterContainer>
    )
}

export default LandingFooter
