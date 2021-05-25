import React, {useEffect, useState} from 'react'
import {ABOUT, LANDING, LOGIN, PLATFORM} from '../../../routes/paths'
import taxCheetahLogo from '../../../assets/logos/tax_cheetah_logo_new_v1.png'
import buttonArrow from '../../../assets/icons/tax_cheetah_landing_button_icon.svg'
import {Header, HeaderButton, HeaderButtonLinksContainer, HeaderLink, HeaderLinksContainer, HeaderLogo} from './styles'


const LandingHeader = ({location}) => {
    const [header, setHeader] = useState(true)

    const listenScrollEvent = () => {
        if (window.scrollY < 73) {
            return setHeader(true)
        } else if (window.scrollY > 70) {
            return setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)

        return () => window.removeEventListener('scroll', listenScrollEvent)
    }, [])

    return (
        <Header header={header}>
            <HeaderLogo alt='tax cheetah logo' header={header} src={taxCheetahLogo} />
            <HeaderButtonLinksContainer header={header}>
                <HeaderLinksContainer header={header}>
                    <HeaderLink isactive={location.pathname === LANDING ? 1 : 0} to={LANDING}>Home</HeaderLink>
                    <HeaderLink isactive={location.pathname === PLATFORM ? 1 : 0} to={PLATFORM}>Our Platform</HeaderLink>
                    <HeaderLink isactive={location.pathname === ABOUT ? 1 : 0} to={ABOUT}>About Us</HeaderLink>
                    <HeaderLink to={LOGIN}>Login</HeaderLink>
                </HeaderLinksContainer>
                <HeaderButton href='mailto:info@tax-cheetah.com'>
                    <span>Request Demo</span>
                    <img alt='request demo' src={buttonArrow} />
                </HeaderButton>
            </HeaderButtonLinksContainer>
        </Header>
    )
}

export default LandingHeader
