import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import styled from 'styled-components/macro'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ContributorEntitySelect from './ContributorEntitySelect'
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
                    <ContributorEntitySelect
                        entities={entities}
                        filteredContributors={filteredContributors}
                        handleSelectContributorChange={handleSelectContributorChange}
                        searchContributorTerm={searchContributorTerm}
                        setFilteredContributors={setFilteredContributors}
                        setShowContributorDropdown={setShowContributorDropdown}
                        showContributorDropdown={showContributorDropdown}
                        targetContributor={targetContributor}
                    />
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </AddDeleteModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedContributionModal
