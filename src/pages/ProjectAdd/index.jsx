import React, {useRef} from 'react'
import {useHistory} from 'react-router-dom'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {useSelector} from 'react-redux'
import {GROUPS, ADD_PROJECT, PROJECTS} from '../../routes/paths'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {ProjectNameInput} from '../../style/inputs'
import {CancelButton, SaveButton} from '../../style/buttons'
import {StatusDropdown} from '../../style/dropdowns'
import {DropdownOption} from '../../style/options'
import {ProjectDescriptionTextArea} from '../../style/textarea'


const ProjectAdd = () => {
    const group = useSelector(state => state.groupReducer.group)
    const name = useRef('')
    const history = useHistory()

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to:GROUPS},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`},
                {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`},
                {display: 'PROJECT : ADD', to: `${GROUPS}${PROJECTS}${ADD_PROJECT}`}]}
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
                    <StatusDropdown>
                        {/*<DropdownOption value='' disabled selected>Select a status</DropdownOption>*/}
                        <DropdownOption selected value='Not Started'>Not Started</DropdownOption>
                        {/*<DropdownOption value='Ongoing'>Ongoing</DropdownOption>*/}
                        {/*<DropdownOption value='Not Implemented'>Not Implemented</DropdownOption>*/}
                        {/*<DropdownOption value='Completed'>Completed</DropdownOption>*/}
                    </StatusDropdown>
                </ProjectInputContainer>
            </AddEditProjectNameStatusContainer>
            <AddEditProjectDescriptionContainer>
                <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                <ProjectDescriptionTextArea
                    placeholder='Write your project description...'
                />
            </AddEditProjectDescriptionContainer>
            <ProjectSaveCancelButtonContainer>
                <CancelButton onClick={() => history.push(`${GROUPS}/${group.id}`)} >Cancel</CancelButton>
                <SaveButton>Save</SaveButton>
            </ProjectSaveCancelButtonContainer>
        </AuthenticatedPageContainer>

    )
}

export default ProjectAdd
