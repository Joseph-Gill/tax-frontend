import React, {useRef, useState, useEffect} from 'react'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {GROUPS, ADD_PROJECT, PROJECTS, HOME} from '../../routes/paths'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {ProjectNameInput} from '../../style/inputs'
import {CancelButton, SaveButton} from '../../style/buttons'
import {StatusDropdown} from '../../style/dropdowns'
import {DropdownOption} from '../../style/options'
import {ProjectDescriptionTextArea} from '../../style/textarea'
import {createProjectAction} from '../../store/project/actions'
import SuccessMessage from '../../components/SuccessMessage'
import {getProfileAction} from '../../store/profile/actions'
import {getGroupAction} from '../../store/group/actions'
import Spinner from '../../components/Spinner'


const ProjectAdd = ({history}) => {
    const dispatch = useDispatch()
    let status = useRef('')
    let name = useRef('')
    let description = useRef('')
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect (() => {
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [history, loaded])

    const clickSaveButtonHandler =  async () => {
        const projectData = {
            name: name.current.value,
            description: description.current.value,
            status: status.current.value
        }
        const response = await dispatch(createProjectAction(projectData, group.id))
        if (response.status === 201) {
            dispatch(getProfileAction())
            dispatch(getGroupAction(group.id))
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
            {!loaded ? <Spinner /> : (
                <>
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
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectAdd
