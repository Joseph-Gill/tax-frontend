import React from 'react'
import {v4 as uuidv4} from 'uuid'
import DropdownInternalContainer from '../../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {ActiveInputLabel} from '../../../../../style/labels'
import {EntityErrorContainer} from '../../../styles'
import {ErrorMessage} from '../../../../../style/messages'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const EditEntitySelect = ({editEntityChangeHandler, editEntityInfo, entities, error, filteredEntitiesToEdit, handleFilterEntitiesToEdit,
                              handleResetFilterEntitiesToEdit, searchEntityTerm, setShowEditEntitySelect, showEditEntitySelect}) => {

    const handleSelectEditEntityInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntitiesToEdit()
        }
    }

    return (
        <div>
            <ActiveInputLabel>Entity to edit</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowEditEntitySelect}
                showDropdownView={showEditEntitySelect}
            >
                <ModalDropdownButton
                    onClick={() => setShowEditEntitySelect(!showEditEntitySelect)}
                >
                    {!entities.length ? 'No entities to edit' : editEntityInfo.entityName ? editEntityInfo.entityName : 'Select entity to edit'}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showEditEntitySelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        handleFilterClick={handleFilterEntitiesToEdit}
                        handleFilterReset={handleResetFilterEntitiesToEdit}
                        handleKeyPress={handleSelectEditEntityInputPressEnter}
                        inputName='edit_entity_search'
                        inputPlaceholder='Search for entity name'
                        inputRef={searchEntityTerm}
                    />
                    {filteredEntitiesToEdit.length ?
                        filteredEntitiesToEdit.map(entity => (
                            // Prevents showing entities that are only on the Step Chart from "Delete" highlighting
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={uuidv4()}
                                    onClick={() => editEntityChangeHandler(entity.id)}
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
                {error && <ErrorMessage>{error.entitySelect}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditEntitySelect
