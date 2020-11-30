import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro'
import {useLocation, useHistory} from 'react-router-dom'
import {LinkBase} from '../../style/links'
import {PASSWORD_RESET, PASSWORD_RESET_VALIDATION} from '../../routes/paths'
import {LinkContainer} from '../../style/containers'

const PasswordLinkContainer = styled(LinkContainer)`
`

const PasswordLink = () => {
    const location = useLocation()
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <PasswordLinkContainer>
            {
            currentPath === PASSWORD_RESET ||
            currentPath === PASSWORD_RESET_VALIDATION
                ?
                    <>
                        Remember your password?
                        <LinkBase onClick={() => history.push('login')}>Go to Login</LinkBase>
                    </>
                :
                    <>
                        Forgot your password?
                        <LinkBase onClick={() => history.push('password-reset')}>Reset Now</LinkBase>
                    </>
        }
        </PasswordLinkContainer>)
}

export default PasswordLink
