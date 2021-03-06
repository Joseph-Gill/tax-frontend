import Axios from '../../../axios'
import {setGroupOrgs} from '../../group/actions'


export const getMemberOrganizationNameAction = (groupId, userId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/orgs/group/${groupId}/user/${userId}/`, config)
        return response.data
    } catch(e) {
        console.log('error getting member organization>', e)
        return e
    }
}

export const createOrganizationForGroupAction = (orgData, groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.post(`/orgs/group/${groupId}/`, orgData, config)
        if (response.status === 201) {
            await dispatch(setGroupOrgs(response.data))
            return response
        }
    } catch(e) {
        console.log('error creating new organization>', e)
        return e
    }
}
