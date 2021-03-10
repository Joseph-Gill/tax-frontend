import React, {useState, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import EditEntityTopRow from './EditEntityTopRow'
import EditEntityMiddleRow from './EditEntityMiddleRow'
import EditEntityBottomRow from './EditEntityBottomRow'
import ModalEditTitle from '../ModalComponents/ModalEditTitle'
import ModalEditButtons from '../ModalComponents/ModalEditButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {EntityOption} from '../../../style/options'
import {EditEntityLinkInternalContainer} from '../styles'


const EditEntityModal = ({entities, saveEditEntityHandler, setShowEditEntity, showEditEntity}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [countryName, setCountryName] = useState('')
    const [legalForm, setLegalForm] = useState('')
    const [showEditEntitySelect, setShowEditEntitySelect] = useState(false)
    const [editParentNames, setEditParentNames] = useState([])
    const [editEntityInfo, setEditEntityInfo] = useState({
        entityName: '',
        parentId: '',
        taxRate: '',
        entitySelected: false,
        entityToEditId: ''
    })

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
                        id: entity.id
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
        setEditParentNames(remainingEntities)
        setShowEditEntitySelect(false)
    }

    const saveButtonHandler = () => {
        saveEditEntityHandler(editEntityInfo, countryName, legalForm)
    }

    //creates parent options for entity being edited
    const renderParentNameOptions = useMemo(() => {
        if ((!editEntityInfo.parentId || editEntityInfo.parentId === 'Ultimate') && editEntityInfo.entitySelected) {
            return (
                <>
                    <EntityOption disabled value=''>Ultimate</EntityOption>
                    <EntityOption disabled value='Ultimate'>Ultimate</EntityOption>
                </>
            )
        } else if (editParentNames.length) {
            return (
                    editParentNames.map(parent => (
                        <EntityOption
                            key={uuidv4()}
                            value={parent.id}
                        >{parent.name.length > 20 ? `${parent.name.slice(0, 20).concat('....')} (${parent.location})` : `${parent.name} (${parent.location})`}
                        </EntityOption>
                    ))
            )
        } else {
            return (
                <>
                    <EntityOption disabled value=''>Select a parent</EntityOption>
                    <EntityOption value='Ultimate'>Ultimate</EntityOption>
                </>
            )
        }}, [editParentNames, editEntityInfo.parentId, editEntityInfo.entitySelected])

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
                        setEditEntityInfo={setEditEntityInfo}
                        setShowEditEntitySelect={setShowEditEntitySelect}
                        showEditEntitySelect={showEditEntitySelect}
                    />
                    <EditEntityMiddleRow
                        countryName={countryName}
                        editEntityInfo={editEntityInfo}
                        error={error}
                        renderParentNameOptions={renderParentNameOptions}
                        setCountryName={setCountryName}
                        setEditEntityInfo={setEditEntityInfo}
                    />
                    <EditEntityBottomRow
                        editEntityInfo={editEntityInfo}
                        error={error}
                        legalForm={legalForm}
                        setEditEntityInfo={setEditEntityInfo}
                        setLegalForm={setLegalForm}
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
