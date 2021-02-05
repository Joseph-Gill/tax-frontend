import React from 'react'
import EditLegalSelect from './EditLegalSelect'
import EditEntityTextInput from '../EditEntityTextInput'
import {EditEntityRowContainer} from '../styles'


const EditEntityBottomRow = ({editEntityInfo, error, legalForm, setEditEntityInfo, setLegalForm}) => {
    return (
        <EditEntityRowContainer>
            <EditLegalSelect
                editEntityInfo={editEntityInfo}
                error={error}
                legalForm={legalForm}
                setLegalForm={setLegalForm}
            />
            <EditEntityTextInput
                changeHandler={(e) => setEditEntityInfo({...editEntityInfo, taxRate: e.target.value})}
                disabled={!editEntityInfo.entitySelected}
                label='Tax Rate (optional)'
                name='tax_rate'
                placeholder='Enter current income tax rate'
                type='text'
                value={editEntityInfo.taxRate}
            />
        </EditEntityRowContainer>
    )
}

export default EditEntityBottomRow
