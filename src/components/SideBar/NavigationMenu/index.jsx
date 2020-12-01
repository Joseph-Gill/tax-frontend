import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components/macro'
import {LogOutContainer, MenuItem, NavigationContainer, NavigationIcons, SelectedGroupContainer} from './styles'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME, USERPROFILE, LOGIN, GROUPS} from '../../../routes/paths'
import chevron from '../../../assets/icons/chevron_right_24px.png'
import account from '../../../assets/icons/account_circle_24px.png'
import layers from '../../../assets/icons/layers_24px.png'
import dashboard from '../../../assets/icons/dashboard_24px.png'
import layersv2 from '../../../assets/icons/layers_v2_24px.svg'
import {MenuItemTitle, NavbarTitle} from '../../../style/titles'
import {LogOutLink} from '../../../style/links'
import {LogOutIcon, SelectedGroupIcon} from '../../../style/images'


const NavigationMenu = ({dispatch, location}) => {

    const [test, setTest] = useState(true)

    return (
        <>
            <NavigationContainer>
                <NavbarTitle>DASHBOARD</NavbarTitle>
                <MenuItem
                    isActive={location.pathname === HOME}
                    to={HOME}
                ><NavigationIcons src={dashboard} />Home
                </MenuItem>
                {test &&
                <MenuItem
                    isActive={location.pathname === GROUPS}
                    to={GROUPS}
                ><NavigationIcons src={layers} />Groups
                </MenuItem>}
                <MenuItem
                    isActive={location.pathname === USERPROFILE}
                    to={USERPROFILE}
                ><NavigationIcons src={account} />Account
                </MenuItem>
            </NavigationContainer>
            <SelectedGroupContainer>
                <NavbarTitle>Selected Group</NavbarTitle>
                <div>
                    <SelectedGroupIcon src={layersv2} />
                    <MenuItemTitle>None selected</MenuItemTitle>
                    <span onClick={() => setTest(!test)}>Switch</span>
                </div>
            </SelectedGroupContainer>
            <LogOutContainer>
                <LogOutLink
                    onClick={() => dispatch(userLogout())}
                    to={LOGIN}
                >
                    Logout
                </LogOutLink>
                <div>
                    <LogOutIcon src={chevron} />
                    <LogOutIcon src={chevron} />
                </div>
            </LogOutContainer>
        </>
    )
}


export default withRouter(connect()(NavigationMenu))
