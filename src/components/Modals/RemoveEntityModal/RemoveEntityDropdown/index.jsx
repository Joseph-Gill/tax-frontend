import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {getEntityInfo} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const RemoveEntityDropdown = ({entitiesCanRemove, entityToRemove, filteredEntitiesCanRemove, searchEntityTerm,
                                  setEntityToRemove, setFilteredEntitiesCanRemove, setShowEntityRemoveSelect,
                                  showEntityRemoveSelect}) => {

    const handleEntityToRemoveChange = entityId => {
        setEntityToRemove(entityId)
        setShowEntityRemoveSelect(false)
    }

    return (
        <div>
            <ActiveInputLabel>Entity to remove</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowEntityRemoveSelect}
                showDropdownView={showEntityRemoveSelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowEntityRemoveSelect(!showEntityRemoveSelect)}
                >
                    {!entityToRemove ? 'Select an entity' : `${getEntityInfo(entitiesCanRemove, entityToRemove)}`}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showEntityRemoveSelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredEntitiesCanRemove}
                        inputName='remove_entity_search'
                        inputPlaceholder='Search for entity name'
                        inputRef={searchEntityTerm}
                        originalArray={entitiesCanRemove}
                        term={searchEntityTerm}
                    />
                    {filteredEntitiesCanRemove.length ?
                        filteredEntitiesCanRemove.map(entity => (
                            <ModalDropdownContent
                                key={entity.id}
                                onClick={() => handleEntityToRemoveChange(entity.id)}
                            >
                                <span>{entity.name}</span>
                                <span>{`(${entity.location})`}</span>
                            </ModalDropdownContent>)) : (
                                <ModalDropdownContent>
                                    <span>No Entities to display</span>
                                </ModalDropdownContent>)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
        </div>
    )
}

export default RemoveEntityDropdown
