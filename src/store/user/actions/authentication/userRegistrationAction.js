import Axios from '../../../../axios'
import {catchError} from '../../../errors/actions/errorAction'


export const userRegistrationAction = email => async (dispatch) => {
    const body = {email}
    try {
        const response = await Axios.post(`auth/registration/`, body)
        if(response.status === 200) return true
    } catch(e) {
        return catchError(e, dispatch)
    }
}

export const registrationValidationAction = body => async (dispatch) => {
    try {
        const response = await Axios.patch(`auth/registration/validation/`, body)
        if(response.status === 200) return true
    } catch(e) {
        return catchError(e, dispatch)
    }
}
