import Axios from '../../../axios'
import {GET_PROJECT, RESET_PROJECT} from '../types'
import {getGroupAction} from '../../group/actions'
import {catchError} from '../../errors/actions/errorAction'


export const getProject = data => {
    return {
        type: GET_PROJECT,
        payload: data
    }
}

export const resetProject = () => {
    return {
        type: RESET_PROJECT
    }
}

export const getProjectAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/projects/project/${projectId}/`, config)
        const projectInfo = {
            ...response.data
        }
        dispatch(getProject(projectInfo))
        return projectInfo
    } catch(e) {
        console.log('Error getting specific project>', e)
        return catchError(e, dispatch)
    }
}

export const createProjectAction = (projectInfo, groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
        const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/projects/${groupId}/`, projectInfo, config)
    } catch (e) {
        console.log('error creating project>', e)
        return catchError(e, dispatch)
    }
}

export const updateProjectAction = (projectInfo, projectId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
        const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.patch(`/projects/project/${projectId}/`, projectInfo, config)
        if (response.status === 200) {
            return await dispatch(getGroupAction(response.data.group.id))
        }
    } catch (e) {
        console.log('error updating project>', e)
        return catchError(e, dispatch)
    }
}

export const getProjectStepsStatusesAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`steps/project/${projectId}/statusnumbers/`, config)
        return {...response.data}

    } catch (e) {
        console.log(`Error getting Steps Statuses of Project>`, e)
        return catchError(e, dispatch)
    }
}

export const getProjectTasksStatusesAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`tasks/project/${projectId}/statusnumbers/`, config)
        return {...response.data}
    } catch (e) {
        console.log(`Error getting Tasks Statuses of Project>`, e)
        return catchError(e, dispatch)
    }
}

export const getProjectFirstUncompletedStepAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`steps/project/${projectId}/firstuncompleted/`, config)
        if (response.status === 204) {
            return false
        } else {
            return {...response.data}
        }
    } catch (e) {
        console.log(`Error getting first uncompleted Step of Project>`, e)
        return catchError(e, dispatch)
    }
}

export const getProjectTaxConsequencesUnreviewedSameLocationAsUserAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`taxes/project/${projectId}/notreviewed/samecountry/`, config)
        return [...response.data]
    } catch (e) {
        console.log(`Error getting all Tax Consequences that are not reviewed and same location as logged-in User>`, e)
        return catchError(e, dispatch)
    }
}

export const getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`taxes/project/${projectId}/opencomments/toreviewcomments/`, config)
        return {...response.data}
    } catch (e) {
        console.log('Error getting Open and To Review Comment numbers of the logged-in User location>', e)
        return catchError(e, dispatch)
    }
}
