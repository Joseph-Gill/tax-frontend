import React from 'react'
import { useTransition} from 'react-spring'
import {ADD_GROUP, GROUPS, MEMBERS, ORG_CHART, PROJECTS} from '../../../../../routes/paths'
import layers from '../../../../../assets/icons/layers_24px.png'
import organization from '../../../../../assets/icons/stark_organization.png'
import projects from '../../../../../assets/icons/stark_projects.png'
import teamMembers from '../../../../../assets/icons/stark_team_members.png'
import {MenuItemText} from '../../../../../style/text'
import {NavbarTitle} from '../../../../../style/titles'
import {GroupMenuContainer, MenuItem, NavigationIcons} from '../../styles'


const GroupMenu = ({expanded, loaded, location}) => {

    const transitions = useTransition(loaded, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0, display: 'none'},
    })
    return transitions.map(({item, key, props}) =>
        !item ? (
            <MenuItem
                isactive={location.pathname === GROUPS || location.pathname === `${GROUPS}${ADD_GROUP}` ? 1 : 0}
                key={key}
                //eslint-disable-next-line react/forbid-component-props
                style={props}
                to={GROUPS}
            >
                <NavigationIcons src={layers} />
                {expanded &&
                    <MenuItemText>Groups</MenuItemText>}
            </MenuItem>) : (
                //eslint-disable-next-line react/forbid-component-props
                <GroupMenuContainer key={key} style={props}>
                    <NavbarTitle>Group Menu</NavbarTitle>
                    <MenuItem
                        isactive={location.pathname === `${GROUPS}${ORG_CHART}` ? 1 : 0}
                        to={`${GROUPS}${ORG_CHART}`}
                    >
                        <NavigationIcons src={organization} />
                        {expanded &&
                            <MenuItemText>Organization Chart</MenuItemText>}
                    </MenuItem>
                    <MenuItem
                        isactive={location.pathname.includes(`${GROUPS}${PROJECTS}`) ? 1 : 0}
                        to={`${GROUPS}${PROJECTS}`}
                    >
                        <NavigationIcons src={projects} />
                        {expanded &&
                            <MenuItemText>Projects</MenuItemText>}
                    </MenuItem>
                    <MenuItem
                        isactive={location.pathname.includes(`${GROUPS}${MEMBERS}`) ? 1 : 0}
                        to={`${GROUPS}${MEMBERS}`}
                    >
                        <NavigationIcons src={teamMembers} />
                        {expanded &&
                            <MenuItemText>Team Members</MenuItemText>}
                    </MenuItem>
                </GroupMenuContainer>)
    )
}

export default GroupMenu
