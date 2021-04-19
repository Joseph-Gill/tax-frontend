import React, {useState, useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { EditorState } from 'draft-js'
import BreadCrumb from '../../components/BreadCrumb'
import EditorHTML from '../../components/EditorHTML'
import ProjectStatusDropdown from './ProjectStatusDropdown'
import SuccessMessage from '../../components/SuccessMessage'
import LogoLoading from '../../components/LogoLoading'
import {updateProjectAction} from '../../store/project/actions'
import {getStepsForProjectAction} from '../../store/step/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {convertContentToHTML} from '../../helpers'
import {EDIT_PROJECT, GROUPS, HOME, PROJECTS} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {ProjectNameInput} from '../../style/inputs'
import {CancelButton, SaveButton} from '../../style/buttons'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer,
    ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import {ProjectEditErrorContainer} from './styles'


const ProjectEdit = ({history}) => {
    const dispatch = useDispatch()
    let status = useRef('')
    const error = useSelector(state => state.errorReducer.error)
    const group = useSelector(state => state.groupReducer.group)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.loaded)
    const [projectName, setProjectName] = useState(project.name)
    const [descriptionState, setDescriptionState] = useState(() => EditorState.createEmpty())
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        const getStepsForProject = async () => {
            return await dispatch(getStepsForProjectAction(project.id))
        }
        //Pushes to Home if group is not loaded due to page refresh
        if (!groupLoaded) {
            history.push(`${HOME}`)
        } else {
            getStepsForProject()
        }
    }, [history, groupLoaded, dispatch, project.id])

    const saveProjectEditHandler = async () => {
        dispatch(resetErrors())
        const newProjectInfo = {
            description: convertContentToHTML(descriptionState),
            status: status.current.value,
            name: projectName
        }
        const response = await dispatch(updateProjectAction(newProjectInfo, project.id))
        if (response) {
            setShowSuccess(!showSuccess)
        }
    }

    return (
        <AuthenticatedPageContainer>
            {showSuccess &&
            <SuccessMessage
                message="Your project has been successfully edited!"
                redirect={`${GROUPS}${PROJECTS}/${project.id}`}
            />}
            {!groupLoaded || !stepsLoaded ? <LogoLoading /> : (
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
                            <ProjectEditErrorContainer>
                                {error && <ErrorMessage>{error.name}</ErrorMessage>}
                            </ProjectEditErrorContainer>
                        </ProjectInputContainer>
                        <ProjectStatusDropdown
                            group={group}
                            project={project}
                            status={status}
                            steps={steps}
                        />
                    </AddEditProjectNameStatusContainer>
                    <AddEditProjectDescriptionContainer>
                        <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                        <EditorHTML
                            componentCalling='ProjectAddEdit'
                            editorState={descriptionState}
                            setEditorState={setDescriptionState}
                            textToLoad={project.description}
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
