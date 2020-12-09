import Axios from '../../../axios'
import {GET_GROUP} from '../types'
import {getProfileAction} from '../../profile/actions'


export const getGroup = data => {
    return {
        type: GET_GROUP,
        payload: data
    }
}

export const createGroupAction = groupInfo => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    let form_data = new FormData()
    form_data.append('name', groupInfo.name)
    form_data.append('avatar', groupInfo.avatar)
    form_data.append('entities', JSON.stringify(groupInfo.entities))
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        await Axios.post(`/groups/`, form_data, config)
        const {data} = await dispatch(getProfileAction())
        if (data) {
            return true
        }
    } catch(e) {
        console.log('error creating group')
        return e
    }
}
