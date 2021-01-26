import {SET_404_ACTIVE, SET_404_INACTIVE} from './types'


const initialState = {
    page404Active: false
}

export const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_404_ACTIVE: {
            return {
                ...state,
                page404Active: true
            }
        }
        case SET_404_INACTIVE: {
            return {
                ...state,
                page404Active: false
            }
        }
        default:
            return state
    }
}
