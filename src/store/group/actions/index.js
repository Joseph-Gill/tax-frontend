import Axios from '../../../axios'
import {GET_GROUP, RESET_GROUP} from '../types'
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
        return e
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
    } catch(e) {
        return catchError(e, dispatch)
    }
}
