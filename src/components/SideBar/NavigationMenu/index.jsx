import React from 'react'
import {withRouter} from 'react-router-dom'
import profile from '../../../assets/icons/profile.svg'
import home from '../../../assets/icons/home.svg'
import lock from '../../../assets/icons/lock.svg'
import {connect} from 'react-redux'
import styled from 'styled-components/macro'
import {MenuItem, NavigationContainer, NavigationIcons} from './styles'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME, USERPROFILE, LOGIN} from '../../../routes/paths'


const LogOutContainer = styled.div`
  width: 100%;
  background: rgba(0,0,0,0.09);
`

const NavigationMenu = ({dispatch, location}) => {


    return (
        <>
            <NavigationContainer>
                <MenuItem
                    isActive={location.pathname === HOME}
                    to={HOME}
                ><NavigationIcons src={home} />Home
                </MenuItem>
                <MenuItem
                    isActive={location.pathname === USERPROFILE}
                    to={USERPROFILE}
                ><NavigationIcons src={profile} />Profile
                </MenuItem>
            </NavigationContainer>
            <LogOutContainer>
                <MenuItem
                    onClick={() => dispatch(userLogout())}
                    to={LOGIN}
                >
                    <NavigationIcons src={lock} />
                    Logout
                </MenuItem>
            </LogOutContainer>
        </>
    )
}


export default withRouter(connect()(NavigationMenu))
