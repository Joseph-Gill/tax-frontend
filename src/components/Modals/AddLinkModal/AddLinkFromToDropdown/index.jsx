import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const AddLinkFromToDropdown = ({addLinkInfo, entities, error, filteredEntities, handleSelectChange, inputName, inputPlaceholder,
                                   inputRef, label, setDropdownView, setKey, setFilteredEntities,
                                   showDropdownView}) => {

    return (
        <div>
            <ActiveInputLabel>{label}</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setDropdownView}
                showDropdownView={showDropdownView}
            >
                <ModalDropdownButton
                    onClick={() => setDropdownView(!showDropdownView)}
                >
                    {!addLinkInfo[setKey] ? 'Select an entity' : getEntityInfo(entities, addLinkInfo[setKey])}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showDropdownView ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredEntities}
                        inputName={inputName}
                        inputPlaceholder={inputPlaceholder}
                        inputRef={inputRef}
                        originalArray={entities}
                        term={inputRef}
                    />
                    {renderEntitiesForModalDropdowns(filteredEntities, handleSelectChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLinkFromToDropdown
