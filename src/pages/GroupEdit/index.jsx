import React, {useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {EDIT_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import GroupInfo from '../../components/GroupInfo'


const GroupEdit = () => {
    const group = useSelector(state => state.groupReducer.group)
    let hiddenFileInput = useRef(null)
    const [groupImage, setGroupImage] = useState(null)

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
        </AuthenticatedPageContainer>
    )
}

export default GroupEdit
