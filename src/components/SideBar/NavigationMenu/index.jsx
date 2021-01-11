import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {LogOutContainer, MenuItem, NavigationContainer, NavigationIcons, SelectedGroupContainer} from './styles'
import {userLogout} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME, USERPROFILE, LOGIN} from '../../../routes/paths'
import account from '../../../assets/icons/account_circle_24px.png'
import dashboard from '../../../assets/icons/dashboard_24px.png'
import layersv2 from '../../../assets/icons/layers_v2_24px.svg'
import logout from '../../../assets/icons/stark_logout_icon.png'
import {MenuItemTitle, NavbarTitle} from '../../../style/titles'
import {LogOutLink} from '../../../style/links'
import {SelectedGroupIcon} from '../../../style/images'
import {useHistory} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import GroupMenu from './GroupMenu'
import ChooseGroupModal from '../../DeleteAccountModal/ChooseGroupModal'


const NavigationMenu = ({dispatch, group, location, loaded}) => {
    const history = useHistory()
    const [showChooseGroup, setShowChooseGroup] = useState(false)

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        <>
            {showChooseGroup ?
                <ChooseGroupModal
                    history={history}
                    setShowChooseGroup={setShowChooseGroup}
                /> : null}
            <NavigationContainer>
                <NavbarTitle>DASHBOARD</NavbarTitle>
                <MenuItem
                    isactive={location.pathname === HOME ? 1 : 0}
                    to={HOME}
                ><NavigationIcons src={dashboard} />Home
                </MenuItem>
                <MenuItem
                    isactive={location.pathname === USERPROFILE ? 1 : 0}
                    to={USERPROFILE}
                ><NavigationIcons src={account} />Account
                </MenuItem>
                <GroupMenu loaded={loaded} location={location} />
            </NavigationContainer>
            <SelectedGroupContainer>
                <NavbarTitle>Selected Group</NavbarTitle>
                <animated.div style={props}>
                    <SelectedGroupIcon src={layersv2} />
                    <MenuItemTitle>{loaded ? group.name : 'None selected'}</MenuItemTitle>
                    <span onClick={() => setShowChooseGroup(true)}>Switch</span>
                </animated.div>
            </SelectedGroupContainer>
            <LogOutContainer>
                <LogOutLink
                    onClick={() => dispatch(userLogout())}
                    to={LOGIN}
                >Logout
                </LogOutLink>
                <div>
                    <img alt='logout' src={logout} />
                </div>
            </LogOutContainer>
        </>
    )
}


export default withRouter(connect()(NavigationMenu))
