import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityInfo, renderEntitiesForModalDropdowns, sortEntitiesByName} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityErrorContainer, PredefinedModalInternalContainer} from '../styles'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../Dropdowns/styles'

const PredefinedDistributionModal = ({entities, error, setShowPredefinedDistribution, showPredefinedDistribution}) => {

    let searchDistributorTerm = useRef('')
    const dispatch = useDispatch()
    const [showDistributorDropdown, setShowDistributorDropdown] = useState(false)
    const [filteredDistributors, setFilteredDistributors] = useState([])
    const [availableRecipients, setAvailableRecipients] = useState([])
    const [availableDistributors, setAvailableDistributors] = useState([])
    const [targetDistributor, setTargetDistributor] = useState('')
    const [targetRecipient, setTargetRecipient] = useState('')

    useEffect(() => {
        const result = sortEntitiesByName(entities.filter(entity => entity.pid && entity.pid !== 'Ultimate'))
        setAvailableDistributors([...result])
        setFilteredDistributors([...result])
    }, [entities])

    //Used to filter a list of entities for the entity that is the direct parent of the distributor
    const findPossibleRecipient = (arrayOfEntities, distributorId) => {
        const targetDistributor = entities.find(entity => parseInt(entity.id) === parseInt(distributorId))
        const result = entities.filter(entity => parseInt(entity.id) === parseInt(targetDistributor.pid))
        setAvailableRecipients([...result])
    }

    const handleSelectDistributorChange = distributorId => {
        setTargetRecipient('')
        findPossibleRecipient(entities, distributorId)
        setTargetDistributor(distributorId)
        setShowDistributorDropdown(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedDistribution(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedDistribution}
            showModalView={showPredefinedDistribution}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedDistribution} />
                    <ModalTitle title='Distribution Step' />
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
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedDistributionModal
