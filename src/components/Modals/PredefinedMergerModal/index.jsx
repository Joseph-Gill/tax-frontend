import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import PredefinedMergerLeft from './PredefinedMergerLeft'
import PredefinedMergerRight from './PredefinedMergerRight'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {areEntitiesSisters, findAllDescendantsOfTargetEntity, getEntityFromId, highlightTagForAddEntity, highlightTagForDeleteEntity, sortedDirectChildrenOfEntity, sortEntitiesByName} from '../../../helpers'
import {CompleteMergerModalContainer} from './styles'


const PredefinedMergerModal = ({countryName, entities, error, legalForm, newEntityInfo, saveNewEntityHandler,
                                   saveMultipleLinksHandler, setCountryName, setEntitiesToRender, setLegalForm,
                                   setNewEntityInfo, setShowPredefinedMerger, showPredefinedMerger}) => {

    const dispatch = useDispatch()
    let searchMergerToEntityTerm = useRef('')
    let searchMergerOfEntityTerm = useRef('')
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
        setShowExpanded(false)
        setMergerInto({...mergerInto, selection: ''})
        setTargetMergerToEntity('')
        findPossibleMergerToEntities(entities, mergerOfId)
        setTargetMergerOfEntity(mergerOfId)
        setShowMergerOfDropdown(false)
    }

    const handleSelectMergerToChange = mergerToId => {
        setShowExpanded(false)
        setMergerInto({
            ...mergerInto,
            newCompanyAvailable: areEntitiesSisters(entities, targetMergerOfEntity, mergerToId),
            selection: ''
        })
        setTargetMergerToEntity(mergerToId)
        setShowMergerToDropdown(false)
    }

    const handleSelectMergerIntoChange = mergerIntoChoice => {
        if (mergerIntoChoice === 'new_company') {
            newEntityInfo.parentId = getEntityFromId(targetMergerOfEntity, entities).pid
        }
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

    const handleSaveButton = async () => {
        // if mergeInto.select === 'new company'
        if (mergerInto.selection === 'new_company') {
            // - Create new Entity with stored info, set newEntityInfo parentId to be pid of targetMergerOfEntity (both have same parent)
            const response = await saveNewEntityHandler()
            if (response.status === 201 || response.status === 200) {
                const responseArray = JSON.parse(response.data.nodes)
                const newCompany = responseArray.find(entity => entity.name === newEntityInfo.entityName && entity.location === countryName)
                // - Give Add Highlighting to all descendants of targetMergerOf
                findAllDescendantsOfTargetEntity(responseArray, targetMergerOfEntity).forEach(entity => {
                    const entityTag = highlightTagForAddEntity(entity.legal_form)
                    if (entityTag) {
                        entity.tags = [entityTag]
                    }
                })
                // - Give Add Highlight to all descendants of targetMergerTo
                findAllDescendantsOfTargetEntity(responseArray, targetMergerToEntity).forEach(entity => {
                    const entityTag = highlightTagForAddEntity(entity.legal_form)
                    if (entityTag) {
                        entity.tags = [entityTag]
                    }
                })
                // - Change the pid of all children of targetMergerOf to newCompany
                sortedDirectChildrenOfEntity(responseArray, targetMergerOfEntity).forEach(entity => entity.pid = newCompany.id.toString())
                // - Change the pid of all children of targetMergerTo to newCompany
                sortedDirectChildrenOfEntity(responseArray, targetMergerToEntity).forEach(entity => entity.pid = newCompany.id.toString())
                // - Remove targetMergerOf Entity (gets Delete Highlighted)
                // - Remove targetMergerTo Entity (gets Delete Highlighted)
                responseArray.forEach(entity => {
                    if (parseInt(entity.id) === parseInt(targetMergerToEntity) || parseInt(entity.id) === parseInt(targetMergerOfEntity)) {
                        entity.tags = [highlightTagForDeleteEntity(entity.legal_form)]
                        entity.remove = true
                    }
                })
                setEntitiesToRender([...responseArray])
                // - Create red CLink from targetMergerOf to newCompany with label "Merger"
                // - Create red CLink from targetMergerTo to newCompany with label "Merger"
                const mergerLinks = [{
                    from: targetMergerOfEntity,
                    to: newCompany.id,
                    type: 'clink',
                    label: 'Merger',
                    color: 'orange'
                },
                {
                    from: targetMergerToEntity,
                    to: newCompany.id,
                    type: 'clink',
                    label: 'Merger',
                    color: 'orange'
                }]
                saveMultipleLinksHandler(mergerLinks, responseArray)
            }
        // else - it is a merger into targetMergerOf or targetMergerTo
        } else {
            return false
        }
        setShowPredefinedMerger(false)
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
