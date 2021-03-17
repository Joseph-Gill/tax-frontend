import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import styled from 'styled-components/macro'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityInfo, handleFilterEntities, sortEntitiesByName} from '../../../helpers'
import {AddDeleteModalInternalContainer} from '../styles'
import {ActiveInputLabel} from '../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../Dropdowns/styles'





const PredefinedContributionModal = ({entities, setShowPredefinedContribution, showPredefinedContribution}) => {

    let searchContributorTerm = useRef('')
    const dispatch = useDispatch()
    const [showContributorDropdown, setShowContributorDropdown] = useState(false)
    const [filteredContributors, setFilteredContributors] = useState([])
    const [targetContributor, setTargetContributor] = useState('')

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredContributors([...result])
    }, [entities])

    const handleSelectContributorChange = contributorId => {
        setTargetContributor(contributorId)
        setShowContributorDropdown(false)
    }

    const handleSelectContributorInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleFilterEntities(entities, setFilteredContributors, searchContributorTerm)
        }
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedContribution(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedContribution}
            showModalView={showPredefinedContribution}
        >
            <Draggable>
                <AddDeleteModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedContribution} />
                    <ModalTitle title='Contribution Step' />
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
                    </div>
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </AddDeleteModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedContributionModal
