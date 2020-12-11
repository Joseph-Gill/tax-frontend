import React, {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {GROUPS, ADD_PROJECT, PROJECTS} from '../../routes/paths'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {ProjectNameInput} from '../../style/inputs'
import {CancelButton, SaveButton} from '../../style/buttons'
import {StatusDropdown} from '../../style/dropdowns'
import {DropdownOption} from '../../style/options'
import {ProjectDescriptionTextArea} from '../../style/textarea'
import {createProjectAction} from '../../store/project/actions'
import SuccessMessage from '../../components/SuccessMessage'
import {getProfileAction} from '../../store/profile/actions'


const ProjectAdd = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    const group = useSelector(state => state.groupReducer.group)
    const status = useRef('')
    const name = useRef('')
    const description = useRef('')
    const history = useHistory()
    const dispatch = useDispatch()

    const clickSaveButtonHandler =  async () => {
        const projectData = {
            name: name.current.value,
            description: description.current.value,
            status: status.current.value
        }
        const response = await dispatch(createProjectAction(projectData, group.id))
        if (response.status === 201) {
            dispatch(getProfileAction())
            setShowSuccess(!showSuccess)
        }
    }

    return (
        <AuthenticatedPageContainer>
            {showSuccess &&
            <SuccessMessage
                message="Your project has been successfully created!"
                redirect={`${GROUPS}${PROJECTS}`}
            />}
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to: GROUPS, active: false},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                {display: 'PROJECT : ADD', to: `${GROUPS}${PROJECTS}${ADD_PROJECT}`, active: true}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Add Project</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <AddEditProjectNameStatusContainer>
                <ProjectInputContainer>
                    <AddEditProjectSectionTitles>Project Name</AddEditProjectSectionTitles>
                    <ProjectNameInput
                        name='name'
                        placeholder='Enter your project name'
                        ref={name}
                        type='text'
                    />
                </ProjectInputContainer>
                <ProjectInputContainer>
                    <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                    <StatusDropdown
                        ref={status}
                    >
                        <DropdownOption value='Not Started'>Not Started</DropdownOption>
                    </StatusDropdown>
                </ProjectInputContainer>
            </AddEditProjectNameStatusContainer>
            <AddEditProjectDescriptionContainer>
                <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                <ProjectDescriptionTextArea
                    placeholder='Write your project description...'
                    ref={description}
                />
            </AddEditProjectDescriptionContainer>
            <ProjectSaveCancelButtonContainer>
                <CancelButton onClick={() => history.push(`${GROUPS}/${group.id}`)} >Cancel</CancelButton>
                <SaveButton onClick={clickSaveButtonHandler}>Save</SaveButton>
            </ProjectSaveCancelButtonContainer>
        </AuthenticatedPageContainer>

    )
}

export default ProjectAdd
