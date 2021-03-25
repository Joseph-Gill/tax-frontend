import React, {useState, useRef, useEffect} from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components/macro'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {EntityErrorContainer, PredefinedModalInternalContainer} from '../styles'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import {useDispatch} from 'react-redux'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {ActiveInputLabel} from '../../../style/labels'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityFromId, getEntityInfo, renderEntitiesForModalDropdowns, sortEntitiesByName} from '../../../helpers'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../Dropdowns/styles'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {ErrorMessage} from '../../../style/messages'


const PredefinedMergerInternalContainer = styled(PredefinedModalInternalContainer)`
    height: 410px;
    //max-width: 370px;
    margin-left: 0;
`

const TestModalArea = styled.div`
    height: 410px;
    width: 370px;
    background-color: #00709F;
    display: ${props => props.expanded ? 'flex' : 'none'};
`

const TestModalOutter = styled.div`
    height: 410px;
    width: ${props => props.expanded ? '740px' : '356px'};
    transition: width 157ms;
    display: flex;
    margin-left: 200px;
`

const PredefinedMergerModal = ({entities, error, setShowPredefinedMerger, showPredefinedMerger}) => {

    let searchMergerOfEntityTerm = useRef('')
    let searchMergerToEntityTerm = useRef('')
    const dispatch = useDispatch()
    const [showMergerOfDropdown, setShowMergerOfDropdown] = useState(false)
    const [showMergerToDropdown, setShowMergerToDropdown] = useState(false)
    const [showMergerIntoDropdown, setShowMergerIntoDropdown] = useState(false)
    // Used to render the merger of entities to add, array is filtered by the search input
    const [filteredMergerOfEntities, setFilteredMergerOfEntities] = useState([])
    // Used to render the merger to entities to add, array is filtered by the search input
    const [filteredMergerToEntities, setFilteredMergerToEntities] = useState([])
    // Used to contain a list of available merger to entities during adding that can be rolled back to when resetting the filter
    const [availableMergerToEntities, setAvailableMergerToEntities] = useState([])
    const [targetMergerOfEntity, setTargetMergerOfEntity] = useState('')
    const [targetMergerToEntity, setTargetMergerToEntity] = useState('')
    const [mergerInto, setMergerInto] = useState('')
    const [showExpanded, setShowExpanded] = useState(false)

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
                } else if (parseInt(entity.pid) === parseInt(targetEntity.pid)) {
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
        setTargetMergerToEntity('')
        setMergerInto('')
        findPossibleMergerToEntities(entities, mergerOfId)
        setTargetMergerOfEntity(mergerOfId)
        setShowMergerOfDropdown(false)
    }

    const handleSelectMergerToChange = mergerToId => {
        setMergerInto('')
        setTargetMergerToEntity(mergerToId)
        setShowMergerToDropdown(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedMerger(false)
    }

    const handleSaveButton = () => {

    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedMerger}
            showModalView={showPredefinedMerger}
        >
            <Draggable>
                <TestModalOutter expanded={showExpanded ? 1 : 0}>
                    <PredefinedMergerInternalContainer>
                        <ModalClose modalDisplay={setShowPredefinedMerger} />
                        <ModalTitle title='Merger' />
                        <div>
                            <ActiveInputLabel>Merger of</ActiveInputLabel>
                            <DropdownInternalContainer
                                setDropdownView={setShowMergerOfDropdown}
                                showDropdownView={showMergerOfDropdown}
                            >
                                <ModalDropdownButton
                                    onClick={() => setShowMergerOfDropdown(!showMergerOfDropdown)}
                                >
                                    {!targetMergerOfEntity ? 'Select merger of entity' : getEntityInfo(entities, targetMergerOfEntity)}
                                </ModalDropdownButton>
                                <ModalDropdownContentContainer show={showMergerOfDropdown ? 1 : 0}>
                                    <ModalDropdownSearchField
                                        filterStateSet={setFilteredMergerOfEntities}
                                        inputName='merger_of_entity_search'
                                        inputPlaceholder='Search for merger of entity'
                                        inputRef={searchMergerOfEntityTerm}
                                        originalArray={entities}
                                        term={searchMergerOfEntityTerm}
                                    />
                                    {renderEntitiesForModalDropdowns(filteredMergerOfEntities, handleSelectMergerOfChange)}
                                </ModalDropdownContentContainer>
                            </DropdownInternalContainer>
                            <EntityErrorContainer>
                                {error && <ErrorMessage>{error.mergerFromEntity}</ErrorMessage>}
                            </EntityErrorContainer>
                        </div>
                        <div>
                            <ActiveInputLabel
                                disabled={!targetMergerOfEntity}
                            >
                                And
                            </ActiveInputLabel>
                            <DropdownInternalContainer
                                setDropdownView={setShowMergerToDropdown}
                                showDropdownView={showMergerToDropdown}
                            >
                                <ModalDropdownButton
                                    disabled={!targetMergerOfEntity}
                                    onClick={() => setShowMergerToDropdown(!showMergerToDropdown)}
                                >
                                    {!targetMergerToEntity ? 'Select merger to entity' : getEntityInfo(entities, targetMergerToEntity)}
                                </ModalDropdownButton>
                                <ModalDropdownContentContainer show={showMergerToDropdown ? 1 : 0}>
                                    <ModalDropdownSearchField
                                        filterStateSet={filteredMergerToEntities}
                                        inputName='merger_to_entity_search'
                                        inputPlaceholder='Search for merger to entity'
                                        inputRef={searchMergerToEntityTerm}
                                        originalArray={availableMergerToEntities}
                                        term={searchMergerToEntityTerm}
                                    />
                                    {renderEntitiesForModalDropdowns(filteredMergerToEntities, handleSelectMergerToChange)}
                                </ModalDropdownContentContainer>
                            </DropdownInternalContainer>
                            <EntityErrorContainer>
                                {error && <ErrorMessage>{error.mergerToEntity}</ErrorMessage>}
                            </EntityErrorContainer>
                        </div>
                        <div>
                            <ActiveInputLabel
                                disabled={!targetMergerToEntity}
                            >
                                Into
                            </ActiveInputLabel>
                            <DropdownInternalContainer
                                setDropdownView={setShowMergerIntoDropdown}
                                showDropdownView={showMergerIntoDropdown}
                            >
                                <ModalDropdownButton
                                    disabled={!targetMergerToEntity}
                                    onClick={() => setShowMergerIntoDropdown(!showMergerIntoDropdown)}
                                >
                                    {!mergerInto ? 'Select merger format' : 'Placeholder'}
                                </ModalDropdownButton>
                                <ModalDropdownContentContainer show={showMergerIntoDropdown ? 1 : 0}>
                                    <ModalDropdownContent>
                                        <span>Company A</span>
                                    </ModalDropdownContent>
                                    <ModalDropdownContent>
                                        <span>Company B</span>
                                    </ModalDropdownContent>
                                    <ModalDropdownContent
                                        onClick={() => setShowExpanded(!showExpanded)}
                                    >
                                        <span>New Company</span>
                                    </ModalDropdownContent>
                                </ModalDropdownContentContainer>
                            </DropdownInternalContainer>
                        </div>
                        <ModalAddButtons
                            cancelHandler={handleCancelButton}
                            saveHandler={handleSaveButton}
                        />
                    </PredefinedMergerInternalContainer>
                    <TestModalArea expanded={showExpanded ? 1 : 0}>
                        Placeholder
                    </TestModalArea>
                </TestModalOutter>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedMergerModal
