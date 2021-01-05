import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'

export const createTaskAction = taskInfo => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let stepId = taskInfo.step_id
    let userprofileId = taskInfo.user_profile_id
    let form_data = new FormData()

    // append Form Data

    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        return await Axios.post(`/tasks/step/${stepId}/userprofile/${userprofileId}/`, form_data, config)
    } catch (e) {
        console.log('Error creating new Task>', e)
        return catchError(e, dispatch)
    }
}
