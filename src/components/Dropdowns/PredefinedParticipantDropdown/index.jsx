import React from 'react'
import {ActiveInputLabel} from '../../../style/labels'
import ModalDropdownSearchField from '../DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {EntityErrorContainer} from '../../Modals/styles'
import {FadeInContainer} from '../../../style/animations'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../styles'


const PredefinedParticipantDropdown = ({availableParticipants, disabled, entities, error, filteredParticipants, handleSelectParticipantChange,
                                     searchParticipantTerm, setFilteredParticipants, setShowParticipantDropdown,
                                     showParticipantDropdown, targetParticipant}) => {
    return (
        <FadeInContainer>
            <ActiveInputLabel
                disabled={disabled}
            >
                Participant
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowParticipantDropdown}
                showDropdownView={showParticipantDropdown}
            >
                <ModalDropdownButton
                    disabled={disabled}
                    onClick={() => setShowParticipantDropdown(!showParticipantDropdown)}
                >
                    {!targetParticipant ? 'Select a participant' : getEntityInfo(entities, targetParticipant)}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showParticipantDropdown ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredParticipants}
                        inputName='participant_entity_search'
                        inputPlaceholder='Search for participant'
                        inputRef={searchParticipantTerm}
                        originalArray={availableParticipants}
                        term={searchParticipantTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredParticipants, handleSelectParticipantChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.participant}</ErrorMessage>}
            </EntityErrorContainer>
        </FadeInContainer>
    )
}

export default PredefinedParticipantDropdown
