import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {REGISTRATION, REGISTRATION_VALIDATION} from '../../routes/paths'
import {LinkBase} from '../../style/links'
import {SignUpLinkContainer} from './styles'


const SignUpLink = () => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <SignUpLinkContainer>
            {currentPath === REGISTRATION || currentPath === REGISTRATION_VALIDATION ?
                <>
                    Already have an account?
                    <LinkBase to='login'>Log In</LinkBase>
                </> :
                <>
                    Don&apos;t have an account?
                    <LinkBase to='registration'>Register Now</LinkBase>
                </>}
        </SignUpLinkContainer>)
}

export default SignUpLink
