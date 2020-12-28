import Axios from '../../../axios'
import {ADD_NEW_STEP, DECREMENT_STEP_TO_VIEW, GET_ALL_PROJECT_STEPS, INCREMENT_STEP_TO_VIEW, RESET_STEP_TO_VIEW, RESET_STEPS_FOR_PROJECT, SKIP_TO_SPECIFIED_STEP} from '../types'
import {catchError} from '../../errors/actions/errorAction'


export const incrementStepToView = () => {
    return {
        type: INCREMENT_STEP_TO_VIEW
    }
}

export const decrementStepToView = () => {
    return {
        type: DECREMENT_STEP_TO_VIEW
    }
}

export const resetStepToView = () => {
    return {
        type: RESET_STEP_TO_VIEW
    }
}

export const skipToSpecifiedStep = index => {
    return {
        type: SKIP_TO_SPECIFIED_STEP,
        payload: index
    }
}

export const getAllProjectSteps = data => {
    return {
        type: GET_ALL_PROJECT_STEPS,
        payload: data
    }
}

export const addNewStep = number => {
    return {
        type: ADD_NEW_STEP,
        payload: number
    }
}

export const resetSteps = () => {
    return {
        type: RESET_STEPS_FOR_PROJECT
    }
}

export const getStepsForProjectAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/steps/project/${projectId}/`, config)
        const stepsInfo = [...response.data]
        dispatch(getAllProjectSteps(stepsInfo))
        return stepsInfo
    } catch (e) {
        console.log('Error getting all Steps of Project>', e)
        return catchError(e, dispatch)
    }
}

export const createNewStepAction = (stepData, projectId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/steps/project/${projectId}/`, stepData, config)
    } catch (e) {
        console.log('Error creating a new Step>', e)
        return catchError(e, dispatch)
    }
}

export const updateStepAction = (stepData, stepId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.patch(`/steps/step/${stepId}/`, stepData, config)
    } catch (e) {
        console.log('Error updating a Step>', e)
        return catchError(e, dispatch)
    }
}


