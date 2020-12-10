import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {GroupMenuContainer, LogOutContainer, MenuItem, NavigationContainer, NavigationIcons, SelectedGroupContainer} from './styles'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME, USERPROFILE, LOGIN, GROUPS, ORGCHART, TEAMMEMBERS, PROJECTS, CREATEGROUP} from '../../../routes/paths'
import account from '../../../assets/icons/account_circle_24px.png'
import layers from '../../../assets/icons/layers_24px.png'
import dashboard from '../../../assets/icons/dashboard_24px.png'
import layersv2 from '../../../assets/icons/layers_v2_24px.svg'
import logout from '../../../assets/icons/stark_logout_icon.png'
import organization from '../../../assets/icons/stark_organization.png'
import teamMembers from '../../../assets/icons/stark_team_members.png'
import projects from '../../../assets/icons/stark_projects.png'
import {MenuItemTitle, NavbarTitle} from '../../../style/titles'
import {LogOutLink} from '../../../style/links'
import {SelectedGroupIcon} from '../../../style/images'
import {useHistory} from 'react-router-dom'


const NavigationMenu = ({dispatch, group, location, loaded}) => {
    const history = useHistory()

    return (
        <>
            <NavigationContainer>
                <NavbarTitle>DASHBOARD</NavbarTitle>
                <MenuItem
                    isActive={location.pathname === HOME}
                    to={HOME}
                ><NavigationIcons src={dashboard} />Home
                </MenuItem>
                {!loaded &&
                <MenuItem
                    isActive={location.pathname === GROUPS || location.pathname === CREATEGROUP}
                    to={GROUPS}
                ><NavigationIcons src={layers} />Groups
                </MenuItem>}
                <MenuItem
                    isActive={location.pathname === USERPROFILE}
                    to={USERPROFILE}
                ><NavigationIcons src={account} />Account
                </MenuItem>
            </NavigationContainer>
            {loaded &&
            <GroupMenuContainer>
                <NavbarTitle>Group Menu</NavbarTitle>
                <MenuItem
                    isActive={location.pathname === ORGCHART}
                    to={ORGCHART}
                ><NavigationIcons src={organization} />Organization Chart
                </MenuItem>
                <MenuItem
                    isActive={location.pathname === PROJECTS}
                    to={PROJECTS}
                ><NavigationIcons src={projects} />Projects
                </MenuItem>
                <MenuItem
                    isActive={location.pathname === TEAMMEMBERS}
                    to={TEAMMEMBERS}
                ><NavigationIcons src={teamMembers} />Team Members
                </MenuItem>
            </GroupMenuContainer>}
            <SelectedGroupContainer>
                <NavbarTitle>Selected Group</NavbarTitle>
                <div>
                    <SelectedGroupIcon src={layersv2} />
                    <MenuItemTitle>None selected</MenuItemTitle>
                    <span onClick={() => history.push('/groups')}>Switch</span>
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
                    <img alt='logout' src={logout} />
                </div>
            </LogOutContainer>
        </>
    )
}


export default withRouter(connect()(NavigationMenu))
