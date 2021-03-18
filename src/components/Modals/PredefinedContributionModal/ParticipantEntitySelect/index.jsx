import React from 'react'
import {ActiveInputLabel} from '../../../../style/labels'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
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
                    {renderEntitiesForModalDropdowns(filteredParticipants, handleSelectParticipantChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.participant}</ErrorMessage>}
            </EntityErrorContainer>
        </FadeInContainer>
    )
}

export default ParticipantEntitySelect
