import React from 'react'
import {ActiveInputLabel, TextActiveInputLabel} from '../../../../../style/labels'
import EntityNameSearchInput from './EntityNameSearchInput'
import DropdownInternalContainer from '../../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, handleFilterEntities, renderEntitiesForModalDropdowns} from '../../../../../helpers'
import {ErrorMessage} from '../../../../../style/messages'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../../styles'
import {EditLinkModalDropdownButton} from '../../styles'


const EntityNameDropdown = ({entities, error, filteredEntities, label, rightLink, searchEntityTerm,
                                setKey, setFilteredEntities, setShowEditLinkSelect, setTargetLink, showEditLinkSelect, targetLink}) => {

    const handleLinkEntityInputPressEnter = e => {
        if (e.key === 'Enter') {
            handleFilterEntities(entities, setFilteredEntities, searchEntityTerm)
        }
    }

    const handleLinkEntitySelect = entityId => {
        setTargetLink({...targetLink, [setKey]: entityId})
        setShowEditLinkSelect(false)
    }

    return (
        <div>
            {!rightLink ? (
                <ActiveInputLabel
                    disabled={!targetLink.linkSelected}
                >
                    {label}
                </ActiveInputLabel>) : (
                    <TextActiveInputLabel
                        disabled={!targetLink.linkSelected}
                    >
                        {label}
                    </TextActiveInputLabel>)}
            <DropdownInternalContainer
                setDropdownView={setShowEditLinkSelect}
                showDropdownView={showEditLinkSelect}
            >
                {!rightLink ? (
                    <ModalDropdownButton
                        disabled={!targetLink.linkSelected}
                        onClick={() => setShowEditLinkSelect(!showEditLinkSelect)}
                    >
                        {!targetLink.linkSelected ? 'Select an entity' : `${getEntityInfo(entities, targetLink[setKey])}`}
                    </ModalDropdownButton>) : (
                        <EditLinkModalDropdownButton
                            disabled={!targetLink.linkSelected}
                            onClick={() => setShowEditLinkSelect(!showEditLinkSelect)}
                        >
                            {!targetLink.linkSelected ? 'Select an entity' : `${getEntityInfo(entities, targetLink[setKey])}`}
                        </EditLinkModalDropdownButton>)}
                <ModalDropdownContentContainer show={showEditLinkSelect ? 1 : 0}>
                    <EntityNameSearchInput
                        entities={entities}
                        filteredEntities={filteredEntities}
                        handleLinkEntityInputPressEnter={handleLinkEntityInputPressEnter}
                        searchEntityTerm={searchEntityTerm}
                        setFilteredEntities={setFilteredEntities}
                    />
                    {renderEntitiesForModalDropdowns(filteredEntities, handleLinkEntitySelect)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.linkFromTo}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default EntityNameDropdown
