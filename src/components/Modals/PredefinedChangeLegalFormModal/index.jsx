import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import EntityLegalDropdown from '../../Dropdowns/EntityLegalDropdown'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityFromId, getEntityInfo, renderEntitiesForModalDropdowns, sortEntitiesByName} from '../../../helpers'
import {ActiveInputLabel} from '../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../Dropdowns/styles'
import {PredefinedChangeLegalFormInternalContainer} from './styles'


const PredefinedChangeLegalFormModal = ({entities, error, saveEditEntityHandler, setShowPredefinedChangeLegalForm,
                                            showPredefinedChangeLegalForm}) => {

    let searchEntityToChangeTerm = useRef('')
    const dispatch = useDispatch()
    const [showChangeLegalDropdown, setShowChangeLegalDropdown] = useState(false)
    const [showEntityToChange, setShowEntityToChange] = useState(false)
    const [filteredEntitiesToChange, setFilteredEntitiesToChange] = useState([])
    const [legalForm, setLegalForm] = useState('')
    const [targetEntityToChange, setTargetEntityToChange] = useState('')

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredEntitiesToChange([...result])
    }, [entities])

    const handleSelectEntityToChange = entityToChangeId => {
        const targetEntity = getEntityFromId(entityToChangeId, entities)
        setLegalForm(targetEntity.legal_form)
        setTargetEntityToChange(entityToChangeId)
        setShowEntityToChange(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedChangeLegalForm(false)
    }

    const handleSaveButton = () => {
        const targetEntity = getEntityFromId(targetEntityToChange, entities)
        const editEntityInfo = {
            entitySelected: true,
            entityName: targetEntity.name,
            parentId: targetEntity.pid,
            taxRate: targetEntity.tax_rate,
            entityToEditId: targetEntity.id,
            //Makes it so that the entity will receive Add Highlighting during edit process
            legalFormChange: true,
        }
        saveEditEntityHandler(editEntityInfo, targetEntity.location, legalForm)
        setShowPredefinedChangeLegalForm(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedChangeLegalForm}
            showModalView={showPredefinedChangeLegalForm}
        >
            <Draggable>
                <PredefinedChangeLegalFormInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedChangeLegalForm} />
                    <ModalTitle title='Change Legal Form' />
                    <div>
                        <ActiveInputLabel>Entity to change</ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowEntityToChange}
                            showDropdownView={showEntityToChange}
                        >
                            <ModalDropdownButton
                                onClick={() => setShowEntityToChange(!showEntityToChange)}
                            >
                                {!targetEntityToChange ? 'Select entity to change' : getEntityInfo(entities, targetEntityToChange)}
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showEntityToChange ? 1 : 0}>
                                <ModalDropdownSearchField
                                    filterStateSet={setFilteredEntitiesToChange}
                                    inputName='entity_to_change'
                                    inputPlaceholder='Search for entity to change'
                                    inputRef={searchEntityToChangeTerm}
                                    originalArray={entities}
                                    term={searchEntityToChangeTerm}
                                />
                                {renderEntitiesForModalDropdowns(filteredEntitiesToChange, handleSelectEntityToChange)}
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                    </div>
                    <EntityLegalDropdown
                        editEntityInfo={{entitySelected: targetEntityToChange}}
                        error={error}
                        legalForm={legalForm}
                        setLegalForm={setLegalForm}
                        setShowEntityLegalSelect={setShowChangeLegalDropdown}
                        showEntityLegalSelect={showChangeLegalDropdown}
                    />
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                        saveHandler={handleSaveButton}
                    />
                </PredefinedChangeLegalFormInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedChangeLegalFormModal
