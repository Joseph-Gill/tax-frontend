import Axios from '../../../axios'
import {GET_MEMBER, RESET_MEMBER} from '../types'
import {getGroupAction} from '../../group/actions'


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
        return e
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
    } catch (e) {
        console.log('Error adding a member to a group>', e)
        return e
    }
}
