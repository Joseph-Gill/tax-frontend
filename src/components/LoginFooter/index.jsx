import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {FooterLink} from '../../style/links'
import Modal from '../../components/LoginFooter/Modal'
import {TermsConditions} from './TermsConditions'


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
            <LoginFooterContainer>
                <FooterLink onClick={() => setShowHideTermsAndConditions(true)}>Terms & Conditions</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink>© 2020 Company, Inc</FooterLink>
            </LoginFooterContainer>
        </>
    )
}

export default LoginFooter
