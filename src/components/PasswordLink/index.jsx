import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {PASSWORD_RESET, PASSWORD_RESET_VALIDATION} from '../../routes/paths'
import {LinkBase} from '../../style/links'
import {PasswordLinkContainer} from './styles'


const PasswordLink = () => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <PasswordLinkContainer currentPath={currentPath}>
            {currentPath === PASSWORD_RESET || currentPath === PASSWORD_RESET_VALIDATION ?
                <>
                    Remember your password?
                    <LinkBase to='login'>Go to Login</LinkBase>
                </> :
                <>
                    Forgot your password?
                    <LinkBase to='password-reset'>Reset Now</LinkBase>
                </>}
        </PasswordLinkContainer>)
}

export default PasswordLink
