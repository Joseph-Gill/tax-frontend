import React, {useRef, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AddEntityButtonContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer, EntityTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {EDIT_GROUP, GROUPS, HOME} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import GroupInfo from '../../components/GroupInfo'
import {EntityTitle} from '../../components/EntityInfo/styles'
import {AddEntityButton, CancelButton, SaveButton} from '../../style/buttons'
import EntityInfo from '../../components/EntityInfo'
import {updateGroupAction} from '../../store/group/actions'
import SuccessMessage from '../../components/SuccessMessage'
import Spinner from '../../components/Spinner'


const GroupEdit = ({history}) => {
    const dispatch = useDispatch()
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    let hiddenFileInput = useRef(null)
    let entityName = useRef('')
    let parentName = useRef('')
    let taxRate = useRef('')
    let legalForm = useRef('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [groupImage, setGroupImage] = useState({avatar: null, changed: false})
    const [countryName, setCountryName] = useState('')
    const [listOfEntities, setListOfEntities] = useState([])
    const [availableParentNames, setAvailableParentNames] = useState([])

    useEffect(() => {
        if (!loaded) {
            history.push(`${HOME}`)
        } else {
            if (group.avatar) {
                setGroupImage({...groupImage, avatar: group.avatar})
            }
            const sortedEntities = group.entities.sort((a,b) => (a.pid > b.pid) ? 1 : ((b.pid > a.pid) ? -1 : 0));
            setListOfEntities([...sortedEntities.map(entity => {
                if(!entity.pid) {
                    return {...entity, pid: 'Ultimate'}
                }
                const pidName = group.entities.filter(index => index.id === parseInt(entity.pid))
                return {...entity, pid: pidName[0].name}
            })])
            setAvailableParentNames([...group.entities.map(entity => entity.name)])
        }
    }, [group.entities, history, loaded, group, groupImage])

    const addNewEntityClickHandler = () => {
        const newEntity = {
            name: entityName.current.value,
            pid: parentName.current.value,
            location: countryName,
            legal_form: legalForm.current.value,
            tax_rate: taxRate.current.value,
            new: true
        }
        setListOfEntities([...listOfEntities, newEntity])
        setAvailableParentNames([...availableParentNames, entityName.current.value])
    }

    const saveGroupChangesHandler = async () => {
        const newEntities = listOfEntities.filter(entity => entity.new)
        const updatedGroupInfo = {
            entities: newEntities
        }
        if (groupImage.changed) {
            updatedGroupInfo.avatar = groupImage.avatar
        }
        const response = await dispatch(updateGroupAction(updatedGroupInfo, group.id))
        if (response) {
            setShowSuccess(!showSuccess)
        }
    }


    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
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
                        <SaveButton onClick={saveGroupChangesHandler}>Save</SaveButton>
                    </CreateGroupCancelSaveContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupEdit
