import React, {useRef, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {BaseButton, DisableButton} from '../../../style/buttons'
import {Title} from '../../../style/titles'
import RegistrationSuccess from './RegistrationSucess'
import {TermsConditions} from '../SignUp/TermsConditions'
import Modal from '../SignUp/Modal/'
import {RegistrationWrapper, CheckboxInput, CheckboxWrapper, EnterValidationCode, ErrorMessage, RegistrationInput, TermsAndConditionsWrapper, ValidationLink} from './styles'
import {useResetErrors} from '../../../hooks'
import {userRegistrationAction} from '../../../store/user/actions/authentication/userRegistrationAction'


const Registration = ({dispatch, history, error, setShowValidation, showValidation}) => {
    const [showSuccess, setShowSuccess] = useState(false)
    let email = useRef('')
    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [showHideTermsAndConditions, setShowHideTermsAndConditions] = useState(false)
    useResetErrors()

    const registrationHandler = async (e) => {
        e.preventDefault()
        const data = await dispatch(userRegistrationAction(email.current.value))
        if(data){
            setShowSuccess(!showSuccess)
            setTimeout(() => {
                setShowValidation(!showValidation)
            }, 2000)
        }
    }

    return <>
        <Modal
            show={showHideTermsAndConditions}
            clicked={() => setShowHideTermsAndConditions(false)}
        >
            <TermsConditions>
                <button onClick={() => setShowHideTermsAndConditions(false)}>Close</button>
            </TermsConditions>
        </Modal>

        <RegistrationWrapper>
            {showSuccess && <RegistrationSuccess/>}
            <Title>Registration</Title>
            <RegistrationInput
                type='text'
                name='email'
                placeholder='Enter your email ... '
                ref={email}
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}


            <TermsAndConditionsWrapper>
                <label onClick={() => setShowHideTermsAndConditions(true)}>Term & Conditions</label>
                <CheckboxWrapper>
                    <CheckboxInput
                        type="checkbox"
                        value="I read and accept the Job-Tracker terms and conditions."
                        onChange={() => setTermsAndConditions(!termsAndConditions)}
                    /> I read and accept the Job-Tracker terms and conditions.
                </CheckboxWrapper>
            </TermsAndConditionsWrapper>

            {termsAndConditions ? (
                    <BaseButton onClick={registrationHandler}>Register</BaseButton>)
                : (<DisableButton disabled onClick={registrationHandler}>Register</DisableButton>)
            }

            <EnterValidationCode>
                Got a code already? Enter it
                <ValidationLink onClick={() => setShowValidation(!showValidation)}>here</ValidationLink>.
            </EnterValidationCode>
        </RegistrationWrapper>
    </>
}

const mapStateToProps = ({errorReducer: {error}}) => ({
    error
})


export default withRouter(connect(mapStateToProps)(Registration))


