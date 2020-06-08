import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {resetErrors} from '../store/errors/actions/errorAction'
import {useLocation} from 'react-router-dom'

// Example Hook
// export const useAdministeredUsers = (forceFetch = false) => {
//     const dispatch = useDispatch()
//     const reduxAdministeredUsers = useSelector(state => state.jobsReducer.administeredUsers)
//
//     useEffect(() => {
//         if(reduxAdministeredUsers.length > 0 && forceFetch === false){
//             return
//         }
//         const administeredUsers = async () => {
//             await dispatch(getAdministeredUsers())// this action needs to dispatch data to the redux store so that useSelector triggers a re render.
//         }
//         administeredUsers()
//     }, [dispatch, forceFetch, reduxAdministeredUsers])
//     return reduxAdministeredUsers
// }


export const useResetErrors = () => {
    // Removes errors when component unmounts
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [dispatch])
}

export const useCode = (param) => {
    /*
    Extracts code from query string for Registration Validation and Password Reset.
    Can be used for other parameters in query string.
    */
    const code = new URLSearchParams(useLocation().search)
    return code.get(param)
}


// HOOK to SET the user BROWSER once the app loads

// export const useSetBrowser = () => {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         if(navigator.userAgent.indexOf('Chrome') !== -1){
//             dispatch(setBrowser('Google Chrome'))
//         } else if(navigator.userAgent.indexOf('Firefox') !== -1){
//             dispatch(setBrowser('Mozilla Firefox'))
//         } else if(navigator.userAgent.indexOf('MSIE') !== -1){
//             dispatch(setBrowser('Internet Explorer'))
//         } else if(navigator.userAgent.indexOf('Edge') !== -1){
//             dispatch(setBrowser('Internet Explorer Edge'))
//         } else if(navigator.userAgent.indexOf('Safari') !== -1){
//             dispatch(setBrowser('Safari'))
//         } else if(navigator.userAgent.indexOf('Opera') !== -1){
//             dispatch(setBrowser('Opera'))
//         } else {
//             dispatch(setBrowser('Unknown Browser'))
//         }
//     }, [dispatch])
// }

// Set Browser Action
// import {SET_BROWSER} from '../types'
// export const setBrowser = browser => ({
//     type: SET_BROWSER,
//     payload: browser
// })

// Reducer Browser Action
// import {SET_BROWSER} from '../types'
// const initialState = { browser: '' }
// export const browserReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_BROWSER:{
//             return {...state, browser: action.payload}
//         }
//         default:
//             return state
//     }
// }
