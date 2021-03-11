import React from 'react'
import {EntityErrorContainer} from '../../styles'
import {BaseInput} from '../../../../style/inputs'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'


const ModalInput = ({disabled, label, name, changeHandler, placeholder, type, value, error, errorLocation}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={disabled}
            >
                {label}
            </ActiveInputLabel>
            <BaseInput
                disabled={disabled}
                name={name}
                onChange={changeHandler}
                placeholder={placeholder}
                type={type}
                value={value}
            />
            <EntityErrorContainer>
                {error && <ErrorMessage>{errorLocation}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default ModalInput
