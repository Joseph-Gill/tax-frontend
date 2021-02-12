import React from 'react'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo_new_v1.png'
import {Loader, LogoImage, LogoLoadingContainer} from './styles'


const LogoLoading = () => {
    return (
        <LogoLoadingContainer>
            <LogoImage alt='logo' src={taxCheetahLogo} />
            <Loader />
        </LogoLoadingContainer>
    )
}

export default LogoLoading
