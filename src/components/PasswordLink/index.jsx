import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {PASSWORD_RESET, PASSWORD_RESET_VALIDATION} from '../../routes/paths'
import {LinkBase} from '../../style/links'
import {LinkContainer} from '../../style/containers'


const PasswordLink = () => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <LinkContainer>
            {currentPath === PASSWORD_RESET || currentPath === PASSWORD_RESET_VALIDATION ?
                <>
                    Remember your password?
                    <LinkBase to='login'>Go to Login</LinkBase>
                </> :
                <>
                    Forgot your password?
                    <LinkBase to='password-reset'>Reset Now</LinkBase>
                </>}
        </LinkContainer>)
}

export default PasswordLink
