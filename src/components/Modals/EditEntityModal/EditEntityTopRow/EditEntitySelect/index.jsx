import React from 'react'
import {ActiveInputLabel} from '../../../../../style/labels'
import {EntityFormSelect} from '../../../../../style/select'
import {EntityErrorContainer} from '../../../styles'
import {ErrorMessage} from '../../../../../style/messages'


const EditEntitySelect = ({editEntityChangeHandler, editEntityInfo, error, renderEntityToEditOptions}) => {
    return (
        <div>
            <ActiveInputLabel>Entity to edit</ActiveInputLabel>
            <EntityFormSelect
                id='entityToEditId'
                name='entityToEditId'
                onChange={(e) => editEntityChangeHandler(e)}
                value={editEntityInfo.entityToEditId}
            >
                {renderEntityToEditOptions}
            </EntityFormSelect>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entitySelect}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditEntitySelect
