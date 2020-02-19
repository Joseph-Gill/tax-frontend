import {LOGIN, LOGOUT, UPDATE_USER} from './types'


const initialState = {
    accessToken: null,
    refreshToken: null,
    user: {
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        username: null,
        location: null,
        last_login: null,
        avatar: null,
    },
    authenticated: null
}

export const userLoginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:{
            return {
                ...state,
                accessToken: action.payload.access,
                refreshToken: action.payload.refresh,
                user: action.payload.user,
                authenticated: true,
            }
        }
        case LOGOUT:{
            return {...initialState}
        }
        case UPDATE_USER:{
            return {
                ...state,
                user: action.payload,
            }
        }
        default:
            return state
    }
}
