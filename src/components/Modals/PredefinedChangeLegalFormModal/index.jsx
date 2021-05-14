import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ChangeEntitySelect from './ChangeEntitySelect'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import EntityLegalDropdown from '../../Dropdowns/EntityLegalDropdown'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {getEntityFromId, sortEntitiesByName} from '../../../helpers'
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

    const changeLegalFormModalErrorHandler = () => {
        if (!targetEntityToChange) {
            dispatch(setError({changeEntity: 'You must choose an entity to change legal form.'}))
            return true
        } else if (!legalForm) {
            dispatch(setError({entityLegalForm: 'You must choose a new legal form for this entity.'}))
            return true
        } else {
            return false
        }
    }

    const handleSaveButton = () => {
        dispatch(resetErrors())
        //Handles input validation for change of legal form modal
        const error = changeLegalFormModalErrorHandler()
        if (!error) {
            const targetEntity = getEntityFromId(targetEntityToChange, entities)
            const editEntityInfo = {
                entitySelected: true,
                entityName: targetEntity.name,
                parentId: targetEntity.pid,
                taxRate: targetEntity.tax_rate,
                entityToEditId: targetEntity.id,
                // Used in tracking the changed legal form in the entity history created
                originalLegalForm: targetEntity.legal_form,
                // Makes it so that the entity will receive Add Highlighting during edit process
                legalFormChange: true,
            }
            // Save change to the chart, entitiesAffected is an empty array as no other histories are necessary
            saveEditEntityHandler(editEntityInfo, targetEntity.location, legalForm, 'change_legal_form', [])
            setShowPredefinedChangeLegalForm(false)
        }
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
                    <ChangeEntitySelect
                        entities={entities}
                        error={error}
                        filteredEntitiesToChange={filteredEntitiesToChange}
                        handleSelectEntityToChange={handleSelectEntityToChange}
                        searchEntityToChangeTerm={searchEntityToChangeTerm}
                        setFilteredEntitiesToChange={setFilteredEntitiesToChange}
                        setShowEntityToChange={setShowEntityToChange}
                        showEntityToChange={showEntityToChange}
                        targetEntityToChange={targetEntityToChange}
                    />
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
