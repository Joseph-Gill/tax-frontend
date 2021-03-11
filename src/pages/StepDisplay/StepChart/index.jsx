import React, {useEffect, useMemo, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import AddLinkModal from '../../../components/Modals/AddLinkModal'
import CurrentOrgChartV2 from '../../../components/CurrentOrgChartV2'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import RemoveLinkModal from '../../../components/Modals/RemoveLinkModal'
import RemoveEntityModal from '../../../components/Modals/RemoveEntityModal'
import EditEntityModal from '../../../components/Modals/EditEntityModal'
import EditLinkModal from '../../../components/Modals/EditLinkModal'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {addLegalFormTag, createAvailableParentNamesWithoutDeletes, createUpdateStepChart, editEntityInputErrorHandler, editLinkDifferentType,
    editLinkSameType, entityInputErrorHandler, getEntitiesWithTags, highlightTagForAddEntity, highlightTagForDeleteEntity,
    linkInputErrorHandler} from '../../../helpers'
import {DropdownOption, EntityOption} from '../../../style/options'
import {StepChartAndButtonsContainer} from './styles'
import {NoChartToDisplay} from '../../../style/containers'


const StepChart = ({clinks, entities, indexOfStepToDisplay, project, setClinks, setShowAddEntity, setShowEditEntity,
                       setShowEditLink, setShowAddLink, setShowRemoveEntity, setShowRemoveLink, setSlinks,
                       showAddEntity, showAddLink, showEditEntity, showEditLink, showRemoveEntity, showRemoveLink,
                       slinks, stepChartExists, steps}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [entitiesToRender, setEntitiesToRender] = useState([])
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [countryName, setCountryName] = useState('')
    const [legalForm, setLegalForm] = useState('')
    const [linkToRemove, setLinkToRemove] = useState('')
    const [entityToRemove, setEntityToRemove] = useState('')
    const [addLinkInfo, setAddLinkInfo] = useState({
        from: '',
        to: '',
        type: '',
        label: '',
        color: ''
    })
    const [newEntityInfo, setNewEntityInfo] = useState({
        entityName: '',
        parentId: '',
        taxRate: ''
    })

    useEffect(() => {
        //Set each entity with its appropriate tag to show it with the appropriate org chart template
        setEntitiesToRender([...getEntitiesWithTags(entities, stepChartExists)])
        //Creates an array of available Parent names/locations/ids for the user to choose from when adding / editing
        setAvailableParentNames(createAvailableParentNamesWithoutDeletes(entities))
    }, [entities, stepChartExists])

    //Used to create the list of available parents to choose from in AddEntityModal parent selector
    const renderParentNameOptions = useMemo(() => (
        <>
            <EntityOption disabled value=''>Select a parent</EntityOption>
            {availableParentNames.map(parent => (
                <EntityOption
                    key={uuidv4()}
                    value={parent.id}
                >{`${parent.name} (${parent.location})`}
                </EntityOption>
            ))}
        </>), [availableParentNames])

    //Renders the appropriate Chart for StepChart
    const renderStepChart = useMemo(() => {
        //If the step is created from Add New Step, user must first add the description / effective date
        if(!steps[indexOfStepToDisplay].id) {
            return (
                <NoChartToDisplay>
                    <p>You must save the description and effect date of this Step before</p>
                    <p>you will be able to make changes to the organization chart.</p>
                </NoChartToDisplay>
            )
        //If their are no entities in the array, the previous step chart has not been created
        } else if (!entitiesToRender.length) {
            return (
                <NoChartToDisplay>
                    <p>There are no changes in the organization chart of the previous step.</p>
                    <p>Please update it to be able to make changes to this organization chart.</p>
                </NoChartToDisplay>
            )
        } else {
            return (
                <CurrentOrgChartV2
                    clinks={clinks}
                    componentCalling='StepDisplay'
                    nodes={entitiesToRender}
                    slinks={slinks}
                />
            )
        }
    }, [entitiesToRender, clinks, slinks, indexOfStepToDisplay, steps])

    //Used to create the list of available link partners to choose from in AddLinkModal selector
    const renderFromToOptions = () => (
        entitiesToRender.map(entity => (
            // Removes any Delete Highlighted entities as options for the user to choose to edit
            !entity.remove && <DropdownOption key={uuidv4()} value={entity.id}>{entity.name}</DropdownOption>
            )
        )
    )

    const saveNewEntityHandler = () => {
        dispatch(resetErrors())
        const error = entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm, true)
        if (!error) {
            const addEntityInfo = {
                //Used to create a unique number id for each entity
                id: Date.now(),
                legal_form: legalForm,
                location: countryName,
                name: newEntityInfo.entityName,
                tax_rate: newEntityInfo.taxRate,
                pid: entitiesToRender.filter(entity => entity.id === newEntityInfo.parentId)[0].id.toString(),
                //Used in the backend when creating the entity to find its appropriate parent
                parent: entitiesToRender.filter(entity => entity.id === newEntityInfo.parentId)[0],
                //Used in Complete Project action to differentiate between existing and newly created entities
                edited: true,
                new: true
            }
            //Attaches the appropriate tag to the entity to assign the correct custom template in the org chart
            const entityTag = highlightTagForAddEntity(legalForm)
            if (entityTag) {
                addEntityInfo.tags = [entityTag]
            }
            //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            const chartData = {
                nodes: JSON.stringify([...entitiesToRender, addEntityInfo]),
                slinks: JSON.stringify(slinks),
                clinks: JSON.stringify(clinks)
            }
            createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
            setEntitiesToRender([...entitiesToRender, addEntityInfo])
            setAvailableParentNames([...availableParentNames, {name: addEntityInfo.name, location: addEntityInfo.location, id: addEntityInfo.id}])
            setCountryName('')
            setLegalForm('')
            setNewEntityInfo({
                entityName: '',
                parentId: '',
                taxRate: ''
            })
            setShowAddEntity(false)
        }
    }

    //Used by Cancel button of both AddEntityModal and AddLinkModal
    const cancelNewEntityLinkHandler = () => {
        dispatch(resetErrors())
        setCountryName('')
        setLegalForm('')
        setNewEntityInfo({
            entityName: '',
            parentId: '',
            taxRate: ''
        })
        setShowAddEntity(false)
        setShowAddLink(false)
    }

    const saveNewLinkHandler = async () => {
        dispatch(resetErrors())
        //Helper to perform input validation
        const error = linkInputErrorHandler(dispatch, setError, addLinkInfo)
        if (!error) {
            const newLink = {
                from: parseInt(addLinkInfo.from),
                to: parseInt(addLinkInfo.to),
                label: addLinkInfo.label,
                //Used to create a unique number id for each link
                id: Date.now()
            }
            //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            const chartData = {
                nodes: JSON.stringify(entitiesToRender)
            }
            if (addLinkInfo.color === 'blue') {
                newLink.template = 'blue'
            } else if (addLinkInfo.color === 'yellow') {
                newLink.template = 'yellow'
            }
            //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            if (addLinkInfo.type === 'clink') {
                //If a clink was added, slinks are sent unchanged and the new link is added to clinks
                chartData.slinks = JSON.stringify(slinks)
                chartData.clinks = JSON.stringify([...clinks, newLink])
                setClinks([...clinks, newLink])
                //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            } else {
                //If a slink was added, clinks are sent unchanged and the new link is added to slinks
                chartData.clinks = JSON.stringify(clinks)
                chartData.slinks = JSON.stringify([...slinks, newLink])
                setSlinks([...slinks, newLink])
            }
            createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
            setAddLinkInfo({from: '', to: '', type: '', label: '', color: ''})
            setShowAddLink(false)
        }
    }

    const removeLinkHandler = () => {
        dispatch(resetErrors())
        const newSlinks = slinks.filter(link => link.id !== parseInt(linkToRemove))
        const newClinks = clinks.filter(link => link.id !== parseInt(linkToRemove))
        //StepCharts are stored as JSON data in the backend until the Complete Project action is run
        const chartData = {
            nodes: JSON.stringify(entitiesToRender),
            slinks: JSON.stringify(newSlinks),
            clinks: JSON.stringify(newClinks)
        }
        createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
        setSlinks(newSlinks)
        setClinks(newClinks)
        setLinkToRemove('')
        setShowRemoveLink(false)
    }

    const removeEntityHandler = () => {
        dispatch(resetErrors())
       // const newEntitiesToRender = entitiesToRender.filter(entity => entity.id !== parseInt(entityToRemove))
       const newEntitiesToRender = entitiesToRender.map(entity => {
           if (entity.id === parseInt(entityToRemove)) {
               // Adds the legal form delete template to the entity so it is highlighted on this specific step's chart
               entity.tags = [highlightTagForDeleteEntity(entity.legal_form)]
               // Adds a key/value pair that is used in further step charts to not display this entity anymore
               entity.remove = true
               return entity
           } else {
               return entity
           }
       })
        //StepCharts are stored as JSON data in the backend until the Complete Project action is run
        const chartData = {
            nodes: JSON.stringify(newEntitiesToRender),
            slinks: JSON.stringify(slinks),
            clinks: JSON.stringify(clinks)
        }
        createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
        setEntitiesToRender(newEntitiesToRender)
        setAvailableParentNames(createAvailableParentNamesWithoutDeletes(newEntitiesToRender))
        setEntityToRemove('')
        setShowRemoveEntity(false)
    }

    const saveEditEntityHandler = (editEntityInfo, countryName, legalForm) => {
        dispatch(resetErrors())
        // Handles input validation for the entity inputs
        const error = editEntityInputErrorHandler(dispatch, setError, entitiesToRender, editEntityInfo, countryName)
        if (!error) {
            // Finds parent entity of entity being edited
            const targetParent = entitiesToRender.filter(entity => entity.id === parseInt(editEntityInfo.parentId))[0]
            // Finds index of entity being edited in listOfEntities
            const indexToEdit = entitiesToRender.findIndex(entity => entity.id === editEntityInfo.entityToEditId)
            // If an entity's parent is changed during the edit, a ghost version is left under the original parent with a delete template highlight
            // and the new version is given an add template highlight for the step
            if (targetParent.id !== parseInt(entitiesToRender[indexToEdit].pid)) {
                // Creates the ghost copy of the entity that remains behind with a delete node to highlight it was moved
                const deleteCopyOfEntity = {
                    id: Date.now(),
                    name: editEntityInfo.entityName,
                    tax_rate: editEntityInfo.taxRate,
                    // Gets the original parent id of the entity before it was changed
                    pid: entitiesToRender[indexToEdit].pid.toString(),
                    legal_form: legalForm,
                    location: countryName,
                    tags: [highlightTagForDeleteEntity(legalForm)],
                    // Key/value pair that is used in further step charts to not display this entity anymore
                    remove: true
                }
                entitiesToRender.push(deleteCopyOfEntity)
                //Updates the tag to be a Add template version of the node for highlighting, since the parent was changed
                entitiesToRender[indexToEdit].tags = [highlightTagForAddEntity(legalForm)]
            } else {
                // The parent of the entity was not change during the edit, so the legalForm tag is update to make sure it is the correct current version
                // in case the user change the legal form during the edit.
                entitiesToRender[indexToEdit].tags = [addLegalFormTag(legalForm)]
            }
            //Updates all values of entity being edited with current/new values
            entitiesToRender[indexToEdit].pid = editEntityInfo.parentId.toString()
            entitiesToRender[indexToEdit].name = editEntityInfo.entityName
            entitiesToRender[indexToEdit].tax_rate = editEntityInfo.taxRate
            entitiesToRender[indexToEdit].legal_form = legalForm
            entitiesToRender[indexToEdit].location = countryName
            entitiesToRender[indexToEdit].edited = true
            //Sets parent entity of entity to current/new value, used in backend to get database id of parent
            entitiesToRender[indexToEdit].parent = targetParent
            //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            const chartData = {
                nodes: JSON.stringify(entitiesToRender),
                slinks: JSON.stringify(slinks),
                clinks: JSON.stringify(clinks)
            }
            createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
            setEntitiesToRender([...entitiesToRender])
            setShowEditEntity(false)
        }
    }

    const saveEditLinkHandler = (targetLink) => {
        dispatch(resetErrors())
        //StepCharts are stored as JSON data in the backend until the Complete Project action is run
        //CLinks and SLinks are added later depending on if the type has changed or not
        let chartData = {
            nodes: JSON.stringify(entitiesToRender)
        }
        //If the link type is unchanged
        if (targetLink.type === targetLink.originalType) {
            if (targetLink.type === 'clink') {
                const newClinks = editLinkSameType(targetLink, clinks, setClinks)
                chartData.clinks = JSON.stringify(newClinks)
                chartData.slinks = JSON.stringify(slinks)
            } else {
                const newSlinks = editLinkSameType(targetLink, slinks, setSlinks)
                chartData.slinks = JSON.stringify(newSlinks)
                chartData.clinks = JSON.stringify(clinks)
            }
        //If the link type is changed, the helper function returns an array of clinks and slinks
        //The first value in the array is the array of links the link was added to
        //The second value in the array is the array of links the link was removed from
        } else {
            if (targetLink.type === 'clink') {
                const links = editLinkDifferentType(targetLink, slinks, setSlinks, clinks, setClinks)
                chartData.clinks = JSON.stringify(links[0])
                chartData.slinks = JSON.stringify(links[1])
            } else {
                const links = editLinkDifferentType(targetLink, clinks, setClinks, slinks, setSlinks)
                chartData.slinks = JSON.stringify(links[0])
                chartData.clinks = JSON.stringify(links[1])
            }
        }
        createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
        setShowEditLink(false)
    }

    return (
        <StepChartAndButtonsContainer>
            {showAddEntity &&
                <AddEntityModal
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    countryName={countryName}
                    error={error}
                    legalForm={legalForm}
                    newEntityInfo={newEntityInfo}
                    renderParentNameOptions={renderParentNameOptions}
                    saveNewEntityHandler={saveNewEntityHandler}
                    setCountryName={setCountryName}
                    setLegalForm={setLegalForm}
                    setNewEntityInfo={setNewEntityInfo}
                    setShowAddEntity={setShowAddEntity}
                    showAddEntity={showAddEntity}
                />}
            {showAddLink &&
                <AddLinkModal
                    addLinkInfo={addLinkInfo}
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    error={error}
                    fromToOptions={renderFromToOptions()}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setAddLinkInfo={setAddLinkInfo}
                    setShowAddLink={setShowAddLink}
                    showAddLink={showAddLink}
                />}
            {showRemoveLink &&
                <RemoveLinkModal
                    // linkOptions={renderLinkOptions} needs replaced with new dropdown
                    linkToRemove={linkToRemove}
                    removeLinkHandler={removeLinkHandler}
                    setLinkToRemove={setLinkToRemove}
                    setShowRemoveLink={setShowRemoveLink}
                    showRemoveLink={showRemoveLink}
                />}
            {showRemoveEntity &&
                <RemoveEntityModal
                    entities={entitiesToRender}
                    entityToRemove={entityToRemove}
                    removeEntityHandler={removeEntityHandler}
                    setEntityToRemove={setEntityToRemove}
                    setShowRemoveEntity={setShowRemoveEntity}
                    showRemoveEntity={showRemoveEntity}
                />}
            {showEditEntity &&
                <EditEntityModal
                    entities={entitiesToRender}
                    saveEditEntityHandler={saveEditEntityHandler}
                    setShowEditEntity={setShowEditEntity}
                    showEditEntity={showEditEntity}
                />}
            {showEditLink &&
                <EditLinkModal
                    clinks={clinks}
                    entities={entitiesToRender}
                    saveEditLinkHandler={saveEditLinkHandler}
                    setShowEditLink={setShowEditLink}
                    showEditLink={showEditLink}
                    slinks={slinks}
                />}
            {renderStepChart}
        </StepChartAndButtonsContainer>
    )
}

export default StepChart
