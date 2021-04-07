import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import SignUpLink from '../../components/SignUpLink'
import SuccessMessage from '../../components/SuccessMessage'
import LoginFooter from '../../components/LoginFooter'
import PasswordLink from '../../components/PasswordLink'
import LoginLogo from '../../components/LoginLogo'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {userRegistrationAction} from '../../store/user/actions/authentication/userRegistrationAction'
import {LOGIN} from '../../routes/paths'
import {Title} from '../../style/titles'
import {BaseInput} from '../../style/inputs'
import {BaseButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {RegistrationForm} from '../../style/forms'
import {ActiveInputLabel} from '../../style/labels'
import {BasePageContainer, ErrorMessageContainer} from '../../style/containers'


const Registration = ({history}) => {
    const [showSuccess, setShowSuccess] = useState(false)
    const error = useSelector(state => state.errorReducer.error)
    const dispatch = useDispatch()

    return (
        <BasePageContainer>
            {showSuccess && <SuccessMessage
                message="A verification code has been sent to your email!"
                redirect={LOGIN}
                            />}
            <Formik
                // Sets initial values for Formik inputs
                initialValues={{email: ''}}
                // Function called each time submit button is clicked
                onSubmit={async (values) => {
                    dispatch(resetErrors())
                    const response = await dispatch(userRegistrationAction(values.email))
                    if (response) {
                        setShowSuccess(!showSuccess)
                    }
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email){
                        errors.email = true;
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                // Validation only checked when user clicks submit
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({values, errors, touched, handleChange,
                handleBlur, handleSubmit, isSubmitting,}) => (
                    <RegistrationForm onSubmit={handleSubmit}>
                        <LoginLogo
                            history={history}
                        />
                        <Title>Registration</Title>
                        <div>
                            <ActiveInputLabel>Email</ActiveInputLabel>
                            <BaseInput
                                error={errors.email}
                                name='email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder='Enter your email'
                                type='email'
                                value={values.email}
                            />
                        </div>
                        <ErrorMessageContainer>
                            {error && <ErrorMessage>{error.email}</ErrorMessage>}
                            {error && <ErrorMessage>{error.detail}</ErrorMessage>}
                            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        </ErrorMessageContainer>
                        <BaseButton disabled={isSubmitting} type='submit'>Register</BaseButton>
                        <PasswordLink />
                        <SignUpLink />
                        <LoginFooter />
                    </RegistrationForm>
                )}
            </Formik>
        </BasePageContainer>
    )
}


export default Registration


