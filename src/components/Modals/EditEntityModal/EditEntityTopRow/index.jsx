import React from 'react'
import EditEntitySelect from './EditEntitySelect'
import EditEntityTextInput from '../EditEntityTextInput'
import {EditEntityLinkRowContainer} from '../../styles'


const EditEntityTopRow = ({editEntityChangeHandler, editEntityInfo, entities, error, setEditEntityInfo,
                              setShowEditEntitySelect, showEditEntitySelect}) => {
    return (
        <EditEntityLinkRowContainer>
            <EditEntitySelect
                editEntityChangeHandler={editEntityChangeHandler}
                editEntityInfo={editEntityInfo}
                entities={entities}
                error={error}
                setShowEditEntitySelect={setShowEditEntitySelect}
                showEditEntitySelect={showEditEntitySelect}
            />
            <EditEntityTextInput
                changeHandler={(e) => setEditEntityInfo({...editEntityInfo, entityName: e.target.value})}
                disabled={!editEntityInfo.entitySelected}
                error={error}
                errorLocation={error.entityName}
                label='Name'
                name='name'
                placeholder='Enter name'
                type='text'
                value={editEntityInfo.entityName.length > 30 ? editEntityInfo.entityName.slice(0, 24).concat('....') : editEntityInfo.entityName}
            />
        </EditEntityLinkRowContainer>
    )
}

export default EditEntityTopRow
