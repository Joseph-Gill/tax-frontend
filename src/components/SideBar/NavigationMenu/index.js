import React from 'react'
import {withRouter} from 'react-router-dom'
import profile from '../../../assets/icons/profile.svg'
import home from '../../../assets/icons/home.svg'
import lock from '../../../assets/icons/lock.svg'
import {connect} from 'react-redux'
import styled from 'styled-components/macro'
import {MenuItem, NavigationContainer, NavigationIcons} from './styles'
import {ROUTE_HOME, ROUTE_USERPROFILE} from '../../../routes'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'


const LogOutContainer = styled.div`
  width: 100%;
  background: rgba(0,0,0,0.09);
`

const NavigationMenu = ({dispatch, location}) => {


    return <>
        <NavigationContainer>
            <MenuItem isActive={location.pathname === ROUTE_HOME} to={ROUTE_HOME}><NavigationIcons src={home}/>Home</MenuItem>
            <MenuItem isActive={location.pathname === ROUTE_USERPROFILE} to={ROUTE_USERPROFILE}><NavigationIcons src={profile}/>Profile</MenuItem>
        </NavigationContainer>
        <LogOutContainer>
            <MenuItem to='' onClick={() => dispatch(userLogout())}>
                <NavigationIcons src={lock}/>
                Logout
            </MenuItem>
        </LogOutContainer>


    </>
}


export default withRouter(connect()(NavigationMenu))
