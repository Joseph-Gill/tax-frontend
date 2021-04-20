import React, {useRef, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { EditorState } from 'draft-js'
import EditorHTML from '../../components/EditorHTML'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import ProjectStatusDropdown from './ProjectStatusDropdown'
import SuccessMessage from '../../components/SuccessMessage'
import {getGroupAction} from '../../store/group/actions'
import {getProfileAction} from '../../store/profile/actions'
import {createProjectAction} from '../../store/project/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {convertContentToHTML} from '../../helpers'
import {GROUPS, ADD_PROJECT, PROJECTS, HOME} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {ProjectNameInput} from '../../style/inputs'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer,
    AuthenticatedPageTitleContainer, ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import {CancelButton, SaveButton} from '../../style/buttons'
import {ProjectAddErrorContainer} from './styles'


const ProjectAdd = ({history}) => {
    const dispatch = useDispatch()
    let name = useRef('')
    const error = useSelector(state => state.errorReducer.error)
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const [showSuccess, setShowSuccess] = useState(false)
    const [descriptionState, setDescriptionState] = useState(() => EditorState.createEmpty())
    const [showProjectStatus, setShowProjectStatus] = useState(false)
    const [projectStatus, setProjectStatus] = useState('')

    useEffect (() => {
        //Pushes to Home is group is not loaded due to page refresh
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [history, loaded])

    const clickSaveButtonHandler =  async () => {
        // console.log(convertContentToHTML(descriptionState))
        dispatch(resetErrors())
        const projectData = {
            name: name.current.value,
            description: convertContentToHTML(descriptionState),
            status: projectStatus
        }
        const response = await dispatch(createProjectAction(projectData, group.id))
        if (response.status === 201) {
            dispatch(getProfileAction())
            dispatch(getGroupAction(group.id))
            setShowSuccess(!showSuccess)
        }
    }

    const handleSelectProjectStatusChange = status => {
        setProjectStatus(status)
        setShowProjectStatus(false)
    }

    const cancelButtonHandler = () => {
        dispatch(resetErrors())
        history.push(`${GROUPS}/${group.id}`)
    }

    return (
        <AuthenticatedPageContainer>
            {showSuccess &&
            <SuccessMessage
                message="Your project has been successfully created!"
                redirect={`${GROUPS}${PROJECTS}`}
            />}
            {!loaded ? <LogoLoading /> : (
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
                            <ProjectAddErrorContainer>
                                {error && <ErrorMessage>{error.name}</ErrorMessage>}
                            </ProjectAddErrorContainer>
                        </ProjectInputContainer>
                        <ProjectInputContainer>
                            <ProjectStatusDropdown
                                error={error}
                                group={group}
                                handleSelectProjectStatusChange={handleSelectProjectStatusChange}
                                projectStatus={projectStatus}
                                setShowProjectStatus={setShowProjectStatus}
                                showProjectStatus={showProjectStatus}
                            />
                        </ProjectInputContainer>
                    </AddEditProjectNameStatusContainer>
                    <AddEditProjectDescriptionContainer>
                        <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                        <EditorHTML
                            componentCalling='ProjectAddEdit'
                            editorState={descriptionState}
                            setEditorState={setDescriptionState}
                        />
                    </AddEditProjectDescriptionContainer>
                    <ProjectSaveCancelButtonContainer>
                        <CancelButton onClick={cancelButtonHandler} >Cancel</CancelButton>
                        <SaveButton onClick={clickSaveButtonHandler}>Save</SaveButton>
                    </ProjectSaveCancelButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectAdd
