import React from 'react'
import {connect} from 'react-redux'
import NavigationMenu from './NavigationMenu'
import Logo from './Logo'
import propulsion from '../../assets/logos/Propulsion_only_Rocket.png'
import {withRouter} from 'react-router-dom'
import {SideBarContainer, SideBarNoAuthContainer} from './styles'


const SideBar = ({children, authenticated, history}) => {
    return <>
        {
            authenticated
                ?
                <SideBarContainer>
                    <Logo/>
                    <NavigationMenu/>
                </SideBarContainer>
                :
                <SideBarNoAuthContainer>
                    <img onClick={() => history.push('/')} src={propulsion} alt="propulsion-logo"/>
                </SideBarNoAuthContainer>
        }
        {children}
    </>
}

const mapStateToProps = ({userLoginReducer: {authenticated}}) => ({
    authenticated,
})

export default withRouter(connect(mapStateToProps)(SideBar))

