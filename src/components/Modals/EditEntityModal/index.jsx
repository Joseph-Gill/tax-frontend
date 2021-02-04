import React, {useState, useMemo} from 'react'
import {useSpring} from 'react-spring'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import EditEntitySelect from './EditEntitySelect'
import EditEntityTextInput from './EditEntityTextInput'
import EditParentSelect from './EditParentSelect'
import EditLegalSelect from './EditLegalSelect'
import EditLocationSelect from './EditLocationSelect'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import close from '../../../assets/icons/stark_close_icon.svg'
import {CloseIcon} from '../../../style/images'
import {EntityOption} from '../../../style/options'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddEntitySaveButton} from '../styles'
import {EditEntityButtonContainer, EditEntityInternalContainer, EditEntityModalTitleContainer,
    EditEntityRowContainer} from './styles'


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

    //creates parent options for entity being edited
    const renderParentNameOptions = useMemo(() => {
        if (editParentNames.length) {
            return (
                <>
                    <EntityOption disabled value=''>Select a parent</EntityOption>
                    <EntityOption disabled value='Ultimate'>Ultimate</EntityOption>
                    {editParentNames.map(parent => (
                        <EntityOption
                            key={uuidv4()}
                            value={parent.id}
                        >{`${parent.name} (${parent.location})`}
                        </EntityOption>
                    ))}
                </>)
        } else {
            return (
                <>
                    <EntityOption disabled value=''>Select a parent</EntityOption>
                    <EntityOption value='Ultimate'>Ultimate</EntityOption>
                </>
            )
        }}, [editParentNames])

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <EditEntityInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowEditEntity(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <EditEntityModalTitleContainer>
                    <AuthenticatedPageTitle>Choose Entity to Edit</AuthenticatedPageTitle>
                </EditEntityModalTitleContainer>
                <EditEntityRowContainer>
                    <EditEntitySelect
                        editEntityChangeHandler={editEntityChangeHandler}
                        editEntityInfo={editEntityInfo}
                        error={error}
                        renderEntityToEditOptions={renderEntityToEditOptions}
                    />
                    <EditEntityTextInput
                        changeHandler={(e) => setEditEntityInfo({...editEntityInfo, entityName: e.target.value})}
                        disabled={!editEntityInfo.entitySelected}
                        error={error}
                        errorLocation={error.entityName}
                        label='Name'
                        name='name'
                        placeholder='Enter name'
                        type='text'
                        value={editEntityInfo.entityName}
                    />
                </EditEntityRowContainer>
                <EditEntityRowContainer>
                    <EditParentSelect
                        editEntityInfo={editEntityInfo}
                        error={error}
                        renderParentNameOptions={renderParentNameOptions}
                        setEditEntityInfo={setEditEntityInfo}
                    />
                    <EditLocationSelect
                        countryName={countryName}
                        editEntityInfo={editEntityInfo}
                        error={error}
                        setCountryName={setCountryName}
                    />
                </EditEntityRowContainer>
                <EditEntityRowContainer>
                    <EditLegalSelect
                        editEntityInfo={editEntityInfo}
                        error={error}
                        legalForm={legalForm}
                        setLegalForm={setLegalForm}
                    />
                    <EditEntityTextInput
                        changeHandler={(e) => setEditEntityInfo({...editEntityInfo, taxRate: e.target.value})}
                        disabled={!editEntityInfo.entitySelected}
                        label='Tax Rate (optional)'
                        name='tax_rate'
                        placeholder='Enter current income tax rate'
                        type='text'
                        value={editEntityInfo.taxRate}
                    />
                </EditEntityRowContainer>
                <EditEntityButtonContainer>
                    <AuthenticatedButtonCancel onClick={cancelButtonHandler}>Cancel</AuthenticatedButtonCancel>
                    <AddEntitySaveButton onClick={() => saveEditEntityHandler(editEntityInfo, countryName, legalForm)}>Save</AddEntitySaveButton>
                </EditEntityButtonContainer>
            </EditEntityInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default EditEntityModal
