import React, {useEffect, useState} from 'react'
import {useLocation, useHistory} from 'react-router-dom'
import styled from 'styled-components/'


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
    
        button {
            background: none;
            border:${props => props.theme.accentColor} solid 2px;
            color: ${props => props.theme.accentColor};
            font-weight: bold;
        
        :hover {
            background: ${props => props.theme.accentColor};;
            border:${props => props.theme.accentColor} solid 2px;
            color: white;
        }
    }
`


const SignUpButton = () => {
    const location = useLocation()
    const history = useHistory()
    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    return <SignUpButtonWrapper>
        {currentPath === '/registration' ? 'Already have an account?' : 'Don\'t have an account?'}
        <button onClick={() => history.push(currentPath === '/registration' ? 'login' : 'registration')}>
            {currentPath === '/registration' ? 'Log In' : 'Sign up'}
        </button>
    </SignUpButtonWrapper>
}

export default SignUpButton
