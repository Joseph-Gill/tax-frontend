import React, {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {AddEntityButtonContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer, EntityTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import GroupInfo from '../../components/GroupInfo'
import EntityInfo from '../../components/EntityInfo'
import {EntityTitle} from '../../components/EntityInfo/styles'
import {useDispatch} from 'react-redux'
import {createGroupAction} from '../../store/group/actions'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AddEntityButton, CancelButton, SaveButton} from '../../style/buttons'
import SuccessMessage from '../../components/SuccessMessage'


const GroupAdd = () => {
    let hiddenFileInput = useRef(null)
    let entityName = useRef('')
    let parentName = useRef('')
    let taxRate = useRef('')
    let legalForm = useRef('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [groupName, setGroupName] = useState('')
    const [groupImage, setGroupImage] = useState(null)
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
        const newGroup = {
            name: groupName,
            avatar: groupImage,
            entities: listOfEntities
        }
        const response = dispatch(createGroupAction(newGroup))
        if (response) {
            setShowSuccess(!showSuccess)
        }
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
                groupImage={groupImage}
                groupName={groupName}
                hiddenFileInput={hiddenFileInput}
                nameDisabled={false}
                setGroupImage={setGroupImage}
                setGroupName={setGroupName}
            />
            <EntityTitleContainer>
                <EntityTitle>Entities</EntityTitle>
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
                <CancelButton onClick={() => history.push(GROUPS)}>Cancel</CancelButton>
                <SaveButton onClick={saveNewGroupClickHandler}>Save</SaveButton>
            </CreateGroupCancelSaveContainer>
        </AuthenticatedPageContainer>
    )

}

export default GroupAdd
