import Axios from '../../../axios'
import {getGroupAction} from '../../group/actions'
import {catchError, setError} from '../../errors/actions/errorAction'
import {GET_MEMBER, RESET_MEMBER, RESET_MEMBER_FILTER_PROJECT_ID, SET_MEMBER_FILTER_PROJECT_ID} from '../types'


export const getMember = data => {
    return {
        type: GET_MEMBER,
        payload: data
    }
}

export const resetMember = () => {
    return {
        type: RESET_MEMBER
    }
}

export const setMemberFilterProjectId = projectId => {
    return {
        type: SET_MEMBER_FILTER_PROJECT_ID,
        payload: projectId
    }
}

export const resetMemberFilterProjectId = () => {
    return {
        type: RESET_MEMBER_FILTER_PROJECT_ID
    }
}

export const getMemberAction = memberId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`userprofiles/userprofile/${memberId}/`, config)
        const memberInfo = {
            ...response.data
        }
        dispatch(getMember(memberInfo))
        return memberInfo
    } catch (e) {
        console.log('Error getting specific member>', e)
        return catchError(e, dispatch)
    }
}

export const addMemberToGroupAction = (memberEmail, groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.post(`groups/group/${groupId}/user/`, memberEmail, config)
        if (response.status === 201) {
            await dispatch(getGroupAction(groupId))
            return response
        }
        else if (response.status === 204) {
            dispatch(setError({detail: 'This New User has a pending Registration to verify.'}))
            return response
        }
    } catch (e) {
        return catchError(e, dispatch)
    }
}

export const removeMembersFromGroupAction = (removeData, groupId) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        data: removeData,
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        return await Axios.delete(`groups/group/${groupId}/removeusers/`, config)
    } catch (e) {
        console.log('Error removing members from a group>', e)
        return catchError(e, dispatch)
    }
}

export const getAccessUsersForProjectAction = projectId => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`
        }
    }
    try {
        const response = await Axios.get(`projects/project/${projectId}/accessusers/`, config)
        return [...response.data]
    } catch (e) {
        console.log('Error getting Users with access to Specified Project>', e)
        return catchError(e, dispatch)
    }
}
