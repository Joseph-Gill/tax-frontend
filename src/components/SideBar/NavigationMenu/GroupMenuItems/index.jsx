import React from 'react'
import GroupMenu from './GroupMenu'
import {HOME, USERPROFILE} from '../../../../routes/paths'
import dashboard from '../../../../assets/icons/dashboard_24px.png'
import account from '../../../../assets/icons/account_circle_24px.png'
import {MenuItemText} from '../../../../style/text'
import {NavbarTitle} from '../../../../style/titles'
import {MenuItem, NavigationContainer, NavigationIcons} from '../styles'



const GroupMenuItems = ({expanded, loaded, location}) => {
    return (
        <NavigationContainer>
            <NavbarTitle expanded={expanded ? 1 : 0}>DASHBOARD</NavbarTitle>
            <MenuItem isactive={location.pathname === HOME ? 1 : 0} to={HOME}>
                <NavigationIcons src={dashboard} />
                {expanded &&
                    <MenuItemText>Home</MenuItemText>}
            </MenuItem>
            <MenuItem isactive={location.pathname === USERPROFILE ? 1 : 0} to={USERPROFILE}>
                <NavigationIcons src={account} />
                {expanded &&
                    <MenuItemText>Account</MenuItemText>}
            </MenuItem>
            <GroupMenu
                expanded={expanded}
                loaded={loaded}
                location={location}
            />
        </NavigationContainer>
    )
}

export default GroupMenuItems
