import {GET_ALL_PROJECT_TASKS, RESET_TASKS_FOR_PROJECT} from './types'


const initialState = {
    tasks: [],
    loaded: false
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
        default:
            return state
    }
}