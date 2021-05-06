import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import PredefinedMergerLeft from './PredefinedMergerLeft'
import PredefinedMergerRight from './PredefinedMergerRight'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {
    areEntitiesSisters, entityInputErrorHandler, findAllDescendantsOfTargetEntity, getEntityFromId, getEntityParentFromEntityId, highlightTagForAddEntity,
    highlightTagForDeleteEntity, sortedDirectChildrenOfEntity, sortEntitiesByName
} from '../../../helpers'
import {CompleteMergerModalContainer} from './styles'
import {ModalDropdownContent} from '../../Dropdowns/styles'


const PredefinedMergerModal = ({availableParentNames, countryName, entities, error, legalForm, newEntityInfo, removeEntityHandler,
                                   saveNewEntityHandler, saveMultipleLinksHandler, saveNewLinkHandler, setCountryName, setEntitiesToRender,
                                   setLegalForm, setNewEntityInfo, setShowPredefinedMerger, showPredefinedMerger}) => {

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
                } else if (parseInt(entity.pid) === parseInt(targetEntity.pid) && parseInt(entity.id) !== parseInt(targetEntity.id)) {
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

    // Used in PredefinedMergerLeft to decide what available merger choices the user can choose from
    const renderMergerIntoChoices = () => {
        const mergerOfEntity = getEntityFromId(targetMergerOfEntity, entities)
        const mergerToEntity = getEntityFromId(targetMergerToEntity, entities)
        if (!mergerOfEntity.pid || mergerOfEntity.pid === 'Ultimate') {
            return (
                <ModalDropdownContent
                    onClick={() => handleSelectMergerIntoChange(targetMergerOfEntity)}
                >
                    <span>{`${mergerOfEntity.name} (${mergerOfEntity.location})`}</span>
                </ModalDropdownContent>
            )
        } else if (!mergerToEntity.pid || mergerToEntity.pid === 'Ultimate') {
            return (
                <ModalDropdownContent
                    onClick={() => handleSelectMergerIntoChange(targetMergerToEntity)}
                >
                    <span>{`${mergerToEntity.name} (${mergerToEntity.location})`}</span>
                </ModalDropdownContent>
            )
        } else {
            return (
                <>
                    <ModalDropdownContent
                        onClick={() => handleSelectMergerIntoChange(targetMergerOfEntity)}
                    >
                        <span>{`${mergerOfEntity.name} (${mergerOfEntity.location})`}</span>
                    </ModalDropdownContent>
                    <ModalDropdownContent
                        onClick={() => handleSelectMergerIntoChange(targetMergerToEntity)}
                    >
                        <span>{`${mergerToEntity.name} (${mergerToEntity.location})`}</span>
                    </ModalDropdownContent>
                    {mergerInto.newCompanyAvailable &&
                        <ModalDropdownContent
                            onClick={() => handleSelectMergerIntoChange('new_company')}
                        >
                            <span>New Company</span>
                        </ModalDropdownContent>}
                </>
            )
        }
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

    const mergerModalErrorHandler = () => {
        if (!targetMergerOfEntity) {
            dispatch(setError({mergerFromEntity: 'You must choose an entity to merger from.'}))
            return true
        } else if (!targetMergerToEntity) {
            dispatch(setError({mergerToEntity: 'You must choose an entity to merger to.'}))
            return true
        } else if (!mergerInto.selection) {
            dispatch(setError({mergerInto: 'You must choose a format for the merger.'}))
            return true
        } else {
            return false
        }
    }

    // Used to store the id of an entity and keyword for the second half of the action created with entity histories
    const createAffectedChildrenArray = array => {
        const result = []
        array.forEach(entity => {
            result.push({
                id: parseInt(entity.id),
                keyword: 'parent'
            })
        })
        return result
    }

    // Used to store the id of an entity and keyword for the second half of the action created with entity histories
    const createAffectedEntity = (id, keyword) => {
        return {
            id,
            keyword,
        }
    }

    const handleSaveButton = async () => {
        dispatch(resetErrors())
        //Handles input validation for merger modal
        //Only validates the right half of the modal inputs through entityInputErrorHandler if it is active with new company selection
        const error = mergerModalErrorHandler() || mergerInto.selection === 'new_company' ? entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm, true) : false
        if (!error) {
            if (mergerInto.selection === 'new_company') {
                // Get all direct children of the merging companies to create entity histories for them
                const directChildrenMergerOfEntity = sortedDirectChildrenOfEntity(entities, targetMergerOfEntity)
                const directChildrenMergerToEntity = sortedDirectChildrenOfEntity(entities, targetMergerToEntity)
                // Get the parent of one entity, for a new company they both have the same parent, only one history is needed
                const parentMergerOfEntity = getEntityParentFromEntityId(targetMergerOfEntity, entities)
                // Create the array of entities affected by the merger for logging into entity histories
                const entitiesAffected = createAffectedChildrenArray(directChildrenMergerOfEntity)
                    .concat(createAffectedChildrenArray(directChildrenMergerToEntity))
                entitiesAffected.push(createAffectedEntity(parentMergerOfEntity.id, 'children_new_company'))
                entitiesAffected.push(createAffectedEntity(parseInt(targetMergerOfEntity), 'original_company'))
                entitiesAffected.push(createAffectedEntity(parseInt(targetMergerToEntity), 'original_company'))
                // Trigger the saveNewEntityHandler, creating the new company, updating the chart, and creating the entity histories
                const response = await saveNewEntityHandler('merger', entitiesAffected)
                if (response.status === 201 || response.status === 200) {
                    //Access the returned array of entities
                    const responseArray = JSON.parse(response.data.nodes)
                    //Find the new company within the array of entities
                    const newCompany = responseArray.find(entity => entity.name === newEntityInfo.entityName && entity.location === countryName)
                    //Highlight all descendants of the mergerOf entity with add highlighting
                    findAllDescendantsOfTargetEntity(responseArray, targetMergerOfEntity).forEach(entity => {
                        const entityTag = highlightTagForAddEntity(entity.legal_form)
                        if (entityTag) {
                            entity.tags = [entityTag]
                        }
                    })
                    //Highlight all descendants of the mergerTo entity with add highlighting
                    findAllDescendantsOfTargetEntity(responseArray, targetMergerToEntity).forEach(entity => {
                        const entityTag = highlightTagForAddEntity(entity.legal_form)
                        if (entityTag) {
                            entity.tags = [entityTag]
                        }
                    })
                    //Change the parent of all direct children of mergerOf entity to the new company
                    sortedDirectChildrenOfEntity(responseArray, targetMergerOfEntity).forEach(entity => entity.pid = newCompany.id.toString())
                    //Change the parent of all direct children of mergerTo entity to the new company
                    sortedDirectChildrenOfEntity(responseArray, targetMergerToEntity).forEach(entity => entity.pid = newCompany.id.toString())
                    //Highlight both mergerOf entity and mergerTo entity with delete highlighting
                    responseArray.forEach(entity => {
                        if (parseInt(entity.id) === parseInt(targetMergerToEntity) || parseInt(entity.id) === parseInt(targetMergerOfEntity)) {
                            entity.tags = [highlightTagForDeleteEntity(entity.legal_form)]
                            entity.remove = true
                        }
                    })
                    //Set the modified array of entities into local state
                    setEntitiesToRender([...responseArray])
                    //Create the CLinks that link from the deleted entities to the new company
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
                    //Save the CLinks
                    saveMultipleLinksHandler(mergerLinks, responseArray)
                }
            } else {
                // Figure out which entity is being deleted and which is being merged into
                let deletedEntity, mergedEntity;
                if (parseInt(targetMergerOfEntity) === parseInt(mergerInto.selection)) {
                    deletedEntity = getEntityFromId(targetMergerToEntity, entities)
                    mergedEntity = getEntityFromId(targetMergerOfEntity, entities)
                } else {
                    deletedEntity = getEntityFromId(targetMergerOfEntity, entities)
                    mergedEntity = getEntityFromId(targetMergerToEntity, entities)
                }

                // Need to log
                // 1) merged entity is primary history, it gets merger
                // 2) deleted entity gets merger_absorbed
                // 3) parent of merged gets merger_child_merged
                // 4) parent of deleted gets merger_child_removed
                // 5) child of deleted_gets_merger_parent_changed




                //Change the deleted entity to have delete highlighting and remove = true
                const response = await removeEntityHandler(entities, deletedEntity.id)
                if (response.status === 201 || response.status === 200) {
                    //Access the returned array of entities
                    const responseArray = JSON.parse(response.data.nodes)
                    //Check if the parent of merged entity needs to be changed, this happens if the merged entity is a child of the deleted entity
                    if (parseInt(mergedEntity.pid) === parseInt(deletedEntity.id)) {
                        const targetEntityIndex = responseArray.findIndex(entity => parseInt(mergedEntity.id) === parseInt(entity.id))
                        responseArray[targetEntityIndex].pid = deletedEntity.pid
                    }
                    //Change the descendants of deleted entity to be the descendants of the merged entity, give them all add highlighting
                    findAllDescendantsOfTargetEntity(responseArray, deletedEntity.id).forEach(entity => {
                        const entityTag = highlightTagForAddEntity(entity.legal_form)
                        if (entityTag) {
                            entity.tags = [entityTag]
                        }
                    })
                    sortedDirectChildrenOfEntity(responseArray, deletedEntity.id).forEach(entity => entity.pid = mergedEntity.id)
                    //Set the modified array of entities into local state
                    setEntitiesToRender([...responseArray])
                    //Create a CLink between deleted entity and kept entity with label merger
                    const mergerLink = {
                        from: deletedEntity.id,
                        to: mergedEntity.id,
                        type: 'clink',
                        label: 'Merger',
                        color: 'orange'
                    }
                    saveNewLinkHandler(mergerLink, responseArray, true)
                }
            }
            setShowPredefinedMerger(false)
        }
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
                        handleSelectMergerOfChange={handleSelectMergerOfChange}
                        handleSelectMergerToChange={handleSelectMergerToChange}
                        mergerInto={mergerInto}
                        renderMergerIntoChoices={renderMergerIntoChoices}
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
