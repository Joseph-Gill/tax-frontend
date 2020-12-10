import Axios from '../../../axios'
import {GET_PROFILE} from '../types'
import {catchError} from '../../errors/actions/errorAction'


export const getProfile = data => {
    return {
        type: GET_PROFILE,
        payload: data
    }
}

export const getProfileAction = () => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get('userprofiles/me/', config)
        const userProfile = {
            ...response.data
        }
        dispatch(getProfile(userProfile))
        return userProfile
    } catch(e) {
        console.log('Error getting logged in user profile>', e)
    }
}

export const updateProfileAction = updatedInfo => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        },
    }
    try  {
        return await Axios.patch(`userprofiles/me/`, updatedInfo, config)
    } catch(e) {
        return catchError(e, dispatch)
    }
}
