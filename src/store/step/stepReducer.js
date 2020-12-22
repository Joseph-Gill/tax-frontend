import {DECREMENT_STEP_TO_VIEW, INCREMENT_STEP_TO_VIEW, RESET_STEP_TO_VIEW} from './types'


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
        default:
            return state
    }
}
