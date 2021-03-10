import React from 'react'
import EditEntityTextInput from '../EditEntityTextInput'
import EntityLegalDropdown from '../../../Dropdowns/EntityLegalDropdown'
import {EditEntityLinkRowContainer} from '../../styles'


const EditEntityBottomRow = ({editEntityInfo, error, legalForm, setEditEntityInfo, setLegalForm, setShowEntityLegalSelect,
                                 showEntityLegalSelect}) => {
    return (
        <EditEntityLinkRowContainer>
            <EntityLegalDropdown
                editEntityInfo={editEntityInfo}
                error={error}
                legalForm={legalForm}
                setLegalForm={setLegalForm}
                setShowEntityLegalSelect={setShowEntityLegalSelect}
                showEntityLegalSelect={showEntityLegalSelect}

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
        </EditEntityLinkRowContainer>
    )
}

export default EditEntityBottomRow
