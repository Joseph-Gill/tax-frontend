import React from 'react'
import {EntityErrorContainer} from '../../../styles'
import {ErrorMessage} from '../../../../../style/messages'
import {ActiveInputLabel} from '../../../../../style/labels'
import {EntityParentSelect} from '../../../../../style/select'



const EditParentSelect = ({editEntityInfo, error, setEditEntityInfo, renderParentNameOptions}) => {
    return (
        <div>
            <ActiveInputLabel>Parent</ActiveInputLabel>
            <EntityParentSelect
                disabled={!editEntityInfo.parentId || editEntityInfo.parentId === 'Ultimate'}
                onChange={(e) => {setEditEntityInfo({...editEntityInfo, parentId: parseInt(e.target.value)})}}
                value={editEntityInfo.parentId}
            >
                {renderParentNameOptions}
            </EntityParentSelect>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityParent}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditParentSelect
