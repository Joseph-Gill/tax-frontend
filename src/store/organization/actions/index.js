import Axios from '../../../axios'


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
