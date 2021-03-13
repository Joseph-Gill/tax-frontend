import React from 'react'
import {v4 as uuidv4} from 'uuid'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../DropdownComponents/ModalDropdownSearchField'
import {getParentNameFromId, handleFilterEntities} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityErrorContainer} from '../../Modals/styles'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../styles'



const EntityParentDropdown = ({editEntityInfo, editParentChangeHandler, editParentNames, entities, error, filteredParents,
                                  searchParentTerm, setFilteredParents, setShowParentEntitySelect, showParentEntitySelect}) => {

    const handleSelectParentEntityInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntities(entities, setFilteredParents, searchParentTerm)
        }
    }

    return (
        <div>
            <ActiveInputLabel
                disabled={!editEntityInfo.entitySelected || !editEntityInfo.parentId}
            >
                Parent
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowParentEntitySelect}
                showDropdownView={showParentEntitySelect}
            >
                <ModalDropdownButton
                    disabled={!editEntityInfo.entitySelected || !editEntityInfo.parentId}
                    onClick={() => setShowParentEntitySelect(!showParentEntitySelect)}
                >
                    {!editEntityInfo.entitySelected ? 'Select a parent' : !editEntityInfo.parentId ? 'Ultimate' :
                        getParentNameFromId(parseInt(editEntityInfo.parentId), editParentNames).name}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showParentEntitySelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        arrayToFilter={entities}
                        filterStateSet={setFilteredParents}
                        handleKeyPress={handleSelectParentEntityInputPressEnter}
                        inputName='parent_entity_search'
                        inputPlaceholder='Search for parent name'
                        inputRef={searchParentTerm}
                        originalArray={editParentNames}
                        term={searchParentTerm}
                    />
                    {filteredParents.length ?
                        filteredParents.map(entity => (
                            // Prevents showing entities that are only on the Step Chart from "Delete" highlighting
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={uuidv4()}
                                    onClick={() => editParentChangeHandler(entity.id)}
                                >
                                    <span>{entity.name}</span>
                                    <span>{`(${entity.location})`}</span>
                                </ModalDropdownContent>)) : (
                                    <ModalDropdownContent>
                                        <span>No Entities to display</span>
                                    </ModalDropdownContent>)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityParent}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EntityParentDropdown
