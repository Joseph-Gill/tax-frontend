import React from 'react'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'


const RecipientEntitySelect = ({availableRecipients, entities, error, filteredRecipients, handleSelectRecipientChange,
                                   searchRecipientTerm, setFilteredRecipients, setShowRecipientDropdown,
                                   showRecipientDropdown, targetContributor, targetRecipient}) => {

    return (
        <div>
            <ActiveInputLabel
                disabled={!targetContributor}
            >
                Recipient
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowRecipientDropdown}
                showDropdownView={showRecipientDropdown}
            >
                <ModalDropdownButton
                    disabled={!targetContributor}
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

export default RecipientEntitySelect
