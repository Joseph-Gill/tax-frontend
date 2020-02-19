import React, {useState} from 'react'
import Login from './Login'
import Registration from './Registration'
import RegistrationValidation from './RegistrationValidation'
import SignUp from './SignUp'
import {CredentialsWrapper} from '../../style/wrappers'
import {BaseBackground} from '../../style/background'
import {CredentialsContainer} from './styles'


const Authentication = () => {
    const [showRegister, setShowRegister] = useState(false)
    const [showValidation, setShowValidation] = useState(false)
    const [showLogin] = useState(true)
    const [showSignUp] = useState(true)

    return <>
        <CredentialsContainer>
            <BaseBackground/>
            {showSignUp && <SignUp
                showRegister={showRegister}
                setShowRegister={setShowRegister}
                setShowValidation={setShowValidation}
                showValidation={showValidation}
            />}
            <CredentialsWrapper>
                {showLogin && !showRegister && !showValidation && <Login/>}
                {showRegister && !showValidation && <Registration
                    showValidation={showValidation}
                    setShowValidation={setShowValidation}/>}
                {showValidation && <RegistrationValidation
                    showValidation={showValidation}
                    setShowValidation={setShowValidation}
                    showRegister={showRegister}
                    setShowRegister={setShowRegister}/>}
            </CredentialsWrapper>
        </CredentialsContainer>

    </>
}

export default Authentication
