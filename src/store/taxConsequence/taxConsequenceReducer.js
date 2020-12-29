import {ADD_NEW_TAX_CONSEQUENCE, GET_ALL_STEP_TAX_CONSEQUENCES} from './types'


const initialState = {
    taxConsequences: [],
    loaded: false
}

export const taxConsequenceReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_STEP_TAX_CONSEQUENCES: {
            return {
                taxConsequences: [...action.payload],
                loaded: true
            }
        }
        case ADD_NEW_TAX_CONSEQUENCE: {
            return {
                ...state,
                taxConsequences: [{
                    location: null,
                    type: '',
                    description: null,
                }].concat(state.taxConsequences)
            }
        }
        default:
            return state
    }
}
