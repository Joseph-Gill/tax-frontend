import Axios from '../../../../axios'
import {LOGIN, LOGOUT} from '../../types'
import Cookie from 'js-cookie'
import {catchError} from '../../../errors/actions/errorAction'


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
            Cookie.set('token', data.access)
            Cookie.set('refresh', data.refresh)
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
    Cookie.remove('token')
    Cookie.remove('refresh')
    dispatch(logOut())
}

