import React from 'react'
import {v4 as uuidv4} from 'uuid'
import DropdownInternalContainer from '../../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {EntityErrorContainer} from '../../../styles'
import {ErrorMessage} from '../../../../../style/messages'
import {ActiveInputLabel} from '../../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const EditParentSelect = ({editEntityInfo, editParentChangeHandler, error, filteredParents, getParentNameFromId, handleFilterParents,
                              handleResetFilterParents, searchParentTerm, setShowParentEntitySelect, showParentEntitySelect}) => {

    const handleSelectParentEntityInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterParents()
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
                    {!editEntityInfo.entitySelected ? 'Select a parent' : !editEntityInfo.parentId ? 'Ultimate' : getParentNameFromId(parseInt(editEntityInfo.parentId)).name}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showParentEntitySelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        handleFilterClick={handleFilterParents}
                        handleFilterReset={handleResetFilterParents}
                        handleKeyPress={handleSelectParentEntityInputPressEnter}
                        inputName='parent_entity_search'
                        inputPlaceholder='Search for parent name'
                        inputRef={searchParentTerm}
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

export default EditParentSelect
