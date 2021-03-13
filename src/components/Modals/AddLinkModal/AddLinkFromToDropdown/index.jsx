import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, handleFilterEntities} from '../../../../helpers'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'


const AddLinkFromToDropdown = ({addLinkInfo, entities, error, filteredEntities, handleSelectChange, inputName, inputPlaceholder,
                                   inputRef, label, setDropdownView, setKey, setFilteredEntities,
                                   showDropdownView}) => {

    const handleSelectLinkToFromInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntities(entities, setFilteredEntities, inputRef)
        }
    }

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
                        arrayToFilter={filteredEntities}
                        filterStateSet={setFilteredEntities}
                        handleKeyPress={handleSelectLinkToFromInputPressEnter}
                        inputName={inputName}
                        inputPlaceholder={inputPlaceholder}
                        inputRef={inputRef}
                        originalArray={entities}
                        term={inputRef}
                    />
                    {filteredEntities.length ?
                        filteredEntities.map(entity => (
                            // Prevents showing entities that are only on the Step Chart from "Delete" highlighting
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={entity.id}
                                    onClick={() => handleSelectChange(entity.id)}
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
                {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default AddLinkFromToDropdown
