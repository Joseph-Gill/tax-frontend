import Axios from '../../../../axios'
import {LOGIN, LOGOUT, REFRESH} from '../../types'
import Cookie from 'js-cookie'
import {catchError, resetErrors} from '../../../errors/actions/errorAction'
import {getUserProfile} from '../user/userAction'

/* global gapi */


export const login = data => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const userLoginAction = ({email, password}) => async (dispatch) => {
    try {
        const {data} = await Axios.post(`auth/token/`, {email, password})
        if (data) {
            dispatch(login(data))
            Cookie.set('refresh', data.refresh, { expires: 30, sameSite: 'strict' })
            return data
        }
    } catch(e) {
        catchError(e, dispatch)
    }
}

export const userSocialLoginAction = ( id_token, backend ) => async (dispatch) => {
    const reqdata = { convert_token: id_token, backend }
    try {
        const {data} = await Axios.post(`social-auth/convert-token/`, reqdata)
        if (data){
            dispatch(login(data))
            Cookie.set('refresh', data.refresh, { expires: 30, sameSite: 'strict' })
            return data
        }
    } catch(e) {
        catchError(e, dispatch)
    }
}

const logOut = () => ({
    type: LOGOUT
})

export const userLogout = () => dispatch => {
    // If gapi.auth2 is defined, it was instantiated via Google social login and we need to sign out the AuthInstance
    gapi.auth2 && gapi.auth2.getAuthInstance().signOut()
    Cookie.remove('refresh')
    dispatch(resetErrors())
    dispatch(logOut())
}

const refreshAccessToken = data => ({
    type: REFRESH,
    payload: data
})

export const userRefreshTokenProfileAction = refresh => async (dispatch) => {
    try {
        const {data} = await Axios.post(`auth/token/refresh/`, refresh )
        if (data) {
            await dispatch(refreshAccessToken(data))
            await dispatch(getUserProfile(data.access))
            return data
        }
    } catch(e) {
        catchError(e, dispatch)
    }
}

