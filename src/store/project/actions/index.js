import Axios from '../../../axios'
import {GET_PROJECT, RESET_PROJECT} from '../types'


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
        return e
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
        return e
    }
}