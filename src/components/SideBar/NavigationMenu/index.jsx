import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import GroupMenuItems from './GroupMenuItems'
import ChooseGroupModal from '../../Modals/ChooseGroupModal'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {LOGIN} from '../../../routes/paths'
import layersv2 from '../../../assets/icons/layers_v2_24px.svg'
import logout from '../../../assets/icons/tax_cheetah_logout_icon.svg'
import {LogOutLink} from '../../../style/links'
import {MenuItemText} from '../../../style/text'
import {NavbarTitle} from '../../../style/titles'
import {GroupImage, SelectedGroupIcon} from '../../../style/images'
import {DashboardSelectedGroupContainer, LogOutContainer, NavigationMenuContainer, SelectedGroupContainer,
    SwitchGroupsLabel} from './styles'


const NavigationMenu = ({dispatch, expanded, group, location, loaded}) => {
    const history = useHistory()
    const [showChooseGroup, setShowChooseGroup] = useState(false)

    //From react-spring, causes component to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        <NavigationMenuContainer>
            {showChooseGroup ?
                <ChooseGroupModal
                    history={history}
                    setShowChooseGroup={setShowChooseGroup}
                    showChooseGroup={showChooseGroup}
                /> : null}
            <DashboardSelectedGroupContainer>
                <GroupMenuItems
                    expanded={expanded}
                    loaded={loaded}
                    location={location}
                />
                <SelectedGroupContainer
                    expanded={expanded ? 1 : 0}
                >
                    <NavbarTitle>Selected Group</NavbarTitle>
                    {/* eslint-disable-next-line react/forbid-component-props */}
                    <animated.div style={props}>
                        {group.avatar ?
                            <GroupImage alt='group image' src={group.avatar} />
                            : <SelectedGroupIcon alt='group image placeholder' src={layersv2} />}
                        {expanded &&
                            <MenuItemText>{loaded ? group.name : 'None selected'}</MenuItemText>}
                    </animated.div>
                    <SwitchGroupsLabel onClick={() => setShowChooseGroup(true)}>Switch</SwitchGroupsLabel>
                </SelectedGroupContainer>
            </DashboardSelectedGroupContainer>
            <LogOutContainer>
                <img
                    alt='logout'
                    onClick={() => dispatch(userLogout())}
                    src={logout}
                />
                {expanded &&
                    <LogOutLink
                        onClick={() => dispatch(userLogout())}
                        to={LOGIN}
                    >Logout
                    </LogOutLink>}
            </LogOutContainer>
        </NavigationMenuContainer>
    )
}

export default withRouter(connect()(NavigationMenu))
