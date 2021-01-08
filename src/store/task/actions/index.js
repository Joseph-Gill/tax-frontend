import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'
import {GET_ALL_PROJECT_TASKS, RESET_TASKS_FOR_PROJECT} from '../types'


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

export const createTaskAction = taskInfo => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let stepId = taskInfo.step_id
    let userprofileId = taskInfo.user_profile_id
    let form_data = new FormData()
    form_data.append('title', taskInfo.title)
    form_data.append('description', taskInfo.description)
    form_data.append('planned_completion_date', taskInfo.planned_completion_date)
    form_data.append('due_date', taskInfo.due_date)
    if (taskInfo.documents.length) {
        for (let i = 0; i < taskInfo.documents.length; i++) {
            form_data.append(taskInfo.documents[i].name, taskInfo.documents[i])
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
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.patch(`/tasks/task/${taskId}/`, taskData, config)
    } catch (e) {
        console.log('Error updating a Task>', e)
        return catchError(e, dispatch)
    }
}
