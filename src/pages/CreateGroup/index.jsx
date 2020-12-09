import React, {useRef, useState} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import GroupInfo from './GroupInfo'
import EntityInfo from './EntityInfo'
import {EntityOption, EntityTitle} from './EntityInfo/styles'
import {v4 as uuidv4} from 'uuid'
import {TableData, TableDataRow} from '../../style/tables'
import {AddEntityButton, AddEntityButtonContainer, CreateGroupCancelButton, CreateGroupCancelSaveContainer, CreateGroupSaveButton, EntityTitleContainer} from './styles'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {createGroupAction} from '../../store/group/actions'
import {getProfileAction} from '../../store/profile/actions'


const CreateGroup = () => {
    let groupName = useRef('')
    let hiddenFileInput = useRef(null)
    let entityName = useRef('')
    let parentName = useRef('')
    let taxRate = useRef('')
    let legalForm = useRef('')
    const dispatch = useDispatch()
    const history = useHistory()
    const [groupImage, setGroupImage] = useState(null)
    const [countryName, setCountryName] = useState('')
    const [availableParentNames, setAvailableParentNames] = useState([])
    const [listOfEntities, setListOfEntities] = useState([])

    const imageClickHandler = () => {
        hiddenFileInput.current.click();
    }

    const imageChangeHandler = (e) => {
        if (e.target.files[0]) {
            setGroupImage(e.target.files[0])
        }
    }

    const addNewEntityClickHandler = () => {
        const newEntity = {
            name: entityName.current.value,
            parent: parentName.current.value,
            country: countryName,
            legalForm: legalForm.current.value,
            taxRate: taxRate.current.value
        }
        setListOfEntities([...listOfEntities, newEntity])
        setAvailableParentNames([...availableParentNames, entityName.current.value])
    }

    const saveNewGroupClickHandler = async () => {
        const newGroup = {
            name: groupName.current.value,
            avatar: groupImage,
            entities: listOfEntities
        }
        const response = dispatch(createGroupAction(newGroup))
        if (response) {
            history.push('/groups')
        }
    }

    const renderParentNameOptions = React.useMemo(() =>
    !availableParentNames.length ?
        <EntityOption value='Ultimate'>Ultimate</EntityOption> : (
            <>
                <EntityOption value=''>Select a parent</EntityOption>
                {availableParentNames.map(parent => <EntityOption key={uuidv4()} value={parent}>{parent}</EntityOption>)}
            </>), [availableParentNames]
    )

    const renderListOfEntities = React.useMemo(() =>
    listOfEntities.length ?
        listOfEntities.map(entity => (
            <TableDataRow key={uuidv4()}>
                <TableData>{entity.name}</TableData>
                <TableData>{entity.parent}</TableData>
                <TableData>{entity.country}</TableData>
                <TableData>{entity.legalForm}</TableData>
                <TableData>{entity.taxRate}</TableData>
            </TableDataRow>
        )) : null, [listOfEntities]
    )

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[{'GROUPS': '/groups'}, {'CREATE GROUP': '/groups/create'}]} />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Create Group</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <GroupInfo
                groupImage={groupImage}
                groupName={groupName}
                hiddenFileInput={hiddenFileInput}
                imageChangeHandler={imageChangeHandler}
                imageClickHandler={imageClickHandler}
                setGroupImage={setGroupImage}
            />
            <EntityTitleContainer>
                <EntityTitle>Entities</EntityTitle>
            </EntityTitleContainer>
            <EntityInfo
                countryName={countryName}
                entityName={entityName}
                legalForm={legalForm}
                parentName={parentName}
                renderListOfEntities={renderListOfEntities}
                renderParentNameOptions={renderParentNameOptions}
                setCountryName={setCountryName}
                taxRate={taxRate}
            />
            <AddEntityButtonContainer>
                <AddEntityButton onClick={addNewEntityClickHandler}>Add new entity</AddEntityButton>
            </AddEntityButtonContainer>
            <CreateGroupCancelSaveContainer>
                <CreateGroupCancelButton>Cancel</CreateGroupCancelButton>
                <CreateGroupSaveButton onClick={saveNewGroupClickHandler}>Save</CreateGroupSaveButton>
            </CreateGroupCancelSaveContainer>
        </AuthenticatedPageContainer>
    )
}

export default CreateGroup
