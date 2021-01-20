import {GET_GROUP, RESET_GROUP, SET_GROUP_ORGS} from './types'


const initialState = {
    group: {
        name: null,
        avatar: null,
        entities: null,
        projects: null,
        organizations: null,
        users: []
    },
    loaded: false
}

export const groupReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GROUP: {
            return {
                group: {
                    ...action.payload
                },
                loaded: true
            }
        }
        case RESET_GROUP: {
            return {
                ...state,
                group: {
                    name: null,
                    avatar: null,
                    entities: null,
                    projects: null,
                    organizations: null,
                    users: null
                },
                loaded: false
            }
        }
        case SET_GROUP_ORGS: {
            return {
                ...state,
                group: {
                    ...state.group,
                    organizations: action.payload
                }
            }

        }
        default:
            return state
    }
}
