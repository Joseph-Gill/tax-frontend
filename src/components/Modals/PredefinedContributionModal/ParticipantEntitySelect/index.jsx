import React from 'react'
import {ActiveInputLabel} from '../../../../style/labels'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {getEntityInfo} from '../../../../helpers'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {FadeInContainer} from '../../../../style/animations'


const ParticipantEntitySelect = ({availableParticipants, entities, error, filteredParticipants, handleSelectParticipantChange,
                                     searchParticipantTerm, setFilteredParticipants, setShowParticipantDropdown,
                                     showParticipantDropdown, targetParticipant, targetRecipient}) => {

    return (
        <FadeInContainer>
            <ActiveInputLabel
                disabled={!targetRecipient}
            >
                Participant
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowParticipantDropdown}
                showDropdownView={showParticipantDropdown}
            >
                <ModalDropdownButton
                    disabled={!targetRecipient}
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
                    {filteredParticipants.length ?
                        filteredParticipants.map(entity => (
                            // Prevents showing entities that are only on the Step Chart from "Delete" highlighting
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={entity.id}
                                    onClick={() => handleSelectParticipantChange(entity.id)}
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
                {error && <ErrorMessage>{error.participant}</ErrorMessage>}
            </EntityErrorContainer>
        </FadeInContainer>
    )
}

export default ParticipantEntitySelect
