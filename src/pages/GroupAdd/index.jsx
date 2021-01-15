import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import GroupInfo from '../../components/GroupInfo'
import EntityInfo from '../../components/EntityInfo'
import SuccessMessage from '../../components/SuccessMessage'
import {createGroupAction} from '../../store/group/actions'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddEntityButton, CancelButton, SaveButton} from '../../style/buttons'
import {ErrorMessage} from '../../style/messages'
import {AddEntityButtonContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer, EntityTitleContainer, ErrorMessageContainer} from '../../style/containers'
import {GroupAddEntityTitle} from './styles'


const GroupAdd = ({history}) => {
    const dispatch = useDispatch()
    let hiddenFileInput = useRef(null)
    let entityName = useRef('')
    let parentName = useRef('')
    let taxRate = useRef('')
    let legalForm = useRef('')
    const error = useSelector(state => state.errorReducer.error)
    const [groupName, setGroupName] = useState('')
    const [groupImage, setGroupImage] = useState({avatar: null, changed: false})
    const [countryName, setCountryName] = useState('')
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [listOfEntities, setListOfEntities] = useState([])
    const [showSuccess, setShowSuccess] = useState(false)

    const addNewEntityClickHandler = () => {
        const newEntity = {
            name: entityName.current.value,
            pid: parentName.current.value,
            location: countryName,
            legal_form: legalForm.current.value,
            tax_rate: taxRate.current.value
        }
        setListOfEntities([...listOfEntities, newEntity])
        setAvailableParentNames([...availableParentNames, entityName.current.value])
    }

    const saveNewGroupClickHandler = async () => {
        dispatch(resetErrors())
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
            <EntityInfo
                availableParentNames={availableParentNames}
                countryName={countryName}
                entityName={entityName}
                legalForm={legalForm}
                listOfEntities={listOfEntities}
                parentName={parentName}
                setCountryName={setCountryName}
                taxRate={taxRate}
            />
            <AddEntityButtonContainer>
                <AddEntityButton onClick={addNewEntityClickHandler}>Add new entity</AddEntityButton>
            </AddEntityButtonContainer>
            <CreateGroupCancelSaveContainer>
                <CancelButton onClick={cancelButtonHandler}>Cancel</CancelButton>
                <SaveButton onClick={saveNewGroupClickHandler}>Save</SaveButton>
            </CreateGroupCancelSaveContainer>
        </AuthenticatedPageContainer>
    )

}

export default GroupAdd
