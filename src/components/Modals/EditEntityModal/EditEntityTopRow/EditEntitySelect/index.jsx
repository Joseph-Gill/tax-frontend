import React from 'react'
import DropdownInternalContainer from '../../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {renderEntitiesForModalDropdowns} from '../../../../../helpers'
import {ActiveInputLabel} from '../../../../../style/labels'
import {EntityErrorContainer} from '../../../styles'
import {ErrorMessage} from '../../../../../style/messages'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const EditEntitySelect = ({editEntityChangeHandler, editEntityInfo, entities, error, filteredEntitiesToEdit,
                              searchEntityTerm, setFilteredEntitiesToEdit, setShowEditEntitySelect, showEditEntitySelect}) => {

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
                        filterStateSet={setFilteredEntitiesToEdit}
                        inputName='edit_entity_search'
                        inputPlaceholder='Search for entity name'
                        inputRef={searchEntityTerm}
                        originalArray={entities}
                        term={searchEntityTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredEntitiesToEdit, editEntityChangeHandler)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entitySelect}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EditEntitySelect
