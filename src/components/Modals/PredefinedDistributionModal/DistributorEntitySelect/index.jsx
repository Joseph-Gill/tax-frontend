import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {EntityErrorContainer} from '../../styles'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'


const DistributorEntitySelect = ({availableDistributors, entities, error, filteredDistributors,
                                     handleSelectDistributorChange, searchDistributorTerm, setFilteredDistributors,
                                     setShowDistributorDropdown, showDistributorDropdown, targetDistributor}) => {
    return (
        <div>
            <ActiveInputLabel>Distributor</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowDistributorDropdown}
                showDropdownView={showDistributorDropdown}
            >
                <ModalDropdownButton
                    onClick={() => setShowDistributorDropdown(!showDistributorDropdown)}
                >
                    {!targetDistributor ? 'Select a distributor' : getEntityInfo(entities, targetDistributor)}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showDistributorDropdown ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredDistributors}
                        inputName='distributor_entity_search'
                        inputPlaceholder='Search for distributor'
                        inputRef={searchDistributorTerm}
                        originalArray={availableDistributors}
                        term={searchDistributorTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredDistributors, handleSelectDistributorChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.distributor}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default DistributorEntitySelect
