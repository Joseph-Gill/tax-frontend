import {GET_PROFILE} from './types'


const initialState = {
    profile: {
        phone_number: null,
        organizations: null,
        groups: null,
        assigned_project_roles: null,
        assigned_task: null
    },
    loaded: false
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE: {
            return {
                profile: {
                    ...action.payload
                },
                loaded: true
            }
        }
        default:
            return state
    }
}
