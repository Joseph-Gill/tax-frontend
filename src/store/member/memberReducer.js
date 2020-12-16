import {GET_MEMBER, RESET_MEMBER} from './types'


const initialState = {
    member: {
        phone_number: null,
        user: null,
        organizations: null,
        groups: null,
        assigned_project_roles: null,
        assigned_tasks: null,
    },
    loaded: false
}

export const memberReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MEMBER: {
            return {
                member: {
                    ...action.payload
                },
                loaded: true
            }
        }
        case RESET_MEMBER: {
            return {
                ...state,
                member: {
                    phone_number: null,
                    user: null,
                    organizations: null,
                    groups: null,
                    assigned_project_roles: null,
                    assigned_tasks: null,
                },
                loaded: false
            }
        }
        default:
            return state
    }
}
