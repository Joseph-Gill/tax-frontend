import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components/macro'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {EntityErrorContainer, PredefinedModalInternalContainer} from '../styles'
import {ActiveInputLabel} from '../../../style/labels'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../Dropdowns/styles'
import {getEntityFromId, getEntityInfo, renderEntitiesForModalDropdowns, sortedNonUltimateEntities} from '../../../helpers'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {ErrorMessage} from '../../../style/messages'

const PredefinedLiquidationInternalContainer = styled(PredefinedModalInternalContainer)`
    height: 230px;
`

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

    const handleSaveButton = () => {
        //Change all direct children of liquidatedId to have pid equal to liquidatedId's pid
        const liquidatedEntity = getEntityFromId(targetLiquidated, entities)
        entities.forEach(entity => {
            if (parseInt(entity.pid) === parseInt(targetLiquidated)) {
                entity.pid = liquidatedEntity.pid.toString()
            }
        })
        setEntitiesToRender([...entities])
        //Remove liquidatedId
        removeEntityHandler(entities, targetLiquidated)
        setShowPredefinedLiquidation(false)
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
                    <div>
                        <ActiveInputLabel>Liquidated Entity</ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowLiquidatedDropdown}
                            showDropdownView={showLiquidatedDropdown}
                        >
                            <ModalDropdownButton
                                onClick={() => setShowLiquidatedDropdown(!showLiquidatedDropdown)}
                            >
                                {!targetLiquidated ? 'Select a liquidated entity' : getEntityInfo(entities, targetLiquidated)}
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showLiquidatedDropdown ? 1 : 0}>
                                <ModalDropdownSearchField
                                    filterStateSet={setFilteredLiquidated}
                                    inputName='liquidated_entity_search'
                                    inputPlaceholder='Search for liquidated entity'
                                    inputRef={searchLiquidatedTerm}
                                    originalArray={availableLiquidated}
                                    term={searchLiquidatedTerm}
                                />
                                {renderEntitiesForModalDropdowns(filteredLiquidated, handleSelectLiquidatedChange)}
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                        <EntityErrorContainer>
                            {error && <ErrorMessage>{error.liquidated}</ErrorMessage>}
                        </EntityErrorContainer>
                    </div>
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
