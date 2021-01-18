import React, {useState, useEffect, useMemo, useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import CurrentOrgChart from '../../../components/CurrentOrgChart'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import {EntityOption} from '../../../style/options'
import {StepChartAndButtonsContainer} from './styles'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {useDispatch} from 'react-redux'
import AddLinkModal from '../../../components/Modals/AddLinkModal'


const StepChart = ({entities, setShowAddEntity, setShowAddLink, showAddEntity, showAddLink}) => {
    const dispatch = useDispatch()
    let legalForm = useRef('')
    let name = useRef('')
    let taxRate = useRef('')
    let parentName = useRef('')
    const [clinks, setClinks] = useState([
        {from: 1, to: 2, label: 'blue template', template: 'blue'},
        {from: 2, to: 3, label: 'yellow template', template: 'yellow'},
        {from: 3, to: 4, label: 'no template'}
        ])
    const [slinks, setSlinks] = useState([
        {from: 1, to: 2, label: 'blue template', template: 'blue'},
        {from: 2, to: 3, label: 'yellow template', template: 'yellow'},
        {from: 3, to: 4, label: 'no template'}
    ])
    const [entitiesToRender, setEntitiesToRender] = useState([])
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [countryName, setCountryName] = useState('')

    useEffect(() => {
        setEntitiesToRender([...entities])
        setAvailableParentNames([...entities.map(entity => entity.name)])
    }, [entities])

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

    const saveNewEntityHandler = () => {
        const newEntityInfo = {
            id: uuidv4(),
            legal_form: legalForm.current.value,
            location: countryName,
            name: name.current.value,
            tax_rate: taxRate.current.value,
            pid: entitiesToRender.filter(entity => entity.name === parentName.current.value)[0].id.toString()
        }
        setEntitiesToRender([...entitiesToRender, newEntityInfo])
        setAvailableParentNames([...availableParentNames, newEntityInfo.name])
        setShowAddEntity(false)
    }

    const cancelNewEntityLinkHandler = () => {
        dispatch(resetErrors())
        setShowAddEntity(false)
        setShowAddLink(false)
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
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    setShowAddLink={setShowAddLink}
                /> : null}
            {renderStepChart}
        </StepChartAndButtonsContainer>
    )
}

export default StepChart
