import React from 'react'
import EditLocationSelect from './EditLocationSelect'
import EntityParentDropdown from '../../../Dropdowns/EntityParentDropdown'
import {EditEntityLinkRowContainer} from '../../styles'


const EditEntityMiddleRow = ({countryName, editEntityInfo, editParentChangeHandler, editParentNames, error, filteredParents,
                                 handleFilterParents, handleResetFilterParents, searchParentTerm, setCountryName,
                                 setShowParentEntitySelect, showParentEntitySelect}) => {
    return (
        <EditEntityLinkRowContainer>
            <EntityParentDropdown
                editEntityInfo={editEntityInfo}
                editParentChangeHandler={editParentChangeHandler}
                editParentNames={editParentNames}
                error={error}
                filteredParents={filteredParents}
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
