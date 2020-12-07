import React from 'react'
import {useSelector} from 'react-redux'
import {HOME, LOGIN} from '../../../routes/paths'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {BiggerLogoPlaceholder} from '../../../style'


const LogoContainer = styled(Link)`
  position: absolute;
  top: 16px;
  display: flex;
  justify-content: center;
  width: 270px;
`

const Logo = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    return (
        <LogoContainer to={authenticated ? HOME : LOGIN}>
            <img
                alt="propulsion-logo"
                src={BiggerLogoPlaceholder}
            />
        </LogoContainer>
    )
}

export default Logo
