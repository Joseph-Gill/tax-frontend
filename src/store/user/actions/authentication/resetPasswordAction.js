import Axios from '../../../../axios'
import {catchError} from '../../../errors/actions/errorAction'


export const resetPassword = email => async (dispatch) => {
    const data = {email}
    const headers = new Headers({
        'Content-type': 'application/json'
    })
    const config = {headers}
    try {
        const result = await Axios.post(`auth/password-reset/`, data, config)
        if(result.status === 200) return true
    } catch(e) {
        return catchError(e, dispatch)
    }
}

export const restPasswordValidate = ({email, code, password, password_repeat}) => async (dispatch) => {
    const data = {
        email,
        code,
        password,
        password_repeat
    }
    const headers = new Headers({
        'Content-type': 'application/json'
    })
    const config = {headers}
    try {
        const result = await Axios.patch(`auth/password-reset/validation/`, data, config)
        if(result.status === 200) return true
    } catch(e) {
        return catchError(e, dispatch)
    }
}
