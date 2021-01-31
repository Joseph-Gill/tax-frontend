import React, {useRef, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../../components/Spinner'
import BreadCrumb from '../../components/BreadCrumb'
import SuccessMessage from '../../components/SuccessMessage'
import ProjectAddStatusDropdown from './ProjectAddStatusDropdown'
import {getGroupAction} from '../../store/group/actions'
import {getProfileAction} from '../../store/profile/actions'
import {createProjectAction} from '../../store/project/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {GROUPS, ADD_PROJECT, PROJECTS, HOME} from '../../routes/paths'
import {ErrorMessage} from '../../style/messages'
import {ProjectNameInput} from '../../style/inputs'
import {ProjectDescriptionTextArea} from '../../style/textarea'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {AddEditProjectDescriptionContainer, AddEditProjectNameStatusContainer, AuthenticatedPageContainer, AuthenticatedPageTitleContainer, ProjectInputContainer, ProjectSaveCancelButtonContainer} from '../../style/containers'
import {CancelButton, SaveButton} from '../../style/buttons'
import {ProjectAddErrorContainer} from './styles'


const ProjectAdd = ({history}) => {
    const dispatch = useDispatch()
    let status = useRef('')
    let name = useRef('')
    let description = useRef('')
    const error = useSelector(state => state.errorReducer.error)
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect (() => {
        //Pushes to Home is group is not loaded due to page refresh
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [history, loaded])

    const clickSaveButtonHandler =  async () => {
        dispatch(resetErrors())
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
                            <ProjectAddErrorContainer>
                                {error && <ErrorMessage>{error.name}</ErrorMessage>}
                            </ProjectAddErrorContainer>
                        </ProjectInputContainer>
                        <ProjectInputContainer>
                            <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                            <ProjectAddStatusDropdown status={status} />
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
                        <CancelButton onClick={cancelButtonHandler} >Cancel</CancelButton>
                        <SaveButton onClick={clickSaveButtonHandler}>Save</SaveButton>
                    </ProjectSaveCancelButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectAdd
