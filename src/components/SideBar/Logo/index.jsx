import React from 'react'
import taxCheetahLogo from '../../../assets/logos/tax_cheetah_logo_new_v1.png'
import taxCheetahCollapsedLogo from '../../../assets/logos/Tax_Cheetah_logo_collapsed_sidebar.png'
import {useSelector} from 'react-redux'
import {HOME, LOGIN} from '../../../routes/paths'
import {LogoContainer, LogoImgCollapsed, LogoImgExpanded} from './styles'


const Logo = ({expanded}) => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return (
        <LogoContainer to={authenticated ? HOME : LOGIN}>
            {expanded ?
                <LogoImgExpanded
                    alt="tax cheetah logo"
                    src={taxCheetahLogo}
                /> :
                <LogoImgCollapsed
                    alt='tax cheetah logo'
                    src={taxCheetahCollapsedLogo}
                />}
        </LogoContainer>
    )
}

export default Logo
