import React from 'react'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo_large.png'
import {LoginLogoContainer} from '../../style/containers'
import {LoginLogoImg} from './styles'


const LoginLogo = () => {
    return (
        <LoginLogoContainer>
            <LoginLogoImg alt="tax cheetah logo" src={taxCheetahLogo} />
        </LoginLogoContainer>
    )
}

export default LoginLogo
