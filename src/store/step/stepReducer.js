import {DECREMENT_STEP_TO_VIEW, INCREMENT_STEP_TO_VIEW, RESET_STEP_TO_VIEW, SKIP_TO_SPECIFIED_STEP} from './types'


const initialState = {
    indexOfCurrentStepToDisplay: 0,
}

export const stepReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_STEP_TO_VIEW: {
            return {
                indexOfCurrentStepToDisplay: state.indexOfCurrentStepToDisplay++
            }
        }
        case DECREMENT_STEP_TO_VIEW: {
            return {
                indexOfCurrentStepToDisplay: state.indexOfCurrentStepToDisplay--
            }
        }
        case RESET_STEP_TO_VIEW: {
            return {
                indexOfCurrentStepToDisplay: 0
            }
        }
        case SKIP_TO_SPECIFIED_STEP: {
            return {
                indexOfCurrentStepToDisplay: action.payload
            }
        }
        default:
            return state
    }
}
