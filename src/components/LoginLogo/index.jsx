import React from 'react'
import styled from 'styled-components/macro'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo.jpg'
import {LoginLogoContainer} from '../../style/containers'


const LoginLogoImg = styled.img`
    width: 150px;
    height: 50px;
`


const LoginLogo = () => {
    return (
        <LoginLogoContainer>
            <LoginLogoImg alt="tax cheetah logo" src={taxCheetahLogo} />
        </LoginLogoContainer>
    )
}

export default LoginLogo
