import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Cookie from 'js-cookie'
import Axios from './../axios'
import {useHistory, useLocation} from 'react-router-dom'
import {userLogout, userRefreshProfileAction, userRefreshTokenProfileAction} from '../store/user/actions/authentication/userLoginAction'
import {LOGIN} from '../routes/paths'


const useHandleHardReload = () => {
    const authenticated = useSelector(state => state.userLoginReducer.authenticated)
    const accessToken = useSelector(state => state.userLoginReducer.accessToken)
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
                try{
                // If token in redux assume it's valid and do nothing
                    await Axios.post('auth/token/verify/', {token: accessToken}) //crashes if token not valid
                } catch(e){
                    await dispatch(userRefreshTokenProfileAction({refresh: refreshToken}))
                }
            }
            else if (refreshToken) {
                 // If token not in redux refresh access token and store in redux
                let body = {refresh: refreshToken}
                try {
                    // Things to do on hard reload. Refresh token and get user profile
                    await dispatch(userRefreshTokenProfileAction(body))
                } catch(e) {
                    // Throws error if request fails for any reason (server offline, 401 etc...)
                    logout()
                }

                 }

            //     else if(accessToken){
            //     // If token not in redux check if token in Cookies is valid
            //     let body = {token: accessToken}
            //     try {
            //         // Things to do on hard reload
            //         await Axios.post('auth/token/verify/', body)//crashes if token not valid
            //         await dispatch(getUserProfile(accessToken))
            //     } catch(e) {
            //         // Throws error if request fails for any reason (server offline, 401 etc...)
            //         logout()
            //     }
            // }
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
