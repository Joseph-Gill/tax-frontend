import React, {useRef, useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {AddEntityButtonContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, CreateGroupCancelSaveContainer, EntityTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {EDIT_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import GroupInfo from '../../components/GroupInfo'
import {EntityTitle} from '../../components/EntityInfo/styles'
import {AddEntityButton, CancelButton, SaveButton} from '../../style/buttons'
import EntityInfo from '../../components/EntityInfo'


const GroupEdit = () => {
    const history = useHistory()
    const group = useSelector(state => state.groupReducer.group)
    let hiddenFileInput = useRef(null)
    let entityName = useRef('')
    let parentName = useRef('')
    let taxRate = useRef('')
    let legalForm = useRef('')
    const [groupImage, setGroupImage] = useState(null)
    const [countryName, setCountryName] = useState('')
    const [listOfEntities, setListOfEntities] = useState([])
    const [availableParentNames, setAvailableParentNames] = useState([...group.entities.map(entity => entity.name)])

    useEffect(() => {
        const sortedEntities = group.entities.sort((a,b) => (a.pid > b.pid) ? 1 : ((b.pid > a.pid) ? -1 : 0));
        setListOfEntities([...sortedEntities.map(entity => {
            if(!entity.pid) {
                return {...entity, pid: 'Ultimate'}
            }
            const pidName = group.entities.filter(index => index.id === parseInt(entity.pid))
            return {...entity, pid: pidName[0].name}
        })])
    }, [group.entities])

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

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to: GROUPS, active: false},
                {display: `GROUP ${group.name} : EDIT`, to: `${GROUPS}${EDIT_GROUP}`, active: true}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Edit Group</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <GroupInfo
                groupImage={group.avatar ? group.avatar : groupImage}
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
                <SaveButton >Save</SaveButton>
            </CreateGroupCancelSaveContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupEdit
