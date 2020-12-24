import {ADD_NEW_STEP, DECREMENT_STEP_TO_VIEW, GET_ALL_PROJECT_STEPS, INCREMENT_STEP_TO_VIEW, RESET_STEP_TO_VIEW, RESET_STEPS_FOR_PROJECT, SKIP_TO_SPECIFIED_STEP} from './types'


const initialState = {
    indexOfCurrentStepToDisplay: 0,
    steps: [],
    loaded: false
}

export const stepReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_STEP_TO_VIEW: {
            return {
                ...state,
                indexOfCurrentStepToDisplay: state.indexOfCurrentStepToDisplay++,
            }
        }
        case DECREMENT_STEP_TO_VIEW: {
            return {
                ...state,
                indexOfCurrentStepToDisplay: state.indexOfCurrentStepToDisplay--,
            }
        }
        case RESET_STEP_TO_VIEW: {
            return {
                ...state,
                indexOfCurrentStepToDisplay: 0,
            }
        }
        case SKIP_TO_SPECIFIED_STEP: {
            return {
                ...state,
                indexOfCurrentStepToDisplay: action.payload,
            }
        }
        case GET_ALL_PROJECT_STEPS: {
            return {
                ...state,
                steps : action.payload,
                loaded: true
            }
        }
        case ADD_NEW_STEP: {
            return {
                ...state,
                steps: [...state.steps, {
                        chart: null,
                        description: '',
                        effective_date: null,
                        id: null,
                        number: action.payload,
                        status: null,
                        tax_consequences: [],
                        tasks: []
                    }]
            }
        }
        case RESET_STEPS_FOR_PROJECT: {
            return {
                ...initialState
            }
        }
        default:
            return state
    }
}
