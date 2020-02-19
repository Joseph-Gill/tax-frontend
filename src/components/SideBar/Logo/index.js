import React from 'react'
import propulsion from '../../../assets/logos/Propulsion_only_Rocket.png'
import {LogoContainer, Title, PropulsionLogo} from './styles'
import {useSelector} from 'react-redux'
import {ROUTE_AUTHENTICATION, ROUTE_HOME} from '../../../routes'


const Logo = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return <>
        <LogoContainer to={authenticated ? ROUTE_HOME : ROUTE_AUTHENTICATION}>
            <PropulsionLogo src={propulsion} alt="propulsion-logo"/>
            <Title>Project</Title><br/>
        </LogoContainer>
    </>
}


export default Logo
