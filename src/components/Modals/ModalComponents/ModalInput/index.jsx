import React from 'react'
import {EntityErrorContainer} from '../../styles'
import {BaseInput} from '../../../../style/inputs'
import {ErrorMessage} from '../../../../style/messages'
import {TextActiveInputLabel} from '../../../../style/labels'


const ModalInput = ({disabled, label, name, changeHandler, placeholder, type, value, error, errorLocation}) => {
    return (
        <div>
            <TextActiveInputLabel
                disabled={disabled}
            >
                {label}
            </TextActiveInputLabel>
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
