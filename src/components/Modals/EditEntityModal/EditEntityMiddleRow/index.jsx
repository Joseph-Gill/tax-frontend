import React from 'react'
import EditParentSelect from './EditParentSelect'
import EditLocationSelect from './EditLocationSelect'
import {EditEntityLinkRowContainer} from '../../styles'


const EditEntityMiddleRow = ({countryName, editEntityInfo, error, renderParentNameOptions,
                                 setCountryName, setEditEntityInfo}) => {
    return (
        <EditEntityLinkRowContainer>
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
        </EditEntityLinkRowContainer>
    )
}

export default EditEntityMiddleRow
