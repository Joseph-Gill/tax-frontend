import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'


export const createEntityForChart = (groupId, entityData) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/entities/group/${groupId}/`, entityData, config)
    } catch(e) {
        console.log('Error creating entity for specific group>', e)
        return catchError(e, dispatch)
    }
}
