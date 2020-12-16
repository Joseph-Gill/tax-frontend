import Axios from '../../../axios'
import {GET_MEMBER, RESET_MEMBER} from '../types'


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
