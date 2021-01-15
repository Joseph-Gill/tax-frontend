import React from 'react'
import {useSelector} from 'react-redux'
import {HOME, LOGIN} from '../../../routes/paths'
import {BiggerLogoPlaceholder} from '../../../style'
import {LogoContainer} from './styles'


const Logo = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return (
        <LogoContainer to={authenticated ? HOME : LOGIN}>
            <img
                alt="propulsion-logo"
                src={BiggerLogoPlaceholder}
            />
        </LogoContainer>
    )
}

export default Logo
