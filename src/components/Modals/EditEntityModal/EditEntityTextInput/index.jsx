import React from 'react'
import {BaseInput} from '../../../../style/inputs'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'


const EditEntityTextInput = ({disabled, name, label, changeHandler, placeholder, type, value, error, errorLocation}) => {
    return (
        <div>
            <ActiveInputLabel disabled={disabled}>{label}</ActiveInputLabel>
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

export default EditEntityTextInput
