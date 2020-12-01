import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import styled from 'styled-components/macro'
import {LogOutContainer, MenuItem, NavigationContainer, NavigationIcons, SelectedGroupContainer} from './styles'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME, USERPROFILE, LOGIN, GROUPS, ORGCHART, TEAMMEMBERS, PROJECTS} from '../../../routes/paths'
import chevron from '../../../assets/icons/chevron_right_24px.png'
import account from '../../../assets/icons/account_circle_24px.png'
import layers from '../../../assets/icons/layers_24px.png'
import dashboard from '../../../assets/icons/dashboard_24px.png'
import layersv2 from '../../../assets/icons/layers_v2_24px.svg'
import {MenuItemTitle, NavbarTitle} from '../../../style/titles'
import {LogOutLink} from '../../../style/links'
import {LogOutIcon, SelectedGroupIcon} from '../../../style/images'


const GroupMenuContainer = styled.div`
  width: 100%;
  height: 220px;
  border-top: 1px solid ${props => props.theme.inputBorderColor};
  border-bottom: 1px solid ${props => props.theme.inputBorderColor};
  margin-bottom: 52px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  //padding: 20px 14px 0px 14px;
`



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

            {!test &&
            <GroupMenuContainer>
                <NavbarTitle>Group Menu</NavbarTitle>
                <MenuItem
                    isActive={location.pathname === ORGCHART}
                    to={ORGCHART}
                ><NavigationIcons src={dashboard} />Organization Chart
                </MenuItem>
                <MenuItem
                    isActive={location.pathname === PROJECTS}
                    to={PROJECTS}
                ><NavigationIcons src={layers} />Projects
                </MenuItem>
                <MenuItem
                    isActive={location.pathname === TEAMMEMBERS}
                    to={TEAMMEMBERS}
                ><NavigationIcons src={account} />Team Members
                </MenuItem>
            </GroupMenuContainer>}

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
