import React, {useEffect, useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import styled from 'styled-components/'
import {BaseButton} from '../../style/buttons'
import {PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION} from '../../routes/paths'


const SignUpButtonWrapper = styled.div`
    height: 50px;
    width: 320px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 15px;
`

const SignUpButton = () => {
    const location = useLocation()
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return (
        <SignUpButtonWrapper>
            {
            currentPath === REGISTRATION ||
            currentPath === REGISTRATION_VALIDATION ||
            currentPath === PASSWORD_RESET ||
            currentPath === PASSWORD_RESET_VALIDATION
                ?
                    <>
                        Already have an account?
                        <BaseButton onClick={() => history.push('login')}>Log In</BaseButton>
                    </>
                :
                    <>
                        Don&apos;t have an account?
                        <BaseButton onClick={() => history.push('registration')}>Sign Up</BaseButton>
                    </>
        }
        </SignUpButtonWrapper>)
}

export default SignUpButton
