import {GET_PROJECT, RESET_PROJECT} from './types'


const initialState = {
    project: {
        name: null,
        description: null,
        start_date: null,
        end_date: null,
        status: null,
        steps: null,
        group: null,
        assigned_user_roles: null
    },
    loaded: false
}

export const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROJECT: {
            return {
                project: {
                    ...action.payload
                },
                loaded: true
            }
        }
        case RESET_PROJECT: {
            return {
                ...state,
                project: {
                    name: null,
                    description: null,
                    start_date: null,
                    end_date: null,
                    status: null,
                    steps: null,
                    group: null,
                    assigned_user_roles: null
                },
                loaded: false
            }
        }
        default:
            return state
    }
}
