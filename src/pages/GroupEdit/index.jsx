import React, {useRef, useState, useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import LogoLoading from '../../components/LogoLoading'
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
import {addLegalFormTag, editEntityInputErrorHandler, entityInputErrorHandler, getEntitiesWithTags,
    renderRemoveEntitiesOptions} from '../../helpers'
import {updateGroupAction} from '../../store/group/actions'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {EDIT_GROUP, GROUPS, HOME} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {AuthenticatedPageTitle, GroupAddEntityTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer,
    EntityTitleContainer, GroupAddEditButtonContainer, GroupAddEditErrorContainer} from '../../style/containers'
import {GroupAddEditNoChartToDisplay} from '../GroupAdd/styles'
import {EntityOption} from '../../style/options'


const GroupEdit = ({history}) => {
    const dispatch = useDispatch()
    let hiddenFileInput = useRef(null)
    const error = useSelector(state => state.errorReducer.error)
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const [groupImage, setGroupImage] = useState({avatar: null, changed: false})
    const [countryName, setCountryName] = useState('')
    const [legalForm, setLegalForm] = useState('')
    const [listOfEntities, setListOfEntities] = useState([])
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [showAddEntity, setShowAddEntity] = useState(false)
    const [showRemoveEntity, setShowRemoveEntity] = useState(false)
    const [showEditEntity, setShowEditEntity] = useState(false)
    const [entityToRemove, setEntityToRemove] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showAddDropdown, setShowAddDropdown] = useState(false)
    const [showRemoveDropdown, setShowRemoveDropdown] = useState(false)
    const [showEditDropdown, setShowEditDropdown] = useState(false)
    const [newEntityInfo, setNewEntityInfo] = useState({
        entityName: '',
        parentId: '',
        taxRate: ''
    })

    useEffect(() => {
        //If chosen group is not in redux state due to reload, push Home to prevent crash
        if (!loaded) {
            history.push(`${HOME}`)
        } else {
            //If group has a defined avatar, load it, changed used to track if new avatar uploaded
            if (group.avatar) {
                setGroupImage({avatar: group.avatar, changed: false})
            }
            //Set each entity with its appropriate tag to show it with the appropriate org chart template
            setListOfEntities([...getEntitiesWithTags(group.entities)])
            //Populates the available list of parent names for new entities added to the group
            setAvailableParentNames([...group.entities.map(entity => {
                return {
                    name: entity.name,
                    location: entity.location,
                    id: entity.id
                }
            })])
        }
    }, [group.entities, history, loaded, group])

    const saveNewEntityHandler = () => {
        dispatch(resetErrors())
        //Handles input validation for the entity inputs
        const error = entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm)
        if (!error) {
            const newEntity = {
                //Used to get unique id number
                id: Date.now(),
                name: newEntityInfo.entityName,
                //If an entity is the prime entity of a group, its consider the "ultimate" entity
                pid: !newEntityInfo.parentId ? 'Ultimate' :listOfEntities.filter(entity => entity.id === newEntityInfo.parentId)[0].id.toString(),
                //Used in the backend to find the parent entity
                parent: !newEntityInfo.parentId ? '' : listOfEntities.filter(entity => entity.id === newEntityInfo.parentId)[0],
                location: countryName,
                legal_form: legalForm,
                //Tax rate is optional
                tax_rate: newEntityInfo.taxRate ? newEntityInfo.taxRate : '',
                tags: [addLegalFormTag(legalForm)],
                //"edited" and "new" status is so frontend knows which entities are edited and need to be updated in
                //the backend during save action
                edited: true,
                new: true
            }
            //Adds the new entity to the list of existing entities
            setListOfEntities([...listOfEntities, newEntity])
            //Adds the new entity to the list of available parent names
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

    const saveEditEntityHandler = (editEntityInfo, countryName, legalForm) => {
        dispatch(resetErrors())
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
            listOfEntities[indexToEdit].edited = true
            //Sets parent entity of entity to current/new value, used in backend to get database id of parent
            listOfEntities[indexToEdit].parent = targetParent
            //Updates tag of entity to make sure it is rendering correct legal form template
            listOfEntities[indexToEdit].tags = [addLegalFormTag(legalForm)]
            //Sorts the list of entities to put Ultimate first, then order by parentId to prevent trying to
            //create an entity with a parent that has not been created yet and crashing the backend
            setListOfEntities([...listOfEntities])
            setShowEditEntity(false)
        }
    }

    const removeEntityHandler = () => {
        const newEntitiesToRender = listOfEntities.filter(entity => entity.id !== parseInt(entityToRemove))
        setListOfEntities(newEntitiesToRender)
        setAvailableParentNames([...newEntitiesToRender.map(entity => {
            return {
                id: entity.id,
                name: entity.name,
                location: entity.location,
            }
        })])
        setEntityToRemove('')
        setShowRemoveEntity(false)
    }

    const saveGroupChangesHandler = async () => {
        const newEntities = []
        const existingEntities = []
        listOfEntities.forEach(entity => entity.new ? newEntities.push(entity) : existingEntities.push(entity))
        const updatedGroupInfo = {
            entities: newEntities.concat(existingEntities),
        }
        //If the user changed the group avatar, add the new avatar to the data to be sent
        //to the backend
        if (groupImage.changed) {
            updatedGroupInfo.avatar = groupImage.avatar
        }
        const response = await dispatch(updateGroupAction(updatedGroupInfo, group.id))
        if (response) {
            setShowSuccess(!showSuccess)
        }
    }

    const renderParentNameOptions = useMemo(() => {
        if (availableParentNames.length) {
            return (
                <>
                    <EntityOption disabled value=''>Select a parent</EntityOption>
                    {availableParentNames.map(parent => (
                        <EntityOption
                            key={uuidv4()}
                            value={parent.id}
                        >{`${parent.name} (${parent.location})`}
                        </EntityOption>
                    ))}
                </>)
        } else {
            return (
                <EntityOption value={0}>Ultimate</EntityOption>
            )
        }}, [availableParentNames])

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
                    error={error}
                    legalForm={legalForm}
                    newEntityInfo={newEntityInfo}
                    renderParentNameOptions={renderParentNameOptions}
                    saveNewEntityHandler={saveNewEntityHandler}
                    setCountryName={setCountryName}
                    setLegalForm={setLegalForm}
                    setNewEntityInfo={setNewEntityInfo}
                    setShowAddEntity={setShowAddEntity}
                    showAddEntity={showAddEntity}
                />}
            {showRemoveEntity &&
                <RemoveEntityModal
                    entityOptions={renderRemoveEntitiesOptions(listOfEntities)}
                    entityToRemove={entityToRemove}
                    removeEntityHandler={removeEntityHandler}
                    setEntityToRemove={setEntityToRemove}
                    setShowRemoveEntity={setShowRemoveEntity}
                />}
            {showEditEntity &&
                <EditEntityModal
                    entities={listOfEntities}
                    saveEditEntityHandler={saveEditEntityHandler}
                    setShowEditEntity={setShowEditEntity}
                />}
            {showSuccess &&
                <SuccessMessage
                    message="Your group has been successfully created!"
                    redirect={GROUPS}
                />}
            {!loaded ? <LogoLoading /> : (
                <>
                    {showSuccess &&
                    <SuccessMessage
                        message="Your group has been successfully updated!"
                        redirect={`${GROUPS}/${group.id}/`}
                    />}
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name} : EDIT`, to: `${GROUPS}${EDIT_GROUP}`, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Edit Group</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <GroupInfo
                        fromGroupEdit
                        groupImage={groupImage}
                        groupName={group.name}
                        hiddenFileInput={hiddenFileInput}
                        nameDisabled
                        setGroupImage={setGroupImage}
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
                                setShowEditDropdown={setShowEditDropdown}
                                setShowRemoveDropdown={setShowRemoveDropdown}
                                showAddDropdown={showAddDropdown}
                            />
                            <RemoveEntityLinkDropdown
                                setShowAddDropdown={setShowAddDropdown}
                                setShowEditDropdown={setShowEditDropdown}
                                setShowRemoveDropdown={setShowRemoveDropdown}
                                setShowRemoveEntity={setShowRemoveEntity}
                                showRemoveDropdown={showRemoveDropdown}
                            />
                            <EditEntityLinkDropdown
                                setShowAddDropdown={setShowAddDropdown}
                                setShowEditDropdown={setShowEditDropdown}
                                setShowEditEntity={setShowEditEntity}
                                setShowRemoveDropdown={setShowRemoveDropdown}
                                showEditDropdown={showEditDropdown}
                            />
                        </GroupAddEditButtonContainer>
                    </EntityTitleContainer>
                    {renderStepChart}
                    <CreateGroupCancelSaveContainer>
                        <CancelButton onClick={cancelButtonHandler}>Cancel</CancelButton>
                        <SaveButton onClick={saveGroupChangesHandler}>Save</SaveButton>
                    </CreateGroupCancelSaveContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupEdit
