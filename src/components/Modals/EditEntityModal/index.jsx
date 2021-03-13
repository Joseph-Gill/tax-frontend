import React, {useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import EditEntityTopRow from './EditEntityTopRow'
import EditEntityMiddleRow from './EditEntityMiddleRow'
import EditEntityBottomRow from './EditEntityBottomRow'
import ModalEditTitle from '../ModalComponents/ModalEditTitle'
import ModalEditButtons from '../ModalComponents/ModalEditButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {sortEntitiesByName} from '../../../helpers'
import {EditEntityLinkInternalContainer} from '../styles'


const EditEntityModal = ({entities, saveEditEntityHandler, setShowEditEntity, showEditEntity}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    let searchEntityTerm = useRef('')
    let searchParentTerm = useRef('')
    const [countryName, setCountryName] = useState('')
    const [legalForm, setLegalForm] = useState('')
    const [filteredEntitiesToEdit, setFilteredEntitiesToEdit] = useState([])
    // Used to render the parents to edit, array is filtered by the search input
    const [filteredParents, setFilteredParents] = useState([])
    // Used to contain a list of available parents during edit that can be rolled back to when resetting the filter
    const [editParentNames, setEditParentNames] = useState([])
    const [showEditEntitySelect, setShowEditEntitySelect] = useState(false)
    const [showParentEntitySelect, setShowParentEntitySelect] = useState(false)
    const [showEntityLegalSelect, setShowEntityLegalSelect] = useState(false)
    const [editEntityInfo, setEditEntityInfo] = useState({
        entityName: '',
        parentId: '',
        taxRate: '',
        entitySelected: false,
        entityToEditId: ''
    })

    useEffect(() => {
        // Sorts the list of entities alphabetically before setting the filtered result to all entities initially
        setFilteredEntitiesToEdit([...sortEntitiesByName(entities)])
    }, [entities])

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowEditEntity(false)
    }

    const editEntityChangeHandler = entityId => {
        //stores Entity to be edited
        const targetEntity = []
        //stores all entities that aren't being edited to be used as possible parents
        const remainingEntities = []
        //creates the array of potential parent names for the entity
        entities.forEach(entity => {
            if (entity.id === parseInt(entityId)) {
                targetEntity.push(entity)
            } else {
                remainingEntities.push({
                        name: entity.name,
                        location: entity.location,
                        id: entity.id,
                        remove: entity.remove,
                    })
            }
        })
        //sets the values of inputs for the edit modal to the target entity
        setEditEntityInfo({
            entityName: targetEntity[0].name,
            parentId: targetEntity[0].pid,
            taxRate: targetEntity[0].tax_rate ? targetEntity[0].tax_rate : '',
            entitySelected: true,
            entityToEditId: targetEntity[0].id
        })
        setCountryName(targetEntity[0].location)
        setLegalForm(targetEntity[0].legal_form)
        setFilteredParents([...remainingEntities])
        setEditParentNames([...remainingEntities])
        setShowEditEntitySelect(false)
    }

    const editParentChangeHandler = entityId => {
        setEditEntityInfo({...editEntityInfo, parentId: parseInt(entityId)})
        setShowParentEntitySelect(false)
    }

    const saveButtonHandler = () => {
        saveEditEntityHandler(editEntityInfo, countryName, legalForm)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowEditEntity}
            showModalView={showEditEntity}
        >
            <Draggable>
                <EditEntityLinkInternalContainer>
                    <ModalClose modalDisplay={setShowEditEntity} />
                    <ModalEditTitle title='Choose Entity to Edit' />
                    <EditEntityTopRow
                        editEntityChangeHandler={editEntityChangeHandler}
                        editEntityInfo={editEntityInfo}
                        entities={entities}
                        error={error}
                        filteredEntitiesToEdit={filteredEntitiesToEdit}
                        searchEntityTerm={searchEntityTerm}
                        setEditEntityInfo={setEditEntityInfo}
                        setFilteredEntitiesToEdit={setFilteredEntitiesToEdit}
                        setShowEditEntitySelect={setShowEditEntitySelect}
                        showEditEntitySelect={showEditEntitySelect}
                    />
                    <EditEntityMiddleRow
                        countryName={countryName}
                        editEntityInfo={editEntityInfo}
                        editParentChangeHandler={editParentChangeHandler}
                        editParentNames={editParentNames}
                        entities={entities}
                        error={error}
                        filteredParents={filteredParents}
                        searchParentTerm={searchParentTerm}
                        setCountryName={setCountryName}
                        setFilteredParents={setFilteredParents}
                        setShowParentEntitySelect={setShowParentEntitySelect}
                        showParentEntitySelect={showParentEntitySelect}
                    />
                    <EditEntityBottomRow
                        editEntityInfo={editEntityInfo}
                        error={error}
                        legalForm={legalForm}
                        setEditEntityInfo={setEditEntityInfo}
                        setLegalForm={setLegalForm}
                        setShowEntityLegalSelect={setShowEntityLegalSelect}
                        showEntityLegalSelect={showEntityLegalSelect}
                    />
                    <ModalEditButtons
                        cancelButtonHandler={cancelButtonHandler}
                        saveButtonHandler={saveButtonHandler}
                    />
                </EditEntityLinkInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default EditEntityModal
