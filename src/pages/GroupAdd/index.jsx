import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import GroupInfo from '../../components/GroupInfo'
import EntityInfo from '../../components/EntityInfo'
import SuccessMessage from '../../components/SuccessMessage'
import {createGroupAction} from '../../store/group/actions'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {entityInputErrorHandler} from '../../helpers'
import {ErrorMessage} from '../../style/messages'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddEntityButton, CancelButton, SaveButton} from '../../style/buttons'
import {AddEntityButtonContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer,
    EntityInfoErrorContainer, EntityInfoSpaceContainer, EntityTitleContainer, ErrorMessageContainer
} from '../../style/containers'
import {GroupAddEntityTitle} from './styles'


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
    const [newEntityInfo, setNewEntityInfo] = useState({
        entityName: '',
        parentName: '',
        taxRate: ''
    })

    const addNewEntityClickHandler = () => {
        dispatch(resetErrors())
        //Handles input validation for the entity inputs
        const error = entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm)
        if (!error) {
            const newEntity = {
                name: newEntityInfo.entityName,
                //If an entity is the prime entity of a group, its consider the "ultimate" entity
                pid: !availableParentNames.length ? 'Ultimate' : newEntityInfo.parentName,
                location: countryName,
                legal_form: legalForm,
                //Tax rate is optional
                tax_rate: newEntityInfo.taxRate ? newEntityInfo.taxRate : ''
            }
            //New group entities are stored in local state until the new group is saved
            setListOfEntities([...listOfEntities, newEntity])
            //Stores the available options for parent name for new entities after the initial entity is created
            setAvailableParentNames([...availableParentNames, newEntityInfo.entityName])
            //Resets the inputs to blank
            setCountryName('')
            setLegalForm('')
            setNewEntityInfo({
                entityName: '',
                parentName: '',
                taxRate: ''
            })
        }
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
                <ErrorMessageContainer>
                    {error && <ErrorMessage>{error.entities}</ErrorMessage>}
                </ErrorMessageContainer>
            </EntityTitleContainer>
            <EntityInfoSpaceContainer>
                <EntityInfo
                    availableParentNames={availableParentNames}
                    countryName={countryName}
                    legalForm={legalForm}
                    listOfEntities={listOfEntities}
                    newEntityInfo={newEntityInfo}
                    setCountryName={setCountryName}
                    setLegalForm={setLegalForm}
                    setNewEntityInfo={setNewEntityInfo}
                />
                <EntityInfoErrorContainer>
                    {error && <ErrorMessage>{error.entityInput}</ErrorMessage>}
                </EntityInfoErrorContainer>
                <AddEntityButtonContainer>
                    <AddEntityButton onClick={addNewEntityClickHandler}>Add new entity</AddEntityButton>
                </AddEntityButtonContainer>
            </EntityInfoSpaceContainer>
            <CreateGroupCancelSaveContainer>
                <CancelButton onClick={cancelButtonHandler}>Cancel</CancelButton>
                <SaveButton onClick={saveNewGroupClickHandler}>Save</SaveButton>
            </CreateGroupCancelSaveContainer>
        </AuthenticatedPageContainer>
    )

}

export default GroupAdd
