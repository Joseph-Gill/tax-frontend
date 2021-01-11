import {GET_ALL_PROJECT_TASKS, RESET_TASK_FILTER_STEP_NUMBER, RESET_TASKS_FOR_PROJECT, SET_TASK_FILTER_STEP_NUMBER} from './types'


const initialState = {
    tasks: [],
    loaded: false,
    filterStepNumber: '',
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_PROJECT_TASKS: {
            return {
                ...state,
                tasks: action.payload,
                loaded: true
            }
        }
        case RESET_TASKS_FOR_PROJECT: {
            return {
                ...state,
                tasks: [],
                loaded: false
            }
        }
        case SET_TASK_FILTER_STEP_NUMBER: {
            return {
                ...state,
                filterStepNumber: action.payload
            }
        }
        case RESET_TASK_FILTER_STEP_NUMBER: {
            return {
                ...state,
                filterStepNumber: ''
            }
        }
        default:
            return state
    }
}
