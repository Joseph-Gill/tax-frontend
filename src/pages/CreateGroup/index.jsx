import React, {useRef, useState} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import GroupInfo from './GroupInfo'
import EntityInfo from './EntityInfo'


const CreateGroup = () => {
    let groupName = useRef('')
    let hiddenFileInput = useRef(null)
    let entityName = useRef('')
    let parentName = useRef('')
    let taxRate = useRef('')
    let legalForm = useRef('')
    const [groupImage, setGroupImage] = useState(null)
    const [countryName, setCountryName] = useState('')
    const [availableParentNames, setAvailableParentNames] = useState([])

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
            <EntityInfo
                availableParentNames={availableParentNames}
                countryName={countryName}
                entityName={entityName}
                legalForm={legalForm}
                parentName={parentName}
                setAvailableParentNames={setAvailableParentNames}
                setCountryName={setCountryName}
                taxRate={taxRate}
            />
        </AuthenticatedPageContainer>
    )
}

export default CreateGroup
