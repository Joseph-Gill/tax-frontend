import React from 'react'
import {EntityErrorContainer} from '../../styles'
import {BaseInput} from '../../../../style/inputs'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'


const ModalInput = ({label, name, changeHandler, placeholder, type, value, error, errorLocation}) => {
    return (
        <div>
            <ActiveInputLabel>{label}</ActiveInputLabel>
            <BaseInput
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
