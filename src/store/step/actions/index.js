import {DECREMENT_STEP_TO_VIEW, INCREMENT_STEP_TO_VIEW, RESET_STEP_TO_VIEW, SKIP_TO_SPECIFIED_STEP} from '../types'


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

export const skipToSpecifiedStep = stepNum => {
    return {
        type: SKIP_TO_SPECIFIED_STEP,
        payload: stepNum
    }
}
