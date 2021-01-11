import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'
import {GET_ALL_PROJECT_TASKS, RESET_TASK_FILTER_STEP_NUMBER, RESET_TASKS_FOR_PROJECT, SET_TASK_FILTER_STEP_NUMBER} from '../types'


export const getAllProjectTasks = data => {
    return {
        type: GET_ALL_PROJECT_TASKS,
        payload: data
    }
}

export const resetTasks = () => {
    return {
        type: RESET_TASKS_FOR_PROJECT
    }
}

export const setTaskFilterStepNumber = number => {
    return {
        type: SET_TASK_FILTER_STEP_NUMBER,
        payload: number
    }
}

export const resetTaskFilterStepNumber = () => {
    return {
        type: RESET_TASK_FILTER_STEP_NUMBER
    }
}

export const getTasksForProjectAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/tasks/project/${projectId}/`, config)
        const tasksInfo = [...response.data]
        dispatch(getAllProjectTasks(tasksInfo))
        return tasksInfo
    } catch (e) {
        console.log('Error getting all Tasks of Project>', e)
        return catchError(e, dispatch)
    }
}

export const createTaskAction = taskData => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let stepId = taskData.step_id
    let userprofileId = taskData.user_profile_id
    let form_data = new FormData()
    form_data.append('title', taskData.title)
    form_data.append('description', taskData.description)
    form_data.append('planned_completion_date', taskData.planned_completion_date)
    form_data.append('due_date', taskData.due_date)
    if (taskData.documents.length) {
        for (let i = 0; i < taskData.documents.length; i++) {
            form_data.append(taskData.documents[i].name, taskData.documents[i])
        }
    }
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        return await Axios.post(`/tasks/step/${stepId}/userprofile/${userprofileId}/`, form_data, config)
    } catch (e) {
        console.log('Error creating new Task>', e)
        return catchError(e, dispatch)
    }
}

export const deleteTaskAction = taskId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.delete(`/tasks/task/${taskId}/`, config)
    } catch (e) {
        console.log('Error deleting a specific Task>', e)
        return catchError(e, dispatch)
    }
}

export const updateTaskAction = (taskData, taskId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let form_data = new FormData()
    form_data.append('title', taskData.title)
    form_data.append('description', taskData.description)
    form_data.append('planned_completion_date', taskData.planned_completion_date)
    form_data.append('due_date', taskData.due_date)
    form_data.append('task_step', taskData.step_id)
    form_data.append('assigned_user_profile', taskData.user_profile_id)
    form_data.append('status', taskData.status)
    if (taskData.documents.length) {
        for (let i = 0; i < taskData.documents.length; i++) {
            form_data.append(taskData.documents[i].name, taskData.documents[i])
        }
    }
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        return await Axios.patch(`/tasks/task/${taskId}/`, form_data, config)
    } catch (e) {
        console.log('Error updating a Task>', e)
        return catchError(e, dispatch)
    }
}

export const getTasksForStepOfProject = (projectId, stepNumber) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/tasks/project/${projectId}/stepnumber/${stepNumber}/`, config)
        return [...response.data]
    } catch (e) {
        console.log('Error getting all Tasks of Step of Project>', e)
        return catchError(e, dispatch)
    }
}
