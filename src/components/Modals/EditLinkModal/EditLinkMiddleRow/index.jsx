import React from 'react'
import EntityNameDropdown from './EntityNameDropdown'
import {EditEntityLinkRowContainer} from '../../styles'


const EditLinkMiddleRow = ({entities, error, filteredFromEntities, filteredToEntities, handleFilterEntities,
                               handleResetFilterEntities, searchFromEntityTerm, searchToEntityTerm, setFilteredFromEntities,
                               setFilteredToEntities, setShowEditLinkFromSelect, setShowEditLinkToSelect,
                               setTargetLink, showEditLinkFromSelect, showEditLinkToSelect, targetLink}) => {
    return (
        <EditEntityLinkRowContainer>
            <EntityNameDropdown
                entities={entities}
                error={error}
                filteredEntities={filteredFromEntities}
                handleFilterEntities={handleFilterEntities}
                handleResetFilterEntities={handleResetFilterEntities}
                label='From'
                searchEntityTerm={searchFromEntityTerm}
                setFilteredEntities={setFilteredFromEntities}
                setKey='from'
                setShowEditLinkSelect={setShowEditLinkFromSelect}
                setTargetLink={setTargetLink}
                showEditLinkSelect={showEditLinkFromSelect}
                targetLink={targetLink}
            />
            <EntityNameDropdown
                entities={entities}
                error={error}
                filteredEntities={filteredToEntities}
                handleFilterEntities={handleFilterEntities}
                handleResetFilterEntities={handleResetFilterEntities}
                label='To'
                searchEntityTerm={searchToEntityTerm}
                setFilteredEntities={setFilteredToEntities}
                setKey='to'
                setShowEditLinkSelect={setShowEditLinkToSelect}
                setTargetLink={setTargetLink}
                showEditLinkSelect={showEditLinkToSelect}
                targetLink={targetLink}
            />
        </EditEntityLinkRowContainer>
    )
}

export default EditLinkMiddleRow
