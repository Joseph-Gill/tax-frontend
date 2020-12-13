import React from 'react'
import { useTransition} from 'react-spring'
import {GroupMenuContainer, MenuItem, NavigationIcons} from '../styles'
import {ADD_GROUP, ADD_PROJECT, GROUPS, MEMBERS, ORG_CHART, PROJECTS} from '../../../../routes/paths'
import layers from '../../../../assets/icons/layers_24px.png'
import {NavbarTitle} from '../../../../style/titles'
import organization from '../../../../assets/icons/stark_organization.png'
import projects from '../../../../assets/icons/stark_projects.png'
import teamMembers from '../../../../assets/icons/stark_team_members.png'


const GroupMenu = ({loaded, location}) => {

    const transitions = useTransition(loaded, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0, display: 'none'},
    })
    return transitions.map(({item, key, props}) =>
        !item ? (
            <MenuItem
                isActive={location.pathname === GROUPS || location.pathname === `${GROUPS}${ADD_GROUP}`}
                key={key}
                //eslint-disable-next-line react/forbid-component-props
                style={props}
                to={GROUPS}
            >
                <NavigationIcons src={layers} />Groups
            </MenuItem>) : (
            //eslint-disable-next-line react/forbid-component-props
                <GroupMenuContainer key={key} style={props}>
                    <NavbarTitle>Group Menu</NavbarTitle>
                    <MenuItem
                        isActive={location.pathname === `${GROUPS}${ORG_CHART}`}
                        to={`${GROUPS}${ORG_CHART}`}
                    ><NavigationIcons src={organization} />Organization Chart
                    </MenuItem>
                    <MenuItem
                        isActive={location.pathname === `${GROUPS}${PROJECTS}` || location.pathname === `${GROUPS}${PROJECTS}${ADD_PROJECT}`}
                        to={`${GROUPS}${PROJECTS}`}
                    ><NavigationIcons src={projects} />Projects
                    </MenuItem>
                    <MenuItem
                        isActive={location.pathname === `${GROUPS}${MEMBERS}`}
                        to={`${GROUPS}${MEMBERS}`}
                    ><NavigationIcons src={teamMembers} />Team Members
                    </MenuItem>
                </GroupMenuContainer>)
    )
}

export default GroupMenu
