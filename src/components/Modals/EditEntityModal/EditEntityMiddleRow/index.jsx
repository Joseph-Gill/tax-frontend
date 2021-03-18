import React from 'react'
import EditLocationSelect from './EditLocationSelect'
import EntityParentDropdown from '../../../Dropdowns/EntityParentDropdown'
import {EditEntityLinkRowContainer} from '../../styles'


const EditEntityMiddleRow = ({countryName, editEntityInfo, editParentChangeHandler, editParentNames, error,
                                 filteredParents, searchParentTerm, setCountryName, setFilteredParents,
                                 setShowParentEntitySelect, showParentEntitySelect}) => {
    return (
        <EditEntityLinkRowContainer>
            <EntityParentDropdown
                editEntityInfo={editEntityInfo}
                editParentChangeHandler={editParentChangeHandler}
                editParentNames={editParentNames}
                error={error}
                filteredParents={filteredParents}
                searchParentTerm={searchParentTerm}
                setFilteredParents={setFilteredParents}
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
