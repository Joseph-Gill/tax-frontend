import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'

export const createTaskAction = taskInfo => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let stepId = taskInfo.step_id
    let userprofileId = taskInfo.user_profile_id
    let form_data = new FormData()
    form_data.append('title', taskInfo.title)
    form_data.append('description', taskInfo.description)
    form_data.append('planned_completion_date', taskInfo.planned_completion_date)
    form_data.append('due_date', taskInfo.due_date)

    // Need to develop a way to handle multiple files
    // if (taskInfo.documents.length) {
    //     form_data.append('documents', taskInfo.documents)
    // }
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
