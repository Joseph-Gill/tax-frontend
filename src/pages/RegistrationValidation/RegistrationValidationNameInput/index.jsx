import React from 'react'
import {GlassNameInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {ErrorMessageContainer} from '../../../style/containers'
import {NameInputContainer} from './styles'


const RegistrationValidationNameInput = ({error, errors, handleBlur, handleChange, touched, values}) => {
    return (
        <NameInputContainer>
            <GlassNameInput
                error={errors.first_name}
                name='first_name'
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Firstname'
                type='text'
                value={values.first_name}
            />
            <GlassNameInput
                error={errors.last_name}
                name='last_name'
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Lastname'
                type='text'
                values={values.last_name}
            />
            <ErrorMessageContainer>
                {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
                {errors.first_name && touched.first_name && <ErrorMessage>{errors.first_name}</ErrorMessage>}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
                {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
                {errors.last_name && touched.last_name && <ErrorMessage>{errors.last_name}</ErrorMessage>}
            </ErrorMessageContainer>
        </NameInputContainer>
    )
}

export default RegistrationValidationNameInput
