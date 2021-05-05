import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'


export const createEntityHistoryForChart = (entityId, chartId, historyData) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/entityhistories/entity/${entityId}/chart/${chartId}/`, historyData, config)
    } catch(e) {
        console.log('Error creating entity history for specific entity and chart>', e)
        return catchError(e, dispatch)
    }
}
