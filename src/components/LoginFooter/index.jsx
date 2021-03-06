import React, {useState} from 'react'
import PrivacyPolicy from '../PrivacyPolicy'
import TermsConditions from '../TermsConditions'
import PrivacyTermsModal from '../Modals/PrivacyTermsModal'
import {LANDING} from '../../routes/paths'
import {FooterLink, FooterSpan} from '../../style/links'
import {LoginFooterContainer} from './styles'

const LoginFooter = () => {
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
            <LoginFooterContainer>
                <FooterSpan onClick={() => setShowHideTermsAndConditions(true)}>Terms & Conditions</FooterSpan>
                <FooterSpan onClick={() => setShowHidePrivacyPolicy(true)}>Privacy Policy</FooterSpan>
                <FooterLink to={LANDING}>© 2020 Company, Inc</FooterLink>
            </LoginFooterContainer>
        </>
    )
}

export default LoginFooter
