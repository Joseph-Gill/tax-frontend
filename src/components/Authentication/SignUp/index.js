import React from 'react'
import {SignUpButton, SignUpContainer} from './styles'


const SignUp = ({showRegister, showValidation, setShowRegister, setShowValidation}) => {
    return <>
        <SignUpContainer>
            {showRegister ? 'Already have an account?' : 'Don\'t have an account?'}
            <SignUpButton onClick={() => {
                if(showValidation){
                    setShowRegister(s => !s)
                    setShowValidation(s => !s)
                } else {
                    setShowRegister(s => !s)
                }

            }}>
                {showRegister ? 'Log In' : 'Sign Up'}
            </SignUpButton>
        </SignUpContainer>
    </>
}

export default SignUp
