import Axios from '../../../axios'


export const getRolesForProfileGroupAction = (profileId, groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/projectroles/userprofile/${profileId}/group/${groupId}/`, config)
        return response.data
    } catch(e) {
        console.log('Error getting project roles>', e)
        return e
    }
}

export const updateRolesForProfileGroupAction = (memberProjectAccess, groupId, userProfileId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/userprofiles/group/${groupId}/userprofile/${userProfileId}/`, memberProjectAccess, config)
    } catch(e) {
        console.log('Error updating a member>', e)
        return e
    }
}
