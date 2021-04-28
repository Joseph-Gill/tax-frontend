import React, {useMemo, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import GroupInfo from '../../components/GroupInfo'
import SuccessMessage from '../../components/SuccessMessage'
import CurrentOrgChartV2 from '../../components/CurrentOrgChartV2'
import AddEntityModal from '../../components/Modals/AddEntityModal'
import EditEntityModal from '../../components/Modals/EditEntityModal'
import RemoveEntityModal from '../../components/Modals/RemoveEntityModal'
import AddEntityLinkDropdown from '../../components/Dropdowns/AddEntityLinkDropdown'
import RemoveEntityLinkDropdown from '../../components/Dropdowns/RemoveEntityLinkDropdown'
import EditEntityLinkDropdown from '../../components/Dropdowns/EditEntityLinkDropdown'
import {createGroupAction} from '../../store/group/actions'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {addLegalFormTag, editEntityInputErrorHandler, entityInputErrorHandler, sortEntitiesByParentId} from '../../helpers'
import {ErrorMessage} from '../../style/messages'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle, GroupAddEntityTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer, EntityTitleContainer, GroupAddEditButtonContainer, GroupAddEditErrorContainer} from '../../style/containers'
import {GroupAddEditNoChartToDisplay} from './styles'


const GroupAdd = ({history}) => {
    const dispatch = useDispatch()
    let hiddenFileInput = useRef(null)
    const error = useSelector(state => state.errorReducer.error)
    const [groupName, setGroupName] = useState('')
    const [groupImage, setGroupImage] = useState({avatar: null, changed: false})
    const [countryName, setCountryName] = useState('')
    const [legalForm, setLegalForm] = useState('')
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [listOfEntities, setListOfEntities] = useState([])
    const [showSuccess, setShowSuccess] = useState(false)
    const [showAddEntity, setShowAddEntity] = useState(false)
    const [showRemoveEntity, setShowRemoveEntity] = useState(false)
    const [showEditEntity, setShowEditEntity] = useState(false)
    const [entityToRemove, setEntityToRemove] = useState('')
    const [showAddDropdown, setShowAddDropdown] = useState(false)
    const [showRemoveDropdown, setShowRemoveDropdown] = useState(false)
    const [showEditDropdown, setShowEditDropdown] = useState(false)
    const [newEntityInfo, setNewEntityInfo] = useState({
        entityName: '',
        parentId: '',
        taxRate: ''
    })

    const saveNewEntityHandler = () => {
        dispatch(resetErrors())
        //Handles input validation for the entity inputs
        const error = entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm, true)
        if (!error) {
            const newEntity = {
                //Used to get unique id number
                id: Date.now(),
                name: newEntityInfo.entityName,
                //If an entity is the prime entity of a group, its consider the "ultimate" entity
                pid: !newEntityInfo.parentId ? 'Ultimate' : listOfEntities.filter(entity => entity.id === newEntityInfo.parentId)[0].id.toString(),
                //Used in the backend to find the parent entity
                parent: !newEntityInfo.parentId ? '' : listOfEntities.filter(entity => entity.id === newEntityInfo.parentId)[0],
                location: countryName,
                legal_form: legalForm,
                //Tax rate is optional
                tax_rate: newEntityInfo.taxRate ? newEntityInfo.taxRate : '',
                //Adds tag necessary for custom template appearance of org chart nodes
                tags: [addLegalFormTag(legalForm)]
            }
            //New group entities are stored in local state until the new group is saved
            setListOfEntities([...listOfEntities, newEntity])
            //Stores the available options for parent name for new entities after the initial entity is created
            setAvailableParentNames([...availableParentNames, {name: newEntity.name, location: newEntity.location, id: newEntity.id}])
            //Resets the inputs to blank
            setCountryName('')
            setLegalForm('')
            setNewEntityInfo({
                entityName: '',
                parentId: '',
                taxRate: ''
            })
            setShowAddEntity(false)
        }
    }

    const saveEditEntityHandler = (editEntityInfo, countryName, legalForm ) => {
        dispatch(resetErrors())
        //Handles input validation for the entity inputs
        const error = editEntityInputErrorHandler(dispatch, setError, listOfEntities, editEntityInfo, countryName)
        if (!error) {
            //Finds parent entity of entity being edited
            const targetParent = listOfEntities.filter(entity => entity.id === parseInt(editEntityInfo.parentId))[0]
            //Finds index of entity being edited in listOfEntities
            const indexToEdit = listOfEntities.findIndex(entity => entity.id === editEntityInfo.entityToEditId)
            //Updates all values of entity being edited with current/new values
            listOfEntities[indexToEdit].name = editEntityInfo.entityName
            listOfEntities[indexToEdit].tax_rate = editEntityInfo.taxRate
            listOfEntities[indexToEdit].pid = editEntityInfo.parentId.toString()
            listOfEntities[indexToEdit].legal_form = legalForm
            listOfEntities[indexToEdit].location = countryName
            //Sets parent entity of entity to current/new value, used in backend to get database id of parent
            listOfEntities[indexToEdit].parent = targetParent
            //Updates tag of entity to make sure it is rendering correct legal form template
            listOfEntities[indexToEdit].tags = [addLegalFormTag(legalForm)]
            //Sorts the list of entities to put Ultimate first, then order by parentId to prevent trying to
            //create an entity with a parent that has not been created yet and crashing the backend
            setListOfEntities([...sortEntitiesByParentId(listOfEntities)])
            setShowEditEntity(false)
        }
    }

    const removeEntityHandler = () => {
        //Creates a list of all entities that aren't the entity to be deleted
        const newEntitiesToRender = listOfEntities.filter(entity => entity.id !== parseInt(entityToRemove))
        setListOfEntities(newEntitiesToRender)
        //Updates list of parent names with new list of entities
        setAvailableParentNames([...newEntitiesToRender.map(entity => {
            return {
                name: entity.name,
                location: entity.location,
                id: entity.id
            }
        })])
        setEntityToRemove('')
        setShowRemoveEntity(false)
    }

    const renderStepChart = useMemo(() => {
        if (!listOfEntities.length) {
            return (
                <GroupAddEditNoChartToDisplay>
                    <p>There are no entities to display for this Group.</p>
                </GroupAddEditNoChartToDisplay>
            )
        } else {
            return (
                <CurrentOrgChartV2
                    componentCalling='GroupAddEdit'
                    nodes={listOfEntities}
                />
            )
        }
    }, [listOfEntities])

    const cancelNewEntityLinkHandler = () => {
        dispatch(resetErrors())
        setCountryName('')
        setLegalForm('')
        setNewEntityInfo({
            entityName: '',
            parentId: '',
            taxRate: ''
        })
        setShowAddEntity(false)
    }

    const saveNewGroupClickHandler = async () => {
        dispatch(resetErrors())
        //Prevents user from saving a group that has no entities, must have at least one
        if (!listOfEntities.length) {
            dispatch(setError({entities: `You must create at least one Entity for this group.`}))
        } else {
            const newGroup = {
                name: groupName,
                avatar: groupImage.avatar,
                entities: listOfEntities
            }
            const response = await dispatch(createGroupAction(newGroup))
            if (response) {
                setShowSuccess(!showSuccess)
            }
        }
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        history.push(GROUPS)
    }

    return (
        <AuthenticatedPageContainer>
            {showAddEntity &&
                <AddEntityModal
                    cancelNewEntityLinkHandler={cancelNewEntityLinkHandler}
                    countryName={countryName}
                    entities={listOfEntities}
                    error={error}
                    legalForm={legalForm}
                    newEntityInfo={newEntityInfo}
                    saveNewEntityHandler={saveNewEntityHandler}
                    setCountryName={setCountryName}
                    setLegalForm={setLegalForm}
                    setModalView={setShowAddEntity}
                    setNewEntityInfo={setNewEntityInfo}
                    showModalView={showAddEntity}
                    title='Enter entity info'
                />}
            {showRemoveEntity &&
                <RemoveEntityModal
                    // entityOptions={renderRemoveEntitiesOptions(listOfEntities)}
                    entities={listOfEntities}
                    entityToRemove={entityToRemove}
                    removeEntityHandler={removeEntityHandler}
                    setEntityToRemove={setEntityToRemove}
                    setShowRemoveEntity={setShowRemoveEntity}
                    showRemoveEntity={showRemoveEntity}
                />}
            {showEditEntity &&
                <EditEntityModal
                    entities={listOfEntities}
                    saveEditEntityHandler={saveEditEntityHandler}
                    setShowEditEntity={setShowEditEntity}
                    showEditEntity={showEditEntity}
                />}
            {showSuccess &&
                <SuccessMessage
                    message="Your group has been successfully created!"
                    redirect={GROUPS}
                />}
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to: GROUPS, active: false},
                {display: 'CREATE GROUP', to: `${GROUPS}${ADD_GROUP}`, active: true}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Create Group</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <GroupInfo
                fromGroupAdd
                groupImage={groupImage}
                groupName={groupName}
                hiddenFileInput={hiddenFileInput}
                nameDisabled={false}
                setGroupImage={setGroupImage}
                setGroupName={setGroupName}
            />
            <EntityTitleContainer>
                <GroupAddEntityTitle>Entities</GroupAddEntityTitle>
                <GroupAddEditErrorContainer>
                    {error && <ErrorMessage>{error.entities}</ErrorMessage>}
                </GroupAddEditErrorContainer>
                <GroupAddEditButtonContainer>
                    <AddEntityLinkDropdown
                        setShowAddDropdown={setShowAddDropdown}
                        setShowAddEntity={setShowAddEntity}
                        showAddDropdown={showAddDropdown}
                    />
                    <RemoveEntityLinkDropdown
                        setShowRemoveDropdown={setShowRemoveDropdown}
                        setShowRemoveEntity={setShowRemoveEntity}
                        showRemoveDropdown={showRemoveDropdown}
                    />
                    <EditEntityLinkDropdown
                        setShowEditDropdown={setShowEditDropdown}
                        setShowEditEntity={setShowEditEntity}
                        showEditDropdown={showEditDropdown}
                    />
                </GroupAddEditButtonContainer>
            </EntityTitleContainer>
            {renderStepChart}
            <CreateGroupCancelSaveContainer>
                <CancelButton onClick={cancelButtonHandler}>Cancel</CancelButton>
                <SaveButton onClick={saveNewGroupClickHandler}>Save</SaveButton>
            </CreateGroupCancelSaveContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupAdd
