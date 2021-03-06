import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {getEntityFromId, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const AddParentSelect = ({addParents, disabled, error, filteredParents, handleSelectParentChange, newEntityInfo,
                             searchParentTerm, setFilteredParents, setShowAddParentSelect, showAddParentSelect}) => {

    // disabled is only used by the GroupAdd component to handle when the parent choice is only Ultimate for the first entity created
    return (
        <div>
            <ActiveInputLabel
                disabled={disabled}
            >
                Parent
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAddParentSelect}
                showDropdownView={showAddParentSelect}
            >
                {disabled ?
                    <ModalDropdownButton
                        disabled={disabled}
                    >
                        Ultimate
                    </ModalDropdownButton> :
                    <ModalDropdownButton
                        onClick={() => setShowAddParentSelect(!showAddParentSelect)}
                    >
                        {!newEntityInfo.parentId ? 'Select a parent' : getEntityFromId(parseInt(newEntityInfo.parentId), addParents).name}
                    </ModalDropdownButton>}
                <ModalDropdownContentContainer show={showAddParentSelect ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredParents}
                        inputName='parent_entity_search'
                        inputPlaceholder='Search for parent name'
                        inputRef={searchParentTerm}
                        originalArray={addParents}
                        term={searchParentTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredParents, handleSelectParentChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.entityParent}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddParentSelect
