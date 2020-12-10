import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import NavigationMenu from './NavigationMenu'
import Logo from './Logo'
import {useLocation} from 'react-router-dom'
import {SideBarContainer, SideBarLoginContainer} from './styles'


const SideBar = ({children}) => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const [currentPath, setCurrentPath] = useState('')
    let location = useLocation()

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <>
            {authenticated ?
                <SideBarContainer hidden={currentPath === '/'}>
                    <Logo />
                    <NavigationMenu group={group} loaded={loaded} />
                </SideBarContainer> :
                <SideBarLoginContainer hidden={currentPath === '/'}>
                    <h1>Swiss Tax Automated Reorganization Kit</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                    </p>
                </SideBarLoginContainer>}
            {children}
        </>
    )
}

export default SideBar

