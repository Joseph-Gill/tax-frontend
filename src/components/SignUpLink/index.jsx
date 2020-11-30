import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro'
import {useLocation, useHistory} from 'react-router-dom'
import {LinkBase} from '../../style/links'
import {PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION} from '../../routes/paths'
import {LinkContainer} from '../../style/containers'

const SignUpLinkContainer = styled(LinkContainer)`
  bottom: 70px;
  position: absolute;
`

const SignUpLink = () => {
    const location = useLocation()
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <SignUpLinkContainer>
            {
            currentPath === REGISTRATION ||
            currentPath === REGISTRATION_VALIDATION ||
            currentPath === PASSWORD_RESET ||
            currentPath === PASSWORD_RESET_VALIDATION
                ?
                    <>
                        Already have an account?
                        <LinkBase onClick={() => history.push('login')}>Log In</LinkBase>
                    </>
                :
                    <>
                        Don&apos;t have an account?
                        <LinkBase onClick={() => history.push('registration')}>Register Now</LinkBase>
                    </>
        }
        </SignUpLinkContainer>)
}

export default SignUpLink
