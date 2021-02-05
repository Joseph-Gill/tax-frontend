import React from 'react'
import EditEntitySelect from './EditEntitySelect'
import EditEntityTextInput from '../EditEntityTextInput'
import {EditEntityRowContainer} from '../styles'


const EditEntityTopRow = ({editEntityChangeHandler, editEntityInfo, error, renderEntityToEditOptions, setEditEntityInfo}) => {
    return (
        <EditEntityRowContainer>
            <EditEntitySelect
                editEntityChangeHandler={editEntityChangeHandler}
                editEntityInfo={editEntityInfo}
                error={error}
                renderEntityToEditOptions={renderEntityToEditOptions}
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
                value={editEntityInfo.entityName}
            />
        </EditEntityRowContainer>
    )
}

export default EditEntityTopRow
