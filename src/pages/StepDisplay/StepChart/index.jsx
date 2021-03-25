import React, {useEffect, useMemo, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddLinkModal from '../../../components/Modals/AddLinkModal'
import CurrentOrgChartV2 from '../../../components/CurrentOrgChartV2'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import RemoveLinkModal from '../../../components/Modals/RemoveLinkModal'
import RemoveEntityModal from '../../../components/Modals/RemoveEntityModal'
import EditEntityModal from '../../../components/Modals/EditEntityModal'
import EditLinkModal from '../../../components/Modals/EditLinkModal'
import PredefinedContributionModal from '../../../components/Modals/PredefinedContributionModal'
import PredefinedDistributionModal from '../../../components/Modals/PredefinedDistributionModal'
import PredefinedIntercompanySaleModal from '../../../components/Modals/PredefinedIntercompanySaleModal'
import PredefinedLiquidationModal from '../../../components/Modals/PredefinedLiquidationModal'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {addLegalFormTag, createAvailableParentNamesWithoutDeletes, createUpdateStepChart, editEntityInputErrorHandler, editLinkDifferentType,
    editLinkSameType, entityInputErrorHandler, highlightTagForAddEntity, highlightTagForDeleteEntity,
    linkInputErrorHandler} from '../../../helpers'
import {StepChartAndButtonsContainer} from './styles'
import {NoChartToDisplay} from '../../../style/containers'
import PredefinedChangeLegalFormModal from '../../../components/Modals/PredefinedChangeLegalFormModal'
import PredefinedMergerModal from '../../../components/Modals/PredefinedMergerModal'


const StepChart = ({clinks, entities, indexOfStepToDisplay, project, setClinks, setShowAddEntity, setShowEditEntity, setShowEditLink,
                       setShowAddLink, setShowPredefinedChangeLegalForm, setShowPredefinedContribution, setShowPredefinedDistribution,
                       setShowPredefinedIncorporate, setShowPredefinedIntercompanySale, setShowPredefinedLiquidation, setShowPredefinedMerger,
                       setShowRemoveEntity, setShowRemoveLink, setSlinks, setStepChartExists, showAddEntity, showAddLink, showEditEntity,
                       showEditLink, showPredefinedChangeLegalForm, showPredefinedContribution, showPredefinedDistribution, showPredefinedIntercompanySale,
                       showPredefinedLiquidation, showPredefinedMerger, showRemoveEntity, showRemoveLink, showPredefinedIncorporate, slinks,
                       stepChartExists, steps}) => {

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
        setEntitiesToRender([...entities])
        //Creates an array of available Parent names/locations/ids for the user to choose from when adding / editing
        setAvailableParentNames(createAvailableParentNamesWithoutDeletes(entities))
    }, [entities])

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

    const saveNewEntityHandler = async () => {
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
                pid: entitiesToRender.find(entity => parseInt(entity.id) === parseInt(newEntityInfo.parentId)).id.toString(),
                //Used in the backend when creating the entity to find its appropriate parent
                parent: entitiesToRender.find(entity => parseInt(entity.id) === parseInt(newEntityInfo.parentId)),
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
            const response = createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
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
            setShowPredefinedIncorporate(false)
            setStepChartExists(true)
            return response
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
        //PredefinedIncorporate uses the same AddEntityModal as AddEntity
        setShowPredefinedIncorporate(false)
    }

    //checkChartExists is used in automated steps that are preforming multiple chart saves in a row
    //to bypass the delay that exists in setting StepChartExists to true in local state and needing
    //it to be true when the second save from an automated step is triggered and checks it
    const saveNewLinkHandler = async (linkInfo, arrayOfEntities, checkChartExists = stepChartExists) => {
        dispatch(resetErrors())
        //Helper to perform input validation
        const error = linkInputErrorHandler(dispatch, setError, linkInfo)
        if (!error) {
            const newLink = {
                from: parseInt(linkInfo.from),
                to: parseInt(linkInfo.to),
                label: linkInfo.label,
                //Used to create a unique number id for each link
                id: Date.now()
            }
            //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            const chartData = {
                nodes: JSON.stringify(arrayOfEntities)
            }
            if (linkInfo.color === 'blue') {
                newLink.template = 'blue'
            } else if (linkInfo.color === 'yellow') {
                newLink.template = 'yellow'
            }
            //StepCharts are stored as JSON data in the backend until the Complete Project action is run
            if (linkInfo.type === 'clink') {
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
            const response = createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, checkChartExists)
            setAddLinkInfo({from: '', to: '', type: '', label: '', color: ''})
            setShowAddLink(false)
            setStepChartExists(true)
            return response
        }
    }

    // Used by PredefinedMergerModal which needs to create two links at once, instead of just one
    const saveMultipleLinksHandler = (arrayOfLinkData, arrayOfEntities) => {
        const newCLinks = [...clinks]
        const newSLinks = [...slinks]

        arrayOfLinkData.forEach(link => {
            const newLink = {
                from: parseInt(link.from),
                to: parseInt(link.to),
                label: link.label,
                //Used to create a unique number id for each link
                id: Date.now()
            }
            if (link.color === 'blue') {
                newLink.template = 'blue'
            } else if (link.color === 'yellow') {
                newLink.template = 'yellow'
            }
            if (link.type === 'clink') {
                newCLinks.push(link)
            } else {
                newSLinks.push(link)
            }
        })
        const chartData = {
            nodes: JSON.stringify(arrayOfEntities),
            clinks: JSON.stringify(newCLinks),
            slinks: JSON.stringify(newSLinks)
        }
        createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, true)
        setClinks([...newCLinks])
        setSlinks([...newSLinks])
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
        setStepChartExists(true)
    }

    //removedEntity is used in automated steps to bypass the delay that exists in setting entityToRemove in local state
    const removeEntityHandler = (currentEntities, removedEntity = entityToRemove) => {
        dispatch(resetErrors())
       // const newEntitiesToRender = entitiesToRender.filter(entity => entity.id !== parseInt(entityToRemove))
       const newEntitiesToRender = currentEntities.map(entity => {
           if (entity.id === parseInt(removedEntity)) {
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
        setStepChartExists(true)
    }

    const saveEditEntityHandler = async (editEntityInfo, countryName, legalForm) => {
        dispatch(resetErrors())
        // Handles input validation for the entity inputs
        const error = editEntityInputErrorHandler(dispatch, setError, entitiesToRender, editEntityInfo, countryName)
        if (!error) {
            // Finds parent entity of entity being edited
            const targetParent = entitiesToRender.find(entity => parseInt(entity.id) === parseInt(editEntityInfo.parentId))
            // Finds index of entity being edited in listOfEntities
            const indexToEdit = entitiesToRender.findIndex(entity => parseInt(entity.id) === parseInt(editEntityInfo.entityToEditId))
            // If an entity's parent is changed during the edit, a ghost version is left under the original parent with a delete template highlight
            // and the new version is given an add template highlight for the step
            if (parseInt(targetParent.id) !== parseInt(entitiesToRender[indexToEdit].pid)) {
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
            // The parent of the entity was not change during the edit, so the legalForm tag is update to make sure it is the correct current version
            // in case the user change the legal form during the edit.
            } else {
                //If editEntityInfo has legalFormChange: true, it was changed by Predefined Change of Legal Form, and needs to be highlighted
                if (editEntityInfo.legalFormChange) {
                    entitiesToRender[indexToEdit].tags = [highlightTagForAddEntity(legalForm)]
                } else {
                    entitiesToRender[indexToEdit].tags = [addLegalFormTag(legalForm)]
                }

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
            setEntitiesToRender([...entitiesToRender])
            setShowEditEntity(false)
            const response = createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
            setStepChartExists(true)
            return response
        }
    }

    const saveEditLinkHandler = (targetLink, stepChartExists) => {
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
        setStepChartExists(true)
    }

    return (
        <StepChartAndButtonsContainer>
            {showAddEntity &&
                <AddEntityModal
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    countryName={countryName}
                    entities={entitiesToRender}
                    error={error}
                    legalForm={legalForm}
                    newEntityInfo={newEntityInfo}
                    saveNewEntityHandler={saveNewEntityHandler}
                    setCountryName={setCountryName}
                    setLegalForm={setLegalForm}
                    setModalView={setShowAddEntity}
                    setNewEntityInfo={setNewEntityInfo}
                    showModalView={showAddEntity}
                    title='Enter entity info'
                />}
            {showAddLink &&
                <AddLinkModal
                    addLinkInfo={addLinkInfo}
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    entities={entitiesToRender}
                    error={error}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setAddLinkInfo={setAddLinkInfo}
                    setShowAddLink={setShowAddLink}
                    showAddLink={showAddLink}
                />}
            {showRemoveLink &&
                <RemoveLinkModal
                    clinks={clinks}
                    entities={entitiesToRender}
                    linkToRemove={linkToRemove}
                    removeLinkHandler={removeLinkHandler}
                    setLinkToRemove={setLinkToRemove}
                    setShowRemoveLink={setShowRemoveLink}
                    showRemoveLink={showRemoveLink}
                    slinks={slinks}
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
            {showPredefinedContribution &&
                <PredefinedContributionModal
                    entities={entitiesToRender}
                    error={error}
                    saveEditEntityHandler={saveEditEntityHandler}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setShowPredefinedContribution={setShowPredefinedContribution}
                    showPredefinedContribution={showPredefinedContribution}
                />}
            {showPredefinedDistribution &&
                <PredefinedDistributionModal
                    entities={entitiesToRender}
                    error={error}
                    saveEditEntityHandler={saveEditEntityHandler}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setShowPredefinedDistribution={setShowPredefinedDistribution}
                    showPredefinedDistribution={showPredefinedDistribution}
                />}
            {showPredefinedIntercompanySale &&
                <PredefinedIntercompanySaleModal
                    entities={entitiesToRender}
                    error={error}
                    saveEditEntityHandler={saveEditEntityHandler}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setShowPredefinedIntercompanySale={setShowPredefinedIntercompanySale}
                    showPredefinedIntercompanySale={showPredefinedIntercompanySale}
                />}
            {showPredefinedIncorporate &&
                <AddEntityModal
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    countryName={countryName}
                    entities={entitiesToRender}
                    error={error}
                    legalForm={legalForm}
                    newEntityInfo={newEntityInfo}
                    saveNewEntityHandler={saveNewEntityHandler}
                    setCountryName={setCountryName}
                    setLegalForm={setLegalForm}
                    setModalView={setShowPredefinedIncorporate}
                    setNewEntityInfo={setNewEntityInfo}
                    showModalView={showPredefinedIncorporate}
                    title='Incorporation'
                />}
            {showPredefinedLiquidation &&
                <PredefinedLiquidationModal
                    entities={entitiesToRender}
                    error={error}
                    removeEntityHandler={removeEntityHandler}
                    setEntitiesToRender={setEntitiesToRender}
                    setShowPredefinedLiquidation={setShowPredefinedLiquidation}
                    showPredefinedLiquidation={showPredefinedLiquidation}
                />}
            {showPredefinedChangeLegalForm &&
                <PredefinedChangeLegalFormModal
                    entities={entitiesToRender}
                    error={error}
                    saveEditEntityHandler={saveEditEntityHandler}
                    setShowPredefinedChangeLegalForm={setShowPredefinedChangeLegalForm}
                    showPredefinedChangeLegalForm={showPredefinedChangeLegalForm}
                />}
            {showPredefinedMerger &&
                <PredefinedMergerModal
                    countryName={countryName}
                    entities={entitiesToRender}
                    error={error}
                    legalForm={legalForm}
                    newEntityInfo={newEntityInfo}
                    saveMultipleLinksHandler={saveMultipleLinksHandler}
                    saveNewEntityHandler={saveNewEntityHandler}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setCountryName={setCountryName}
                    setEntitiesToRender={setEntitiesToRender}
                    setLegalForm={setLegalForm}
                    setNewEntityInfo={setNewEntityInfo}
                    setShowPredefinedMerger={setShowPredefinedMerger}
                    showPredefinedMerger={showPredefinedMerger}
                />}
            {renderStepChart}
        </StepChartAndButtonsContainer>
    )
}

export default StepChart
