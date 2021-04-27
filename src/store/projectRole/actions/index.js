import Axios from '../../../axios'
import {catchError} from '../../errors/actions/errorAction'


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

export const getProjectRolesForProjectAction = (groupId, projectId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/projectroles/group/${groupId}/project/${projectId}/`, config)
        return [...response.data]
    } catch (e) {
        console.log('Error getting User Project Roles with access to Specified Project>', e)
        return catchError(e, dispatch)
    }
}

export const toggleFavoriteProjectStatusAction = (userProfileId, projectId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`/projectroles/userprofile/${userProfileId}/project/${projectId}/`, {}, config)
    } catch (e) {
        console.log('Error toggling favorite status of a project')
        return catchError(e, dispatch)
    }
}
