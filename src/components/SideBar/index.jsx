import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import Logo from './Logo'
import LandingHeader from './LandingHeader'
import {LANDING, PLATFORM} from '../../routes/paths'
import NavigationMenu from './NavigationMenu'
import sidebarToggle from '../../assets/icons/tax_cheetah_sidebar_toggle_icon.png'
import {SideBarContainer, SideBarToggle} from './styles'


const SideBar = ({children}) => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const page404Active = useSelector(state => state.sideBarReducer.page404Active)
    const [currentPath, setCurrentPath] = useState('')
    const [expanded, setExpanded] = useState(true)
    let location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    // Used to display Landing header on Landing, Our Platform, and About Us pages
    const displayLandingHeader = () => {
        return currentPath === LANDING || currentPath === PLATFORM
    }

    return (
        <>
            {page404Active ? null : authenticated ?
                <SideBarContainer
                    expanded={expanded ? 1 : 0}
                    hidden={currentPath === LANDING}
                >
                    <Logo
                        expanded={expanded}
                    />
                    <NavigationMenu
                        dispatch={dispatch}
                        expanded={expanded}
                        group={group}
                        loaded={loaded}
                    />
                    <SideBarToggle
                        expanded={expanded ? 1 : 0}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <img alt='toggle side bar' src={sidebarToggle} />
                    </SideBarToggle>
                </SideBarContainer> :
                displayLandingHeader() && <LandingHeader location={location} />}
            {children}
        </>
    )
}

export default SideBar

