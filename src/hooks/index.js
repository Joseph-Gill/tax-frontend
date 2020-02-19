import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {resetErrors} from '../store/errors/actions/errorAction'

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


