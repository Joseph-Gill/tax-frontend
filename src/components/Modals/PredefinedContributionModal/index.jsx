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
import {getEntityInfo, getParentFromId, handleFilterEntities, sortEntitiesByName} from '../../../helpers'
import {AddDeleteModalInternalContainer} from '../styles'
import {ActiveInputLabel} from '../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../Dropdowns/styles'
import RecipientEntitySelect from './RecipientEntitySelect'


const PredefinedContributionModal = ({entities, error, setShowPredefinedContribution, showPredefinedContribution}) => {

    let searchContributorTerm = useRef('')
    let searchRecipientTerm = useRef('')
    const dispatch = useDispatch()
    const [showContributorDropdown, setShowContributorDropdown] = useState(false)
    const [showRecipientDropdown, setShowRecipientDropdown] = useState(false)
    const [filteredContributors, setFilteredContributors] = useState([])
    const [availableRecipients, setAvailableRecipients] = useState([])
    const [filteredRecipients, setFilteredRecipients] = useState([])
    const [targetContributor, setTargetContributor] = useState('')
    const [targetRecipient, setTargetRecipient] = useState('')

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredContributors([...result])
    }, [entities])

    const checkIfEntityIsParent = (entityParentId, targetParentId) => {
        return parseInt(entityParentId) === parseInt(targetParentId)
    }

    const findPossibleRecipients = (arrayOfEntities, contributorId) => {
        const recipients = []
        let parentId = ''

        arrayOfEntities.forEach(entity => {
            if (checkIfEntityIsParent(entity.pid, contributorId)) {
                recipients.push(entity)
            } else {
                if (entity.pid) {
                    parentId = entity.pid
                    while (parentId) {
                        const parentEntity = getParentFromId(parentId, entities)
                        if (checkIfEntityIsParent(parentEntity.pid, contributorId)) {
                            recipients.push(entity)
                            break
                        } else {
                            if (parentEntity.pid) {
                                parentId = parentEntity.pid
                            } else {
                                parentId = ''
                            }
                        }
                    }
                }
            }
        })
        setAvailableRecipients([...recipients])
        setFilteredRecipients([...recipients])
    }

    const handleSelectContributorChange = contributorId => {
        findPossibleRecipients(entities, contributorId)
        setTargetContributor(contributorId)
        setShowContributorDropdown(false)
    }

    const handleSelectRecipientChange = recipientId => {
        setTargetRecipient(recipientId)
        setShowRecipientDropdown(false)
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
                        error={error}
                        filteredContributors={filteredContributors}
                        handleSelectContributorChange={handleSelectContributorChange}
                        searchContributorTerm={searchContributorTerm}
                        setFilteredContributors={setFilteredContributors}
                        setShowContributorDropdown={setShowContributorDropdown}
                        showContributorDropdown={showContributorDropdown}
                        targetContributor={targetContributor}
                    />
                    <RecipientEntitySelect
                        availableRecipients={availableRecipients}
                        entities={entities}
                        filteredRecipients={filteredRecipients}
                        handleSelectRecipientChange={handleSelectRecipientChange}
                        searchRecipientTerm={searchRecipientTerm}
                        setFilteredRecipients={setFilteredRecipients}
                        setShowRecipientDropdown={setShowRecipientDropdown}
                        showRecipientDropdown={showRecipientDropdown}
                        targetContributor={targetContributor}
                        targetRecipient={targetRecipient}
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
