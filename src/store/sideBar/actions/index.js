import {SET_404_ACTIVE, SET_404_INACTIVE} from '../types'


export const set404Active = () => {
    return {
        type: SET_404_ACTIVE
    }
}

export const set404Inactive = () => {
    return {
        type: SET_404_INACTIVE
    }
}
