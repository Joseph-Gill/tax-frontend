import Axios from '../../../axios'
import {GET_PROFILE} from '../types'

export const getProfile = data => {
    return {
        type: GET_PROFILE,
        payload: data
    }
}

export const getProfileAction = token => async (dispatch) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await Axios.get('userprofiles/me/', config)
    const userProfile = {
        ...response.data
    }
    dispatch(getProfile(userProfile))
}
