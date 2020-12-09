import {GET_GROUP} from './types'


const initialState = {
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
        default:
            return state
    }
}
