import React, {useRef, useState} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import styled from 'styled-components/macro'
import GroupInfo from './GroupInfo'
import EntityInfo from './EntityInfo'


const CreateGroup = () => {
    let groupName = useRef('')
    let hiddenFileInput = useRef(null)
    const [groupImage, setGroupImage] = useState(null)

    const imageClickHandler = () => {
        hiddenFileInput.current.click();
    }

    const imageChangeHandler = (e) => {
        if (e.target.files[0]) {
            setGroupImage(e.target.files[0])
        }
    }

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
            <EntityInfo />
        </AuthenticatedPageContainer>
    )
}

export default CreateGroup
