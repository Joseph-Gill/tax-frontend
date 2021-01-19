import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'


export const getChartForStepAction = (projectId, stepNumber) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.get(`/charts/project/${projectId}/stepnumber/${stepNumber}/`, config)
    } catch (e) {
        console.log('Error getting chart for specific project step number>', e)
        return catchError(e, dispatch)
    }
}

export const createChartForStepAction = (projectId, stepNumber, chartData) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/charts/project/${projectId}/stepnumber/${stepNumber}/createchart/`, chartData, config)
    } catch (e) {
        console.log('Error creating chart for specific project step number>', e)
        return catchError(e, dispatch)
    }
}

export const updateChartForStepAction = (projectId, stepNumber, chartData) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.patch(`/charts/project/${projectId}/stepnumber/${stepNumber}/`, chartData, config)
    } catch (e) {
        console.log('Error updating chart for a specific project step number>', e)
        return catchError(e, dispatch)
    }
}

