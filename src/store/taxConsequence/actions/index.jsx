import Axios from '../../../axios'
import {ADD_NEW_TAX_CONSEQUENCE, GET_ALL_STEP_TAX_CONSEQUENCES} from '../types'
import {catchError} from '../../errors/actions/errorAction'


export const getAllTaxConsequencesStep = data => {
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
        dispatch(getAllTaxConsequencesStep(taxConsequences))
        return taxConsequences
    } catch (e) {
        console.log('Error getting all Tax Consequences of Step>', e)
        return catchError(e, dispatch)
    }
}
