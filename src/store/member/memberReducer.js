import {GET_MEMBER, RESET_MEMBER, RESET_MEMBER_FILTER_PROJECT_ID, SET_MEMBER_FILTER_PROJECT_ID} from './types'


const initialState = {
    member: {
        phone_number: null,
        user: null,
        organizations: null,
        groups: null,
        assigned_project_roles: null,
        assigned_tasks: null,
    },
    loaded: false,
    filterProjectId: ''
}

export const memberReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MEMBER: {
            return {
                ...state,
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
        case SET_MEMBER_FILTER_PROJECT_ID: {
            return {
                ...state,
                filterProjectId: action.payload
            }
        }
        case RESET_MEMBER_FILTER_PROJECT_ID: {
            return {
                ...state,
                filterProjectId: ''
            }
        }
        default:
            return state
    }
}
