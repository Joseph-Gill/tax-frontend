import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Cookie from 'js-cookie'
import {useHistory, useLocation} from 'react-router-dom'
import {userLogout, userRefreshTokenProfileAction} from '../store/user/actions/authentication/userLoginAction'
import {LOGIN} from '../routes/paths'


const useHandleHardReload = () => {
    const { authenticated } = useSelector(state => state.userLoginReducer)
    const refreshToken = Cookie.get('refresh')
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        const logout = () => {
            dispatch(userLogout())
            history.push(LOGIN)
        }
        const refreshTokenRemoval = () => {
            if(!refreshToken) logout()
        }
        refreshTokenRemoval()
        const fn = async () => {
            if(authenticated){
                // If authenticated then do nothing
                return
            }
            else if (refreshToken) {
                 // If token not in redux refresh access token and store in redux
                let body = {refresh: refreshToken}
                try {
                    // Things to do on hard reload. Refresh access token and get user profile
                    await dispatch(userRefreshTokenProfileAction(body))
                } catch(e) {
                    // Throws error if request fails for any reason (server offline, 401 etc...)
                    logout()
                }
            }
            else {
                logout()
            }
        }
        fn()
    }, [authenticated, dispatch, history, location, refreshToken])
    return authenticated
}


export default WrappedComponent => {
    const AuthComponent = (props) => {
        const authenticated = useHandleHardReload()
        return authenticated ? <WrappedComponent {...props} /> : null
    }
    return AuthComponent
}
