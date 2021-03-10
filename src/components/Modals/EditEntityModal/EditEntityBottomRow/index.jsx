import React from 'react'
import EditLegalSelect from './EditLegalSelect'
import EditEntityTextInput from '../EditEntityTextInput'
import {EditEntityLinkRowContainer} from '../../styles'
import EntityLegalDropdown from '../../../Dropdowns/EntityLegalDropdown'


const EditEntityBottomRow = ({editEntityInfo, error, legalForm, setEditEntityInfo, setLegalForm, setShowEntityLegalSelect,
                                 showEntityLegalSelect}) => {
    return (
        <EditEntityLinkRowContainer>
            {/*<EditLegalSelect*/}
            {/*    editEntityInfo={editEntityInfo}*/}
            {/*    error={error}*/}
            {/*    legalForm={legalForm}*/}
            {/*    setLegalForm={setLegalForm}*/}
            {/*/>*/}
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
