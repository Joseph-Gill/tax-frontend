import React, {useState, useEffect, useMemo, useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import CurrentOrgChart from '../../../components/CurrentOrgChart'
import AddEntityModal from '../../../components/Modals/AddEntityModal'
import {EntityOption} from '../../../style/options'
import {StepChartAndButtonsContainer} from './styles'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {useDispatch} from 'react-redux'
import {SaveButton} from '../../../style/buttons'


const StepChart = ({entities, setShowAddEntity, showAddEntity}) => {
    const dispatch = useDispatch()
    let legalForm = useRef('')
    let name = useRef('')
    let taxRate = useRef('')
    let parentName = useRef('')
    const [clinks, setClinks] = useState([{from: 1, to: 2, label: "test"}])
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
            />
        )
    }, [clinks, entitiesToRender])

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

    const cancelNewEntityHandler = () => {
        dispatch(resetErrors())
        setShowAddEntity(false)
    }

    return (
        <StepChartAndButtonsContainer>
            {showAddEntity ?
                <AddEntityModal
                    cancelNewEntityHandler={cancelNewEntityHandler}
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
            {/*<ButtonsContainer>*/}
            {/*    <AddEntityLinkButton onClick={() => setShowAddEntity(true)}>Add Entity</AddEntityLinkButton>*/}
            {/*    <AddEntityLinkButton>Add Link</AddEntityLinkButton>*/}
            {/*    <RemoveEntityLinkButton>Remove Link</RemoveEntityLinkButton>*/}
            {/*    <RemoveEntityLinkButton>Remove Entity</RemoveEntityLinkButton>*/}
            {/*    <SaveButton>Save</SaveButton>*/}
            {/*</ButtonsContainer>*/}
            {renderStepChart}
        </StepChartAndButtonsContainer>
    )
}

export default StepChart
