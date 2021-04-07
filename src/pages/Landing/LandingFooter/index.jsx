import React, {useState} from 'react'
import PrivacyTermsModal from '../../../components/Modals/PrivacyTermsModal'
import TermsConditions from '../../../components/TermsConditions'
import PrivacyPolicy from '../../../components/PrivacyPolicy'
import {LANDING} from '../../../routes/paths'
import {FooterLink, FooterSpan} from '../../../style/links'
import {LandingFooterContainer} from './styles'


const LandingFooter = () => {
    const [showHideTermsAndConditions, setShowHideTermsAndConditions] = useState(false)
    const [showHidePrivacyPolicy, setShowHidePrivacyPolicy] = useState(false)

    return (
        <>
            <PrivacyTermsModal
                clicked={() => setShowHideTermsAndConditions(false)}
                show={showHideTermsAndConditions}
            >
                <TermsConditions>
                    <button onClick={() => setShowHideTermsAndConditions(false)}>Close</button>
                </TermsConditions>
            </PrivacyTermsModal>
            <PrivacyTermsModal
                clicked={() => setShowHidePrivacyPolicy(false)}
                show={showHidePrivacyPolicy}
            >
                <PrivacyPolicy>
                    <button onClick={() => setShowHidePrivacyPolicy(false)}>Close</button>
                </PrivacyPolicy>
            </PrivacyTermsModal>
            <LandingFooterContainer>
                <FooterSpan onClick={() => setShowHideTermsAndConditions(true)}>
                    Terms & Conditions
                </FooterSpan>
                <FooterSpan onClick={() => setShowHidePrivacyPolicy(true)}>
                    Privacy Policy
                </FooterSpan>
                <FooterLink to={LANDING}>© 2020 Company, Inc</FooterLink>
            </LandingFooterContainer>
        </>
    )
}

export default LandingFooter
