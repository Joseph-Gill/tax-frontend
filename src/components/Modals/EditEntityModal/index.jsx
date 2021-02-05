import React, {useState, useMemo} from 'react'
import {useSpring} from 'react-spring'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import EditEntityTopRow from './EditEntityTopRow'
import EditEntityButtons from './EditEntityButtons'
import EditEntityMiddleRow from './EditEntityMiddleRow'
import EditEntityBottomRow from './EditEntityBottomRow'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {EntityOption} from '../../../style/options'
import {AddDeleteModalExternalContainer} from '../styles'
import {EditEntityInternalContainer} from './styles'


const EditEntityModal = ({entities, saveEditEntityHandler, setShowEditEntity}) => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.errorReducer.error)
    const [countryName, setCountryName] = useState('')
    const [legalForm, setLegalForm] = useState('')
    const [editParentNames, setEditParentNames] = useState([])
    const [editEntityInfo, setEditEntityInfo] = useState({
        entityName: '',
        parentId: '',
        taxRate: '',
        entitySelected: false,
        entityToEditId: ''
    })

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        setShowEditEntity(false)
    }

    const editEntityChangeHandler = (e) => {
        //stores Entity to be edited
        const targetEntity = []
        //stores all entities that aren't being edited
        const remainingEntities = []
        //creates the array of potential parent names for the entity
        entities.forEach(entity => {
            if (entity.id === parseInt(e.target.value)) {
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
    }

    //creates options for entity to edit select
    const renderEntityToEditOptions = useMemo(() => {
        if (entities.length) {
            return (
                <>
                    <EntityOption disabled value=''>Select entity to edit</EntityOption>
                    {entities.map(entity => (
                        <EntityOption
                            key={uuidv4()}
                            value={entity.id}
                        >{`${entity.name} (${entity.location})`}
                        </EntityOption>
                    ))}
                </>
            )
        } else {
            return (
                <EntityOption value=''>No entities to edit</EntityOption>
            )
        }}, [entities])

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
                        >{`${parent.name} (${parent.location})`}
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
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <Draggable>
                <EditEntityInternalContainer>
                    <ModalClose modalDisplay={setShowEditEntity} />
                    <ModalTitle title='Choose Entity to Edit' />
                    <EditEntityTopRow
                        editEntityChangeHandler={editEntityChangeHandler}
                        editEntityInfo={editEntityInfo}
                        error={error}
                        renderEntityToEditOptions={renderEntityToEditOptions}
                        setEditEntityInfo={setEditEntityInfo}
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
                    <EditEntityButtons
                        cancelButtonHandler={cancelButtonHandler}
                        saveButtonHandler={saveButtonHandler}
                    />
                </EditEntityInternalContainer>
            </Draggable>
        </AddDeleteModalExternalContainer>
    )
}

export default EditEntityModal
