import Axios from '../../../axios'
import {ADD_NEW_TAX_CONSEQUENCE, GET_ALL_STEP_TAX_CONSEQUENCES, RESET_STEP_TAX_CONSEQUENCES} from '../types'
import {catchError, setError} from '../../errors/actions/errorAction'


export const getAllStepTaxConsequences = data => {
    return {
        type: GET_ALL_STEP_TAX_CONSEQUENCES,
        payload: data
    }
}

export const addNewTaxConsequence = () => {
    return {
        type: ADD_NEW_TAX_CONSEQUENCE
    }
}

export const resetStepTaxConsequences = () => {
    return {
        type: RESET_STEP_TAX_CONSEQUENCES
    }
}

export const getAllTaxConsequencesForStepAction = stepId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`taxes/step/${stepId}/`, config)
        const taxConsequences = [...response.data]
        dispatch(getAllStepTaxConsequences(taxConsequences))
        return taxConsequences
    } catch (e) {
        console.log('Error getting all Tax Consequences of Step>', e)
        return catchError(e, dispatch)
    }
}

export const createNewTaxConsequenceAction = (taxConsequenceData, stepId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`taxes/step/${stepId}/`, taxConsequenceData, config)
    } catch (e) {
        console.log('Error creating new Tax Consequence>', e)
        if ('description' in e.response.data) {
            const errorData = {
                tax_description: e.response.data['description']
            }
            if ('location' in e.response.data) {
                errorData.location = e.response.data['location']
            }
            return dispatch(setError(errorData))
        } else {
            return catchError(e, dispatch)
        }
    }
}

export const updateTaxConsequenceAction = (taxConsequenceData, taxConsequenceId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.patch(`taxes/tax/${taxConsequenceId}/`, taxConsequenceData, config)
    } catch (e) {
        console.log('Error updating a Tax Consequence>', e)
        if ('description' in e.response.data) {
            const errorData = {
                tax_description: e.response.data['description']
            }
            if ('location' in e.response.data) {
                errorData.location = e.response.data['location']
            }
            return dispatch(setError(errorData))
        } else {
            return catchError(e, dispatch)
        }
    }
}

export const deleteTaxConsequenceAction = (taxConsequenceId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.delete(`taxes/tax/${taxConsequenceId}/`, config)
    } catch (e) {
        console.log('Error deleting a Tax Consequence>', e)
        return catchError(e, dispatch)
    }
}

export const setReviewedTaxConsequenceAction = taxConsequenceId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`taxes/tax/${taxConsequenceId}/reviewed/`, config)
    } catch (e) {
        console.log('Error setting a Tax Consequence reviewed to True>', e)
        return catchError(e, dispatch)
    }
}

export const setNotReviewedTaxConsequenceAction = taxConsequenceId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`taxes/tax/${taxConsequenceId}/notreviewed/`, config)
    } catch (e) {
        console.log('Error setting a Tax Consequence reviewed to False>', e)
        return catchError(e, dispatch)
    }
}
