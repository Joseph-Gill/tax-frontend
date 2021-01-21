import React, {useEffect, useMemo, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import CurrentOrgChart from '../../../components/CurrentOrgChart'
import AddLinkModal from '../../../components/Modals/AddLinkModal'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import RemoveLinkModal from '../../../components/Modals/RemoveLinkModal'
import RemoveEntityModal from '../../../components/Modals/RemoveEntityModal'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {addLegalFormTag, createUpdateStepChart, entityInputErrorHandler, getEntitiesWithTags, linkInputErrorHandler} from '../../../helpers'
import {DropdownOption, EntityOption} from '../../../style/options'
import {NoChartToDisplay, StepChartAndButtonsContainer} from './styles'


const StepChart = ({clinks, entities, indexOfStepToDisplay, project, setClinks, setShowAddEntity,
                       setShowAddLink, setShowRemoveEntity, setShowRemoveLink, setSlinks, showAddEntity, showAddLink,
                       showRemoveEntity, showRemoveLink, slinks, stepChartExists}) => {
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
        parentName: '',
        taxRate: ''
    })

    useEffect(() => {
        setEntitiesToRender([...getEntitiesWithTags(entities)])
        setAvailableParentNames([...entities.map(entity => entity.name)])
    }, [entities])

    const renderParentNameOptions = useMemo(() => (
        <>
            <EntityOption value=''>Select a parent</EntityOption>
            {availableParentNames.map(parent => (
                <EntityOption
                    key={uuidv4()}
                    value={parent}
                >{parent}
                </EntityOption>
            ))}
        </>), [availableParentNames])

    const renderStepChart = useMemo(() => {
        if (!entitiesToRender.length) {
            return (
                <NoChartToDisplay>
                    <p>There are no changes in the organization chart of the previous step.</p>
                    <p>Please update it to be able to make changes to this organization chart.</p>
                </NoChartToDisplay>
            )
        } else {
            return (
                <CurrentOrgChart
                    clinks={clinks}
                    componentCalling='StepDisplay'
                    nodes={entitiesToRender}
                    slinks={slinks}
                />
            )
        }
    }, [entitiesToRender, clinks, slinks])

    const renderFromToOptions = () => (
        entitiesToRender.map(entity => (
            <DropdownOption key={uuidv4()} value={entity.id}>{entity.name}</DropdownOption>
            )
        )
    )

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

    const renderRemoveEntitiesOptions = () => {
        const canEntityBeRemoved = testEntity => {
            let result = true
            for (let i = 0; i < entitiesToRender.length; i++) {
                if (parseInt(entitiesToRender[i].pid) === testEntity.id){
                    result = false
                    break
                }
            }
            return result
        }
        const removableEntities = []
        entitiesToRender.forEach(entity => {
            if (canEntityBeRemoved(entity)) {
                removableEntities.push(
                    <DropdownOption key={uuidv4()} value={entity.id}>{entity.name}</DropdownOption>
                )
            }
        })
        return removableEntities
    }

    const saveNewEntityHandler = () => {
        const error = entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm, true)
        if (!error) {
            const addEntityInfo = {
                id: Date.now(),
                legal_form: legalForm,
                location: countryName,
                name: newEntityInfo.entityName,
                tax_rate: newEntityInfo.taxRate,
                pid: entitiesToRender.filter(entity => entity.name === newEntityInfo.parentName)[0].id.toString(),
            }
            const entityTag = addLegalFormTag(legalForm)
            if (entityTag) {
                addEntityInfo.tags = [entityTag]
            }
            const chartData = {
                nodes: JSON.stringify([...entitiesToRender, addEntityInfo]),
                slinks: JSON.stringify(slinks),
                clinks: JSON.stringify(clinks)
            }
            createUpdateStepChart(chartData, dispatch, indexOfStepToDisplay, project, stepChartExists)
            setEntitiesToRender([...entitiesToRender, addEntityInfo])
            setAvailableParentNames([...availableParentNames, addEntityInfo.name])
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
        const error = linkInputErrorHandler(dispatch, setError, addLinkInfo)
        if (!error) {
            const newLink = {
                from: parseInt(addLinkInfo.from),
                to: parseInt(addLinkInfo.to),
                label: addLinkInfo.label,
                id: Date.now()
            }
            const chartData = {
                nodes: JSON.stringify(entitiesToRender)
            }
            if (addLinkInfo.color === 'blue') {
                newLink.template = 'blue'
            } else if (addLinkInfo.color === 'yellow') {
                newLink.template = 'yellow'
            }
            if (addLinkInfo.type === 'clink') {
                chartData.slinks = JSON.stringify(slinks)
                chartData.clinks = JSON.stringify([...clinks, newLink])
                setClinks([...clinks, newLink])
            } else {
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
        const newSlinks = slinks.filter(link => link.id !== parseInt(linkToRemove))
        const newClinks = clinks.filter(link => link.id !== parseInt(linkToRemove))
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
        const newEntitiesToRender = entitiesToRender.filter(entity => entity.id !== parseInt(entityToRemove))
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
                    entityOptions={renderRemoveEntitiesOptions()}
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
