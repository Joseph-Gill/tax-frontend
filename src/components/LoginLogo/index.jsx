import React from 'react'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo_new_v1.png'
import {LoginLogoContainer} from '../../style/containers'
import {LoginLogoImg} from '../../style/images'



const LoginLogo = () => {
    return (
        <LoginLogoContainer>
            <LoginLogoImg alt="tax cheetah logo" src={taxCheetahLogo} />
        </LoginLogoContainer>
    )
}

export default LoginLogo
