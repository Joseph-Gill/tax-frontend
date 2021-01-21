import React, {useRef, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import GroupInfo from '../../components/GroupInfo'
import EntityInfo from '../../components/EntityInfo'
import SuccessMessage from '../../components/SuccessMessage'
import Spinner from '../../components/Spinner'
import {updateGroupAction} from '../../store/group/actions'
import {EDIT_GROUP, GROUPS, HOME} from '../../routes/paths'
import {EntityTitle} from '../../components/EntityInfo/styles'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddEntityButton, CancelButton, SaveButton} from '../../style/buttons'
import {AddEntityButtonContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer, EntityInfoErrorContainer, EntityInfoSpaceContainer, EntityTitleContainer} from '../../style/containers'
import {resetErrors, setError} from '../../store/errors/actions/errorAction'
import {entityInputErrorHandler} from '../../helpers'
import {ErrorMessage} from '../../style/messages'


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
    const [showSuccess, setShowSuccess] = useState(false)
    const [newEntityInfo, setNewEntityInfo] = useState({
        entityName: '',
        parentName: '',
        taxRate: ''
    })

    useEffect(() => {
        if (!loaded) {
            history.push(`${HOME}`)
        } else {
            if (group.avatar) {
                setGroupImage({avatar: group.avatar, changed: false})
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
    }, [group.entities, history, loaded, group])

    const addNewEntityClickHandler = () => {
        dispatch(resetErrors())
        const error = entityInputErrorHandler(dispatch, setError, availableParentNames, newEntityInfo, countryName, legalForm)
        if (!error) {
            const newEntity = {
                name: newEntityInfo.entityName,
                pid: newEntityInfo.parentName,
                location: countryName,
                legal_form: legalForm,
                tax_rate: newEntityInfo.taxRate ? newEntityInfo.taxRate : '',
                new: true
            }
            setListOfEntities([...listOfEntities, newEntity])
            setAvailableParentNames([...availableParentNames, newEntityInfo.entityName])
            setCountryName('')
            setLegalForm('')
            setNewEntityInfo({
                entityName: '',
                parentName: '',
                taxRate: ''
            })
        }
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
                        <CancelButton onClick={() => history.push(GROUPS)}>Cancel</CancelButton>
                        <SaveButton onClick={saveGroupChangesHandler}>Save</SaveButton>
                    </CreateGroupCancelSaveContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupEdit
