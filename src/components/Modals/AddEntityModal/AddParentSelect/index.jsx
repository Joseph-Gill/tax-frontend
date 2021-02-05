import React from 'react'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {EntityParentSelect} from '../../../../style/select'


const AddParentSelect = ({changeHandler, value, renderParentNameOptions, error}) => {
    return (
        <div>
            <ActiveInputLabel>Parent</ActiveInputLabel>
            <EntityParentSelect
                callingComponent='AddEntityModal'
                onChange={changeHandler}
                value={value}
            >
                {renderParentNameOptions}
            </EntityParentSelect>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityParent}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddParentSelect
