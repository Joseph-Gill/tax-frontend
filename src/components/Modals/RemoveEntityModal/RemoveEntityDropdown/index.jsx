import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {ErrorMessage} from '../../../../style/messages'
import {EntityErrorContainer} from '../../styles'


const RemoveEntityDropdown = ({entitiesCanRemove, entityToRemove, error, filteredEntitiesCanRemove, handleEntityToRemoveChange,
                                  searchEntityTerm, setFilteredEntitiesCanRemove, setShowEntityRemoveSelect,
                                  showEntityRemoveSelect}) => {

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
                    {renderEntitiesForModalDropdowns(filteredEntitiesCanRemove, handleEntityToRemoveChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityRemove}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default RemoveEntityDropdown
