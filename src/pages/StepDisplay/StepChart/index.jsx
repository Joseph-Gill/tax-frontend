import React, {useEffect, useMemo, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import AddLinkModal from '../../../components/Modals/AddLinkModal'
import CurrentOrgChartV2 from '../../../components/CurrentOrgChartV2'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import RemoveLinkModal from '../../../components/Modals/RemoveLinkModal'
import RemoveEntityModal from '../../../components/Modals/RemoveEntityModal'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {addLegalFormTag, createUpdateStepChart, entityInputErrorHandler, getEntitiesWithTags,
    linkInputErrorHandler, renderRemoveEntitiesOptions} from '../../../helpers'
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
        setEntitiesToRender([...getEntitiesWithTags(entities)])
        //Creates an array of available Parent names/locations/ids for the user to choose from when
        //adding a new entity
        setAvailableParentNames([...entities.map(entity => {
            return {
                name: entity.name,
                location: entity.location,
                id: entity.id
            }
        })])
    }, [entities])

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
            <DropdownOption key={uuidv4()} value={entity.id}>{entity.name}</DropdownOption>
            )
        )
    )

    //Used to create the list of available links to choose from in RemoveLinkModal selector
    const renderRemoveLinkOptions = () => {
        const getEntityName = id => {
            for (let i = 0; i < entitiesToRender.length; i++) {
                if (entitiesToRender[i].id === id)
                    return entitiesToRender[i].name
            }
        }
        const links = []
        slinks.forEach(link => {
            links.push(
                <DropdownOption key={uuidv4()} value={link.id}>
                    {`From: ${getEntityName(link.from)} To: ${getEntityName(link.to)}`}
                </DropdownOption>)})
        clinks.forEach(link => {
            links.push(
                <DropdownOption key={uuidv4()} value={link.id}>
                    {`From: ${getEntityName(link.from)} To: ${getEntityName(link.to)}`}
                </DropdownOption>)})
        return links
    }

    const saveNewEntityHandler = () => {
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
                new: true
            }
            //Attaches the appropriate tag to the entity to assign the correct custom template in the org chart
            const entityTag = addLegalFormTag(legalForm)
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
                parentName: '',
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
            parentName: '',
            taxRate: ''
        })
        setShowAddEntity(false)
        setShowAddLink(false)
    }

    const saveNewLinkHandler = async () => {
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

    //Used by RemoveLinkModal
    const removeLinkHandler = () => {
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

    //Used by RemoveEntityModal
    const removeEntityHandler = () => {
       const newEntitiesToRender = entitiesToRender.filter(entity => entity.id !== parseInt(entityToRemove))
        //StepCharts are stored as JSON data in the backend until the Complete Project action is run
        const chartData = {
            nodes: JSON.stringify(newEntitiesToRender),
            slinks: JSON.stringify(slinks),
            clinks: JSON.stringify(clinks)
        }
        createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
        setEntitiesToRender(newEntitiesToRender)
        setAvailableParentNames([...newEntitiesToRender.map(entity => entity.name)])
        setEntityToRemove('')
        setShowRemoveEntity(false)
    }

    return (
        <StepChartAndButtonsContainer>
            {showAddEntity ?
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
                /> : null}
            {showAddLink ?
                <AddLinkModal
                    addLinkInfo={addLinkInfo}
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    error={error}
                    fromToOptions={renderFromToOptions()}
                    saveNewLinkHandler={saveNewLinkHandler}
                    setAddLinkInfo={setAddLinkInfo}
                    setShowAddLink={setShowAddLink}
                /> : null}
            {showRemoveLink ?
                <RemoveLinkModal
                    linkOptions={renderRemoveLinkOptions()}
                    linkToRemove={linkToRemove}
                    removeLinkHandler={removeLinkHandler}
                    setLinkToRemove={setLinkToRemove}
                    setShowRemoveLink={setShowRemoveLink}
                /> : null}
            {showRemoveEntity ?
                <RemoveEntityModal
                    entityOptions={renderRemoveEntitiesOptions(entitiesToRender)}
                    entityToRemove={entityToRemove}
                    removeEntityHandler={removeEntityHandler}
                    setEntityToRemove={setEntityToRemove}
                    setShowRemoveEntity={setShowRemoveEntity}
                /> : null}
            {renderStepChart}
        </StepChartAndButtonsContainer>
    )
}

export default StepChart
