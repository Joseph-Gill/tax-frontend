import Axios from '../../../../axios'
import {GET_GROUP} from '../types'


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
    form_data.append('entities', groupInfo.entities)
    form_data.append('avatar', groupInfo.avatar)
    const config = {
        headers: {
            'Authorization': `Bearer ${userLoginReducer.accessToken}`,
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        const {data} = await Axios.post(`/groups/`, form_data, config)
        if (data) {
            dispatch(getGroup(data))
            return true
        }
    } catch(e) {
        console.log('error creating group')
        return e
    }
}
