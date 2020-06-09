import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BaseButton} from '../../style/buttons'
import {Title} from '../../style/titles'
import {TermsConditions} from './TermsConditions'
import Modal from './Modal'
import {useResetErrors} from '../../hooks'
import {userRegistrationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import SignUpButton from '../../components/SignUpButton'
import {BasePageContainer} from '../../style/containers'
import {RegistrationForm} from '../../style/forms'
import SuccessMessage from '../../components/SuccessMessage'
import {BaseInput} from '../../style/inputs'
import {ErrorMessage} from '../../style/messages'
import styled from 'styled-components/macro'
import {LOGIN} from '../../routes/paths'


export const TermsAndConditionsWrapper = styled.div`
  margin-top: 10px;
  width: 75%;
  color: rgba(0,0,0,0.82);
  font-size: 12px;
  height: 25%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  flex-direction: column;
    label {
    color: ${props => props.theme.accentColor};
    cursor: pointer;
    :hover {
        text-decoration: underline;
        color: #c47010;
    }
`


const Registration = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [showHideTermsAndConditions, setShowHideTermsAndConditions] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()
    let email = useRef('')
    useResetErrors()

    const registrationHandler = async (e) => {
        e.preventDefault()
        const data = await dispatch(userRegistrationAction(email.current.value))
        if(data) setShowSuccess(!showSuccess)
    }

    return (<BasePageContainer>
        <SignUpButton />
        <Modal
            clicked={() => setShowHideTermsAndConditions(false)}
            show={showHideTermsAndConditions}
        >
            <TermsConditions>
                <button onClick={() => setShowHideTermsAndConditions(false)}>Close</button>
            </TermsConditions>
        </Modal>
        {showSuccess && <SuccessMessage
            message="A verification code has been sent to you email!"
            redirect={LOGIN}
                        />}
        <RegistrationForm>
            <Title>Registration</Title>
            <BaseInput
                name='email'
                placeholder='Enter your email ... '
                ref={email}
                type='text'
            />
            {error && <ErrorMessage>{error.email}</ErrorMessage>}
            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
            <TermsAndConditionsWrapper>
                <label onClick={() => setShowHideTermsAndConditions(true)}>Term & Conditions</label>
                <input
                    onChange={() => setTermsAndConditions(!termsAndConditions)}
                    type="checkbox"
                    value="I read and accept the Job-Tracker terms and conditions."
                />
                I read and accept the terms and conditions.
            </TermsAndConditionsWrapper>
            {termsAndConditions ? (
                <BaseButton onClick={registrationHandler}>Register</BaseButton>)
                : (<BaseButton
                    disabled
                    onClick={registrationHandler}
                   >Register
                </BaseButton>)}
        </RegistrationForm>
            </BasePageContainer>)
}


export default Registration


