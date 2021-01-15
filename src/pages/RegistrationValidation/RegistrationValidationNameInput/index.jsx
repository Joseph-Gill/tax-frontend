import React from 'react'
import {NameInput} from '../../../style/inputs'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {NameErrorMessageContainer, NameInputContainer} from './styles'


const RegistrationValidationNameInput = ({error, first_name, last_name}) => {
    return (
        <NameInputContainer>
            <div>
                <ActiveInputLabel htmlFor='first_name'>Firstname</ActiveInputLabel>
                <NameInput
                    name='first_name'
                    placeholder='Enter firstname'
                    ref={first_name}
                    type='text'
                />
            </div>
            <div>
                <ActiveInputLabel htmlFor='last_name'>Lastname</ActiveInputLabel>
                <NameInput
                    name='last_name'
                    placeholder='Enter lastname'
                    ref={last_name}
                    type='text'
                />
            </div>
            <NameErrorMessageContainer>
                {error && <ErrorMessage>{error.first_name}</ErrorMessage>}
            </NameErrorMessageContainer>
            <NameErrorMessageContainer>
                {error && <ErrorMessage>{error.last_name}</ErrorMessage>}
            </NameErrorMessageContainer>
        </NameInputContainer>
    )
}

export default RegistrationValidationNameInput
