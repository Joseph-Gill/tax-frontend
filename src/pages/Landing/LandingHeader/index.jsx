import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import {LANDING} from '../../../routes/paths'
import {LoginLogoImg} from '../../../style/images'
import taxCheetahLogo from '../../../assets/logos/tax_cheetah_logo_new_v1.png'
import buttonArrow from '../../../assets/icons/tax_cheetah_landing_button_icon.svg'
import {LandingHeaderButton, LandingHeaderContainer, LandingHeaderLinkContainer} from '../styles'


const LandingHeader = ({history}) => {
    return (
        <LandingHeaderContainer>
            <LoginLogoImg
                alt='tax cheetah logo'
                onClick={() => history.push(`${LANDING}`)}
                src={taxCheetahLogo}
            />
            <LandingHeaderLinkContainer>
                <HashLink smooth to="/#about">About</HashLink>
                <HashLink smooth to="/#team">Team</HashLink>
                <Link to='/login'>Login</Link>
            </LandingHeaderLinkContainer>
            <LandingHeaderButton>
                <span>Request Demo</span>
                <img alt='request demo' src={buttonArrow} />
            </LandingHeaderButton>
        </LandingHeaderContainer>
    )
}

export default LandingHeader
