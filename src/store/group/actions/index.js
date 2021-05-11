import Axios from '../../../axios'
import {GET_GROUP, RESET_GROUP, SET_GROUP_ORGS} from '../types'
import {getProfileAction} from '../../profile/actions'
import {catchError} from '../../errors/actions/errorAction'


export const getGroup = data => {
    return {
        type: GET_GROUP,
        payload: data
    }
}

export const resetGroup = () => {
    return {
        type: RESET_GROUP
    }
}

export const setGroupOrgs = data => {
    return {
        type: SET_GROUP_ORGS,
        payload: data
    }
}

export const getGroupAction = groupId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`/groups/group/${groupId}/`, config)
        const groupInfo = {
            ...response.data
        }
        dispatch(getGroup(groupInfo))
        return groupInfo
    } catch(e) {
        console.log('Error getting specific group>', e)
        return catchError(e, dispatch)
    }
}

export const createGroupAction = groupInfo => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let form_data = new FormData()
    form_data.append('name', groupInfo.name)
    if (groupInfo.avatar) {
        form_data.append('avatar', groupInfo.avatar)
    }
    form_data.append('entities', JSON.stringify(groupInfo.entities))
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        const response = await Axios.post(`/groups/`, form_data, config)
        if (response.status === 201) {
            await dispatch(getProfileAction())
            return true
        }
    } catch (e) {
        return catchError(e, dispatch)
    }
}

export const updateGroupAction = (updatedGroupInfo, groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let form_data = new FormData()
    if (updatedGroupInfo.avatar) {
        form_data.append('avatar', updatedGroupInfo.avatar)
    }
    form_data.append('entities', JSON.stringify(updatedGroupInfo.entities))
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        const response = await Axios.patch(`/groups/group/${groupId}/`, form_data, config)
        if (response.status === 200) {
            await dispatch(getProfileAction())
            return true
        }
    } catch(e) {
        console.log('error updating group>', e)
        return catchError(e, dispatch)
    }
}

export const getGroupOfProjectAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`groups/project/${projectId}/`, config)
        const groupInfo = {
            ...response.data
        }
        dispatch(getGroup(groupInfo))
        return groupInfo
    } catch (e) {
        console.log('Error getting group for specified project', e)
        return catchError(e, dispatch)
    }
}

export const getUserFavoriteGroupsAction = () => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.get(`groups/allandfavorite/`, config)
    } catch (e) {
        console.log('Error getting all favorite and groups for user', e)
        return catchError(e, dispatch)
    }
}

export const toggleFavoriteGroupStatusAction = (groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.post(`groups/group/${groupId}/favorite/`, {}, config)
    } catch (e) {
        console.log('Error toggling favorite status of a group')
        return catchError(e, dispatch)
    }
}
