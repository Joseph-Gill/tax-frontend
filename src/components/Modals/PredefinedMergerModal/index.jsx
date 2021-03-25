import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import PredefinedMergerLeft from './PredefinedMergerLeft'
import PredefinedMergerRight from './PredefinedMergerRight'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {areEntitiesSisters, getEntityFromId, sortEntitiesByName} from '../../../helpers'
import {CompleteMergerModalContainer} from './styles'


const PredefinedMergerModal = ({countryName, entities, error, legalForm, newEntityInfo, setCountryName,
                                   setLegalForm, setNewEntityInfo, setShowPredefinedMerger,
                                   showPredefinedMerger}) => {

    let searchMergerOfEntityTerm = useRef('')
    let searchMergerToEntityTerm = useRef('')
    const dispatch = useDispatch()
    const [showMergerOfDropdown, setShowMergerOfDropdown] = useState(false)
    const [showMergerToDropdown, setShowMergerToDropdown] = useState(false)
    const [showMergerIntoDropdown, setShowMergerIntoDropdown] = useState(false)
    const [showNewCompanyLegalForm, setShowNewCompanyLegalForm] = useState(false)
    // Used to render the merger of entities to add, array is filtered by the search input
    const [filteredMergerOfEntities, setFilteredMergerOfEntities] = useState([])
    // Used to render the merger to entities to add, array is filtered by the search input
    const [filteredMergerToEntities, setFilteredMergerToEntities] = useState([])
    // Used to contain a list of available merger to entities during adding that can be rolled back to when resetting the filter
    const [availableMergerToEntities, setAvailableMergerToEntities] = useState([])
    const [targetMergerOfEntity, setTargetMergerOfEntity] = useState('')
    const [targetMergerToEntity, setTargetMergerToEntity] = useState('')
    const [showExpanded, setShowExpanded] = useState(false)
    const [mergerInto, setMergerInto] = useState({
        companyOf: false,
        companyTo: false,
        newCompanyAvailable: false,
        selection: ''
    })

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredMergerOfEntities([...result])
    }, [entities])

    //Used to filter a list of entities for all entities that are:
    const findPossibleMergerToEntities = (arrayOfEntities, mergerOfId) => {
        const targetEntity = getEntityFromId(mergerOfId, entities)
        const result = arrayOfEntities.filter(entity => {
            // Remove delete highlight entities
            if (!entity.remove) {
                // Direct parent of targetMergerOfEntity
                if (parseInt(entity.id) === parseInt(targetEntity.pid)) {
                    return true
                // Sister entities of targetMergerOfEntity
                } else if (parseInt(entity.pid) === parseInt(targetEntity.pid)) {
                    return true
                // Direct children of targetMergerOfEntity
                } else {
                    return parseInt(entity.pid) === parseInt(targetEntity.id);
                }
            } else {
                return false
            }
        })
        setAvailableMergerToEntities([...result])
        setFilteredMergerToEntities([...result])
    }

    const handleSelectMergerOfChange = mergerOfId => {
        setTargetMergerToEntity('')
        findPossibleMergerToEntities(entities, mergerOfId)
        setTargetMergerOfEntity(mergerOfId)
        setShowMergerOfDropdown(false)
    }

    const handleSelectMergerToChange = mergerToId => {
        setMergerInto({...mergerInto, newCompanyAvailable: areEntitiesSisters(entities, targetMergerOfEntity, mergerToId)})
        setTargetMergerToEntity(mergerToId)
        setShowMergerToDropdown(false)
    }

    const handleSelectMergerIntoChange = mergerIntoChoice => {
        setShowExpanded(mergerIntoChoice === 'new_company')
        setMergerInto({...mergerInto, selection: mergerIntoChoice})
        setShowMergerIntoDropdown(false)
    }

    const handleCancelButton = () => {
        setNewEntityInfo({
            entityName: '',
            parentId: '',
            taxRate: ''
        })
        setLegalForm('')
        setCountryName('')
        dispatch(resetErrors())
        setShowPredefinedMerger(false)
    }

    const handleSaveButton = () => {

    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedMerger}
            showModalView={showPredefinedMerger}
        >
            <Draggable>
                <CompleteMergerModalContainer expanded={showExpanded ? 1 : 0}>
                    <PredefinedMergerLeft
                        availableMergerToEntities={availableMergerToEntities}
                        entities={entities}
                        error={error}
                        filteredMergerOfEntities={filteredMergerOfEntities}
                        filteredMergerToEntities={filteredMergerToEntities}
                        handleCancelButton={handleCancelButton}
                        handleSaveButton={handleSaveButton}
                        handleSelectMergerIntoChange={handleSelectMergerIntoChange}
                        handleSelectMergerOfChange={handleSelectMergerOfChange}
                        handleSelectMergerToChange={handleSelectMergerToChange}
                        mergerInto={mergerInto}
                        searchMergerOfEntityTerm={searchMergerOfEntityTerm}
                        searchMergerToEntityTerm={searchMergerToEntityTerm}
                        setFilteredMergerOfEntities={setFilteredMergerOfEntities}
                        setFilteredMergerToEntities={setFilteredMergerToEntities}
                        setShowMergerIntoDropdown={setShowMergerIntoDropdown}
                        setShowMergerOfDropdown={setShowMergerOfDropdown}
                        setShowMergerToDropdown={setShowMergerToDropdown}
                        setShowPredefinedMerger={setShowPredefinedMerger}
                        showMergerIntoDropdown={showMergerIntoDropdown}
                        showMergerOfDropdown={showMergerOfDropdown}
                        showMergerToDropdown={showMergerToDropdown}
                        targetMergerOfEntity={targetMergerOfEntity}
                        targetMergerToEntity={targetMergerToEntity}
                    />
                    <PredefinedMergerRight
                        countryName={countryName}
                        error={error}
                        legalForm={legalForm}
                        newEntityInfo={newEntityInfo}
                        setCountryName={setCountryName}
                        setLegalForm={setLegalForm}
                        setNewEntityInfo={setNewEntityInfo}
                        setShowNewCompanyLegalForm={setShowNewCompanyLegalForm}
                        showExpanded={showExpanded}
                        showNewCompanyLegalForm={showNewCompanyLegalForm}
                    />
                </CompleteMergerModalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedMergerModal
