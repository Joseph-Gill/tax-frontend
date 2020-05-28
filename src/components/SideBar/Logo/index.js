import React from 'react'
import propulsion from '../../../assets/logos/Propulsion_only_Rocket.png'
import {LogoContainer, Title, PropulsionLogo} from './styles'
import {useSelector} from 'react-redux'
import {HOME, LOGIN} from '../../../routes/paths'


const Logo = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return <>
        <LogoContainer to={authenticated ? HOME : LOGIN}>
            <PropulsionLogo src={propulsion} alt="propulsion-logo"/>
            <Title>Project</Title><br/>
        </LogoContainer>
    </>
}


export default Logo
