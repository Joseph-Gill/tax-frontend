import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {getParentNameFromId, handleFilterEntities} from '../../../../helpers'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const AddParentSelect = ({addParents, error, filteredParents, handleSelectParentChange, newEntityInfo,
                             searchParentTerm, setFilteredParents, setShowAddParentSelect, showAddParentSelect}) => {

    const handleSelectParentEntityInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntities(addParents, setFilteredParents, searchParentTerm)
        }
    }

    return (
        <div>
            <ActiveInputLabel>Parent</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAddParentSelect}
                showDropdownView={showAddParentSelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowAddParentSelect(!showAddParentSelect)}
                >
                    {!newEntityInfo.parentId ? 'Select a parent' : getParentNameFromId(parseInt(newEntityInfo.parentId), addParents).name}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showAddParentSelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        arrayToFilter={filteredParents}
                        filterStateSet={setFilteredParents}
                        handleKeyPress={handleSelectParentEntityInputPressEnter}
                        inputName='parent_entity_search'
                        inputPlaceholder='Search for parent name'
                        inputRef={searchParentTerm}
                        originalArray={addParents}
                        term={searchParentTerm}
                    />
                    {filteredParents.length ?
                        filteredParents.map(entity => (
                            // Prevents showing entities that are only on the Step Chart from "Delete" highlighting
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={entity.id}
                                    onClick={() => handleSelectParentChange(entity.id)}
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

export default AddParentSelect
