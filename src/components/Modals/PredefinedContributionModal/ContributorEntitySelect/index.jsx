import React from 'react'
import {ActiveInputLabel} from '../../../../style/labels'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {getEntityInfo, handleFilterEntities} from '../../../../helpers'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'


const ContributorEntitySelect = ({entities, error, filteredContributors, handleSelectContributorChange, searchContributorTerm,
                                     setFilteredContributors, setShowContributorDropdown, showContributorDropdown, targetContributor }) => {

    const handleSelectContributorInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntities(entities, setFilteredContributors, searchContributorTerm)
        }
    }

    return (
        <div>
            <ActiveInputLabel>Contributor</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowContributorDropdown}
                showDropdownView={showContributorDropdown}
            >
                <ModalDropdownButton
                    onClick={() => setShowContributorDropdown(!showContributorDropdown)}
                >
                    {!targetContributor ? 'Select a contributor' : getEntityInfo(entities, targetContributor)}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showContributorDropdown ? 1 : 0}>
                    <ModalDropdownSearchField
                        arrayToFilter={filteredContributors}
                        filterStateSet={setFilteredContributors}
                        handleKeyPress={handleSelectContributorInputPressEnter}
                        inputName='contributor_entity_search'
                        inputPlaceholder='Search for contributor'
                        inputRef={searchContributorTerm}
                        originalArray={entities}
                        term={searchContributorTerm}
                    />
                    {filteredContributors.length ?
                        filteredContributors.map(entity => (
                            !entity.remove &&
                                <ModalDropdownContent
                                    key={entity.id}
                                    onClick={() => handleSelectContributorChange(entity.id)}
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
                {error && <ErrorMessage>{error.entitySelect}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default ContributorEntitySelect
