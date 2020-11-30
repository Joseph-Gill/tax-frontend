import React from 'react';
import styled from 'styled-components/macro'
import {FooterLink} from '../../style/links'


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
    return (
        <LoginFooterContainer>
            <FooterLink>Terms & Conditions</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>© 2020 Company, Inc</FooterLink>
        </LoginFooterContainer>
    )
}

export default LoginFooter
