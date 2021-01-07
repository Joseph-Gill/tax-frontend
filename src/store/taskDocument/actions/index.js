import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'


export const deleteTaskDocumentAction = taskDocumentId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.delete(`/taskdocuments/${taskDocumentId}/`, config)
    } catch (e) {
        console.log('Error deleting a specified Task Document>', e)
        return catchError(e, dispatch)
    }
}
