import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import styled from 'styled-components/macro'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import RecipientEntitySelect from './RecipientEntitySelect'
import ContributeAssetsSelect from './ContributeAssetsSelect'
import ContributorEntitySelect from './ContributorEntitySelect'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ContributionIssuanceSelect from './ContributionIssuanceSelect'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getParentFromId, sortEntitiesByName} from '../../../helpers'
import {PredefinedModalInternalContainer} from '../styles'


const ParticipationOtherAssetsInputPlaceholder = styled.div`
    height: 42px;
    width: 302px;
`


const PredefinedContributionModal = ({entities, error, setShowPredefinedContribution, showPredefinedContribution}) => {

    let searchContributorTerm = useRef('')
    let searchRecipientTerm = useRef('')
    const dispatch = useDispatch()
    const [showContributorDropdown, setShowContributorDropdown] = useState(false)
    const [showRecipientDropdown, setShowRecipientDropdown] = useState(false)
    const [showAssetsDropdown, setShowAssetsDropdown] = useState(false)
    const [filteredContributors, setFilteredContributors] = useState([])
    const [availableRecipients, setAvailableRecipients] = useState([])
    const [filteredRecipients, setFilteredRecipients] = useState([])
    const [targetContributor, setTargetContributor] = useState('')
    const [targetRecipient, setTargetRecipient] = useState('')
    const [contributedAssets, setContributedAssets] = useState('')
    const [issuanceNewShares, setIssuanceNewShares] = useState(false)

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

    const handleSelectAssetsContributedChange = assetType => {
        setContributedAssets(assetType)
        setShowAssetsDropdown(false)
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
                <PredefinedModalInternalContainer>
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
                        error={error}
                        filteredRecipients={filteredRecipients}
                        handleSelectRecipientChange={handleSelectRecipientChange}
                        searchRecipientTerm={searchRecipientTerm}
                        setFilteredRecipients={setFilteredRecipients}
                        setShowRecipientDropdown={setShowRecipientDropdown}
                        showRecipientDropdown={showRecipientDropdown}
                        targetContributor={targetContributor}
                        targetRecipient={targetRecipient}
                    />
                    <ContributeAssetsSelect
                        contributedAssets={contributedAssets}
                        error={error}
                        handleSelectAssetsContributedChange={handleSelectAssetsContributedChange}
                        setShowAssetsDropdown={setShowAssetsDropdown}
                        showAssetsDropdown={showAssetsDropdown}
                        targetContributor={targetContributor}
                    />
                    <ContributionIssuanceSelect
                        issuanceNewShares={issuanceNewShares}
                        setIssuanceNewShares={setIssuanceNewShares}
                    />
                    <ParticipationOtherAssetsInputPlaceholder />
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedContributionModal
