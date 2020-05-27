import {RESET_ERRORS, SET_ERROR} from '../types'

export const catchError = (e, dispatch) => {
    try {
        dispatch(setError(e.response.data))
    } catch(e) {
        dispatch(setError({detail: 'The monkeys powering our servers have escaped. Try again.'}))
    }
    return false
}

export const setError = data => ({
    type: SET_ERROR,
    payload: data
})

export const resetErrors = () => ({
    type: RESET_ERRORS
})