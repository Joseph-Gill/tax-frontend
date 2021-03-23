import React from 'react'
import {ActiveInputLabel} from '../../../style/labels'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../styles'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../helpers'
import ModalDropdownSearchField from '../DropdownComponents/ModalDropdownSearchField'
import {EntityErrorContainer} from '../../Modals/styles'
import {ErrorMessage} from '../../../style/messages'


const PredefinedRecipientDropdown = ({availableRecipients, disabled, entities, error, filteredRecipients, handleSelectRecipientChange,
                                   searchRecipientTerm, setFilteredRecipients, setShowRecipientDropdown,
                                   showRecipientDropdown, targetRecipient}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={disabled}
            >
                Recipient
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowRecipientDropdown}
                showDropdownView={showRecipientDropdown}
            >
                <ModalDropdownButton
                    disabled={disabled}
                    onClick={() => setShowRecipientDropdown(!showRecipientDropdown)}
                >
                    {!targetRecipient ? 'Select a recipient' : getEntityInfo(entities, targetRecipient)}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showRecipientDropdown ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredRecipients}
                        inputName='recipient_entity_search'
                        inputPlaceholder='Search for recipient'
                        inputRef={searchRecipientTerm}
                        originalArray={availableRecipients}
                        term={searchRecipientTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredRecipients, handleSelectRecipientChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.recipient}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default PredefinedRecipientDropdown
