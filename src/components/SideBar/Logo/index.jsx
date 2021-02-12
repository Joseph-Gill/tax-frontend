import React from 'react'
import taxCheetahLogo from '../../../assets/logos/tax_cheetah_logo_new_v1.png'
import {useSelector} from 'react-redux'
import {HOME, LOGIN} from '../../../routes/paths'
import {LogoContainer, LogoImg} from './styles'


const Logo = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return (
        <LogoContainer to={authenticated ? HOME : LOGIN}>
            <LogoImg
                alt="tax cheetah logo"
                src={taxCheetahLogo}
            />
        </LogoContainer>
    )
}

export default Logo
