import React from 'react'
import {NameInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {TextActiveInputLabel} from '../../../style/labels'
import {ErrorMessageContainer} from '../../../style/containers'
import {NameInputContainer} from './styles'


const RegistrationValidationNameInput = ({error, errors, handleBlur, handleChange, touched, values}) => {
    return (
        <NameInputContainer>
            <div>
                <TextActiveInputLabel htmlFor='first_name'>Firstname</TextActiveInputLabel>
                <NameInput
                    error={errors.first_name}
                    name='first_name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Enter firstname'
                    type='text'
                    value={values.first_name}
                />
            </div>
            <div>
                <TextActiveInputLabel htmlFor='last_name'>Lastname</TextActiveInputLabel>
                <NameInput
                    error={errors.last_name}
                    name='last_name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Enter lastname'
                    type='text'
                    values={values.last_name}
                />
            </div>
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
