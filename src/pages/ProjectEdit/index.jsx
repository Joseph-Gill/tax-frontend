import React, {useState} from 'react'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import {EDIT_PROJECT, GROUPS, PROJECTS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {ProjectNameInput} from '../../style/inputs'
import {StatusDropdown} from '../../style/dropdowns'
import {DropdownOption} from '../../style/options'
import {ProjectDescriptionTextArea} from '../../style/textarea'
import {CancelButton, SaveButton} from '../../style/buttons'


const ProjectEdit = () => {
    const group = useSelector(state => state.groupReducer.group)
    const project = useSelector(state => state.projectReducer.project)
    const [projectName, setProjectName] = useState(project.name)
    const [projectDescription, setProjectDescription] = useState(project.description)
    const history = useHistory()

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to:GROUPS},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`},
                {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`},
                {display: `PROJECT : ${project.name}`, to: `${GROUPS}${PROJECTS}${EDIT_PROJECT}/${project.id}`}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Edit Project</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <AddEditProjectNameStatusContainer>
                <ProjectInputContainer>
                    <AddEditProjectSectionTitles>Project Name</AddEditProjectSectionTitles>
                    <ProjectNameInput
                        name='name'
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder='Enter your project name'
                        type='text'
                        value={projectName}
                    />
                </ProjectInputContainer>
                <ProjectInputContainer>
                    <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                    <StatusDropdown>
                        <DropdownOption disabled selected value=''>Select a status</DropdownOption>
                        <DropdownOption value='Not Started'>Not Started</DropdownOption>
                        <DropdownOption value='Ongoing'>Ongoing</DropdownOption>
                        <DropdownOption value='Not Implemented'>Not Implemented</DropdownOption>
                        <DropdownOption value='Completed'>Completed</DropdownOption>
                    </StatusDropdown>
                </ProjectInputContainer>
            </AddEditProjectNameStatusContainer>
            <AddEditProjectDescriptionContainer>
                <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                <ProjectDescriptionTextArea
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder='Write your project description...'
                    value={projectDescription}
                />
            </AddEditProjectDescriptionContainer>
            <ProjectSaveCancelButtonContainer>
                <CancelButton onClick={() => history.push(`${GROUPS}/${group.id}`)} >Cancel</CancelButton>
                <SaveButton>Save</SaveButton>
            </ProjectSaveCancelButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default ProjectEdit
