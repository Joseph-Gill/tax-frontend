import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import LiquidatedEntitySelect from './LiquidatedEntitySelect'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {getEntityFromId, sortedNonUltimateEntities} from '../../../helpers'
import {PredefinedLiquidationInternalContainer} from './styles'


const PredefinedLiquidationModal = ({entities, error, removeEntityHandler, setEntitiesToRender,
                                        setShowPredefinedLiquidation, showPredefinedLiquidation}) => {

    let searchLiquidatedTerm = useRef('')
    const dispatch = useDispatch()
    // Used to render the entities that can be liquidated to add, array is filtered by the search input
    const [filteredLiquidated, setFilteredLiquidated] = useState([])
    // Used to contain a list of available entities that can be liquidated during adding that can be rolled back to when resetting the filter
    const [availableLiquidated, setAvailableLiquidated] = useState([])
    const [showLiquidatedDropdown, setShowLiquidatedDropdown] = useState(false)
    const [targetLiquidated, setTargetLiquidated] = useState('')

    useEffect(() => {
        const result = sortedNonUltimateEntities(entities)
        setFilteredLiquidated([...result])
        setAvailableLiquidated([...result])
    }, [entities])

    const handleSelectLiquidatedChange = liquidatedId => {
        setTargetLiquidated(liquidatedId)
        setShowLiquidatedDropdown(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedLiquidation(false)
    }

    const liquidationModalErrorHandler = () => {
        if (!targetLiquidated) {
            dispatch(setError({liquidated: 'You must choose an entity to be liquidated.'}))
            return true
        } else {
            return false
        }
    }

    const handleSaveButton = () => {
        dispatch(resetErrors())
        //Handles input validation for liquidation modal
        const error = liquidationModalErrorHandler()
        if (!error) {
            //Change all direct children of liquidatedId to have pid equal to liquidatedId's pid
            const liquidatedEntity = getEntityFromId(targetLiquidated, entities)
            const affectedEntities = []
            entities.forEach(entity => {
                if (parseInt(entity.pid) === parseInt(targetLiquidated)) {
                    // Add the entity to affectedEntities for entity history logging
                    affectedEntities.push({id: entity.id, keyword: 'parent'})
                    entity.pid = liquidatedEntity.pid.toString()
                }
            })
            // Add the parent to affectedEntities for entity history logging, if entity is not Ultimate
            if (liquidatedEntity.pid) {
                affectedEntities.push({id: parseInt(liquidatedEntity.pid), keyword: 'child'})
            }
            setEntitiesToRender([...entities])
            // Remove the liquidated entity
            removeEntityHandler(entities, 'liquidated', affectedEntities, targetLiquidated)
            setShowPredefinedLiquidation(false)
        }

    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedLiquidation}
            showModalView={showPredefinedLiquidation}
        >
            <Draggable>
                <PredefinedLiquidationInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedLiquidation} />
                    <ModalTitle title='Liquidation' />
                    <LiquidatedEntitySelect
                        availableLiquidated={availableLiquidated}
                        entities={entities}
                        error={error}
                        filteredLiquidated={filteredLiquidated}
                        handleSelectLiquidatedChange={handleSelectLiquidatedChange}
                        searchLiquidatedTerm={searchLiquidatedTerm}
                        setFilteredLiquidated={setFilteredLiquidated}
                        setShowLiquidatedDropdown={setShowLiquidatedDropdown}
                        showLiquidatedDropdown={showLiquidatedDropdown}
                        targetLiquidated={targetLiquidated}
                    />
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                        saveHandler={handleSaveButton}
                    />
                </PredefinedLiquidationInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedLiquidationModal
