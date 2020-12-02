import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {FooterLink} from '../../style/links'
import Modal from '../../components/LoginFooter/Modal'
import {TermsConditions} from './TermsConditions'
import {PrivacyPolicy} from './PrivacyPolicy'
import {LOGIN} from '../../routes/paths'


const LoginFooterContainer = styled.div`
    position: absolute;
    bottom: 16px;
    display: flex;
    width: 50%;
    justify-content: space-between;

    ${FooterLink}:nth-child(2) {
      position: absolute;
      left: 109px;
    }
`

const LoginFooter = () => {
    const [showHideTermsAndConditions, setShowHideTermsAndConditions] = useState(false)
    const [showHidePrivacyPolicy, setShowHidePrivacyPolicy] = useState(false)

    return (
        <>
            <Modal
                clicked={() => setShowHideTermsAndConditions(false)}
                show={showHideTermsAndConditions}
            >
                <TermsConditions>
                    <button onClick={() => setShowHideTermsAndConditions(false)}>Close</button>
                </TermsConditions>
            </Modal>
            <Modal
                clicked={() => setShowHidePrivacyPolicy(false)}
                show={showHidePrivacyPolicy}
            >
                <PrivacyPolicy>
                    <button onClick={() => setShowHidePrivacyPolicy(false)}>Close</button>
                </PrivacyPolicy>
            </Modal>
            <LoginFooterContainer>
                <FooterLink onClick={() => setShowHideTermsAndConditions(true)}>Terms & Conditions</FooterLink>
                <FooterLink onClick={() => setShowHidePrivacyPolicy(true)}>Privacy Policy</FooterLink>
                <FooterLink to={LOGIN}>© 2020 Company, Inc</FooterLink>
            </LoginFooterContainer>
        </>
    )
}

export default LoginFooter
