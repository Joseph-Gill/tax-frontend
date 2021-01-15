import React, {useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import Spinner from '../../components/Spinner'
import {updateProjectAction} from '../../store/project/actions'
import {EDIT_PROJECT, GROUPS, HOME, PROJECTS} from '../../routes/paths'
import {ProjectNameInput} from '../../style/inputs'
import {ProjectDescriptionTextArea} from '../../style/textarea'
import {CancelButton, SaveButton} from '../../style/buttons'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer,
    ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import ProjectStatusDropdown from './ProjectStatusDropdown'


const ProjectEdit = ({history}) => {
    const dispatch = useDispatch()
    let status = useRef('')
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const [projectName, setProjectName] = useState(project.name)
    const [projectDescription, setProjectDescription] = useState(project.description)

    useEffect(() => {
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [history, loaded])

    const saveProjectEditHandler = async () => {
        const newProjectInfo = {
            description: projectDescription,
            status: status.current.value
        }
        const response = await dispatch(updateProjectAction(newProjectInfo, project.id))
        if (response) {
            history.push(`${GROUPS}${PROJECTS}`)
        }
    }

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                        {display: `PROJECT : ${project.name}`, to: `${GROUPS}${PROJECTS}${EDIT_PROJECT}/${project.id}`, active: true}]}
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
                            <ProjectStatusDropdown
                                project={project}
                                status={status}
                            />
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
                        <SaveButton onClick={saveProjectEditHandler}>Save</SaveButton>
                    </ProjectSaveCancelButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectEdit
