import React from 'react'
import EditParentSelect from './EditParentSelect'
import EditLocationSelect from './EditLocationSelect'
import {EditEntityLinkRowContainer} from '../../styles'


const EditEntityMiddleRow = ({countryName, editEntityInfo, editParentChangeHandler, error, filteredParents, getParentNameFromId,
                                 handleFilterParents, handleResetFilterParents, searchParentTerm, setCountryName,
                                 setShowParentEntitySelect, showParentEntitySelect}) => {
    return (
        <EditEntityLinkRowContainer>
            <EditParentSelect
                editEntityInfo={editEntityInfo}
                editParentChangeHandler={editParentChangeHandler}
                error={error}
                filteredParents={filteredParents}
                getParentNameFromId={getParentNameFromId}
                handleFilterParents={handleFilterParents}
                handleResetFilterParents={handleResetFilterParents}
                searchParentTerm={searchParentTerm}
                setShowParentEntitySelect={setShowParentEntitySelect}
                showParentEntitySelect={showParentEntitySelect}
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
