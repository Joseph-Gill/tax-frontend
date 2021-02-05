import React from 'react'
import EditParentSelect from './EditParentSelect'
import EditLocationSelect from './EditLocationSelect'
import {EditEntityRowContainer} from '../styles'


const EditEntityMiddleRow = ({countryName, editEntityInfo, error, renderParentNameOptions,
                                 setCountryName, setEditEntityInfo}) => {
    return (
        <EditEntityRowContainer>
            <EditParentSelect
                editEntityInfo={editEntityInfo}
                error={error}
                renderParentNameOptions={renderParentNameOptions}
                setEditEntityInfo={setEditEntityInfo}
            />
            <EditLocationSelect
                countryName={countryName}
                editEntityInfo={editEntityInfo}
                error={error}
                setCountryName={setCountryName}
            />
        </EditEntityRowContainer>
    )
}

export default EditEntityMiddleRow
