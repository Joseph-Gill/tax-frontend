import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../DropdownComponents/ModalDropdownSearchField'
import {getEntityFromId, renderEntitiesForModalDropdowns} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityErrorContainer} from '../../Modals/styles'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../styles'



const EntityParentDropdown = ({editEntityInfo, editParentChangeHandler, editParentNames, error, filteredParents,
                                  searchParentTerm, setFilteredParents, setShowParentEntitySelect, showParentEntitySelect}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={!editEntityInfo.entitySelected || !editEntityInfo.parentId || editEntityInfo.parentId === 'Ultimate'}
            >
                Parent
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowParentEntitySelect}
                showDropdownView={showParentEntitySelect}
            >
                <ModalDropdownButton
                    disabled={!editEntityInfo.entitySelected || !editEntityInfo.parentId || editEntityInfo.parentId === 'Ultimate'}
                    onClick={() => setShowParentEntitySelect(!showParentEntitySelect)}
                >
                    {!editEntityInfo.entitySelected ? 'Select a parent' : !editEntityInfo.parentId || editEntityInfo.parentId === 'Ultimate' ? 'Ultimate' :
                        getEntityFromId(parseInt(editEntityInfo.parentId), editParentNames).name}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showParentEntitySelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredParents}
                        inputName='parent_entity_search'
                        inputPlaceholder='Search for parent name'
                        inputRef={searchParentTerm}
                        originalArray={editParentNames}
                        term={searchParentTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredParents, editParentChangeHandler)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityParent}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EntityParentDropdown
