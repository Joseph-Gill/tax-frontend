import React from 'react'
import {getEntityInfo, handleFilterEntities} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'


const RecipientEntitySelect = ({availableRecipients, entities, filteredRecipients, handleSelectRecipientChange,
                                   searchRecipientTerm, setFilteredRecipients, setShowRecipientDropdown,
                                   showRecipientDropdown, targetContributor, targetRecipient}) => {

    const handleSelectRecipientInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntities(availableRecipients, setFilteredRecipients, searchRecipientTerm)
        }
    }

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
                        arrayToFilter={filteredRecipients}
                        filterStateSet={setFilteredRecipients}
                        handleKeyPress={handleSelectRecipientInputPressEnter}
                        inputName='recipient_entity_search'
                        inputPlaceholder='Search for recipient'
                        inputRef={searchRecipientTerm}
                        originalArray={availableRecipients}
                        term={searchRecipientTerm}
                    />
                    {filteredRecipients.length ?
                        filteredRecipients.map(entity => (
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={entity.id}
                                    onClick={() => handleSelectRecipientChange(entity.id)}
                                >
                                    <span>{entity.name}</span>
                                    <span>{`(${entity.location})`}</span>
                                </ModalDropdownContent>)) : (
                                    <ModalDropdownContent>
                                        <span>No Entities to display</span>
                                    </ModalDropdownContent>)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
        </div>
    )
}

export default RecipientEntitySelect
