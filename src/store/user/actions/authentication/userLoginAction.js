import Axios from '../../../../axios'
import {LOGIN, LOGOUT, REFRESH} from '../../types'
import Cookie from 'js-cookie'
import {catchError} from '../../../errors/actions/errorAction'
import {getUserProfile} from '../user/userAction'


export const login = data => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const userLoginAction = ({email, password}) => async (dispatch) => {
    try {
        const {data} = await Axios.post(`auth/token/`, {email, password})
        if(data){
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
    Cookie.remove('refresh')
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

