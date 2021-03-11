import React from 'react'
import {ActiveInputLabel} from '../../../../../style/labels'
import EntityNameSearchInput from './EntityNameSearchInput'
import DropdownInternalContainer from '../../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo} from '../../../../../helpers'
import {ErrorMessage} from '../../../../../style/messages'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../../styles'


const EntityNameDropdown = ({entities, error, filteredEntities, handleFilterEntities, handleResetFilterEntities, label, searchEntityTerm,
                                setKey, setFilteredEntities, setShowEditLinkSelect, setTargetLink, showEditLinkSelect, targetLink}) => {

    const handleLinkEntityInputPressEnter = e => {
        if (e.key === 'Enter') {
            handleFilterEntities(filteredEntities, setFilteredEntities, searchEntityTerm)
        }
    }

    const handleLinkEntitySelect = entityId => {
        setTargetLink({...targetLink, [setKey]: entityId})
        setShowEditLinkSelect(false)
    }

    return (
        <div>
            <ActiveInputLabel
                disabled={!targetLink.linkSelected}
            >
                {label}
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowEditLinkSelect}
                showDropdownView={showEditLinkSelect}
            >
                <ModalDropdownButton
                    disabled={!targetLink.linkSelected}
                    onClick={() => setShowEditLinkSelect(!showEditLinkSelect)}
                >
                    {!targetLink.linkSelected ? 'Select an entity' : `${getEntityInfo(entities, targetLink[setKey])}`}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showEditLinkSelect ? 1 : 0}>
                    <EntityNameSearchInput
                        filteredEntities={filteredEntities}
                        handleFilterEntities={handleFilterEntities}
                        handleLinkEntityInputPressEnter={handleLinkEntityInputPressEnter}
                        handleResetFilterEntities={handleResetFilterEntities}
                        searchEntityTerm={searchEntityTerm}
                        setFilteredEntities={setFilteredEntities}
                    />
                    {filteredEntities.length ?
                        filteredEntities.map(entity => (
                            // Prevents showing entities that are only on the Step Chart from "Delete" highlighting
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={entity.id}
                                    onClick={() => handleLinkEntitySelect(entity.id)}
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

export default EntityNameDropdown
