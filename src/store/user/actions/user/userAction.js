import Axios from '../../../../axios'
import {UPDATE_USER} from '../../types'
import {catchError} from '../../../errors/actions/errorAction'
import {login} from '../authentication/userLoginAction'


export const updateUser = data => {
    return {
        type: UPDATE_USER,
        payload: data
    }
}

export const getUserProfile = token => async (dispatch) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await Axios.get('users/me/', config)
    const user = {
        access: token,
        user: response.data
    }
    dispatch(login(user))
    return response
}

export const userUpdateAction = body => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let form_data = new FormData()
    form_data.append('username', body.username)
    form_data.append('first_name', body.first_name)
    form_data.append('last_name', body.last_name)
    form_data.append('location', body.location)
    form_data.append('avatar', body.avatar)
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        const {data} = await Axios.patch(`users/me/`, form_data, config)
        if(data){
            dispatch(updateUser(data))
            return true
        }
    } catch(e) {
        return catchError(e, dispatch)
    }
}

export const deleteUserProfileAction = (password) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        data: password,
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.delete('users/me/', config)
    } catch(e) {
        console.log('Error while deleting User>', e)
        return e
    }
}
