import React, {useEffect, useMemo, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import CurrentOrgChart from '../../../components/CurrentOrgChart'
import AddLinkModal from '../../../components/Modals/AddLinkModal'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import RemoveLinkModal from '../../../components/Modals/RemoveLinkModal'
import RemoveEntityModal from '../../../components/Modals/RemoveEntityModal'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {addLegalFormTag, getEntitiesWithTags} from '../../../helpers'
import {DropdownOption, EntityOption} from '../../../style/options'
import {StepChartAndButtonsContainer} from './styles'


const StepChart = ({entities, setShowAddEntity, setShowAddLink, setShowRemoveEntity, setShowRemoveLink,
                       showAddEntity, showAddLink, showRemoveEntity, showRemoveLink}) => {
    const dispatch = useDispatch()
    let legalForm = useRef('')
    let name = useRef('')
    let taxRate = useRef('')
    let parentName = useRef('')
    const [clinks, setClinks] = useState([])
    const [slinks, setSlinks] = useState([])
    const [entitiesToRender, setEntitiesToRender] = useState([])
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [countryName, setCountryName] = useState('')
    const [linkToRemove, setLinkToRemove] = useState('')
    const [entityToRemove, setEntityToRemove] = useState('')
    const [addLinkInfo, setAddLinkInfo] = useState({
        from: '',
        to: '',
        type: '',
        label: '',
        color: ''
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
        return (
            <CurrentOrgChart
                clinks={clinks}
                componentCalling='StepDisplay'
                nodes={entitiesToRender}
                slinks={slinks}
            />
        )
    }, [clinks, entitiesToRender, slinks])

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
        const newEntityInfo = {
            id: Date.now(),
            legal_form: legalForm.current.value,
            location: countryName,
            name: name.current.value,
            tax_rate: taxRate.current.value,
            pid: entitiesToRender.filter(entity => entity.name === parentName.current.value)[0].id.toString(),
        }
        const entityTag = addLegalFormTag(legalForm.current.value)
        if (entityTag) {
            newEntityInfo.tags = [entityTag]
        }
        setEntitiesToRender([...entitiesToRender, newEntityInfo])
        setAvailableParentNames([...availableParentNames, newEntityInfo.name])
        setCountryName('')
        setShowAddEntity(false)
    }

    const cancelNewEntityLinkHandler = () => {
        dispatch(resetErrors())
        setShowAddEntity(false)
        setShowAddLink(false)
    }

    const saveNewLinkHandler = () => {
        const newLink = {
            from: parseInt(addLinkInfo.from),
            to: parseInt(addLinkInfo.to),
            label: addLinkInfo.label,
            id: Date.now()
        }
        if (addLinkInfo.color === 'blue') {
            newLink.template = 'blue'
        } else if (addLinkInfo.color === 'yellow') {
            newLink.template = 'yellow'
        }
        if (addLinkInfo.type === 'clink') {
            setClinks([...clinks, newLink])
        } else {
            setSlinks([...slinks, newLink])
        }
        setAddLinkInfo({from: '', to: '', type: '', label: '', color: ''})
        setShowAddLink(false)
    }

    const removeLinkHandler = () => {
        setSlinks(slinks.filter(link => link.id !== parseInt(linkToRemove)))
        setClinks(clinks.filter(link => link.id !== parseInt(linkToRemove)))
        setLinkToRemove('')
        setShowRemoveLink(false)
    }

    const removeEntityHandler = () => {
        const newEntitiesToRender = entitiesToRender.filter(entity => entity.id !== parseInt(entityToRemove))
        setEntitiesToRender(newEntitiesToRender)
        setAvailableParentNames([...newEntitiesToRender.map(entity => entity.name)])
        // setEntitiesToRender(entitiesToRender.filter(entity => entity.id !== parseInt(entityToRemove)))
        setEntityToRemove('')
        setShowRemoveEntity(false)
    }

    return (
        <StepChartAndButtonsContainer>
            {showAddEntity ?
                <AddEntityModal
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    countryName={countryName}
                    legalForm={legalForm}
                    name={name}
                    parentName={parentName}
                    renderParentNameOptions={renderParentNameOptions}
                    saveNewEntityHandler={saveNewEntityHandler}
                    setCountryName={setCountryName}
                    setShowAddEntity={setShowAddEntity}
                    taxRate={taxRate}
                /> : null}
            {showAddLink ?
                <AddLinkModal
                    addLinkInfo={addLinkInfo}
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
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
