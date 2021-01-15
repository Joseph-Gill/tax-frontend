import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import SocialLoginButton from '../../../components/SocialLoginButton'
import Spinner from '../../../components/Spinner'
import {userSocialLoginAction} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME} from '../../../routes/paths'
import GoogleIcon from '../../../assets/icons/google-icon.svg'

// Currently not used in the Project, leftover from the Template

// Following single line comment is not really a comment - but a rule to tell eslint that we know what we do when using global gapi (Google API)
// gapi is needed for google login and is imported via script in index.html
// in index.html: do not move it the script down or add 'async' or 'defer'! this will result in race conditions and gapi not being defined sometimes

/* global gapi */


const GoogleLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const googleLoginHandler = (e) => {
        e.preventDefault()
        if (gapi) {
            setIsLoading(true)
            gapi.load('auth2', function() {
            gapi.auth2.init({ client_id: '325279088643-n4q940s55faovcj7ejtu9uafkccbkph6.apps.googleusercontent.com' })
                .then((googleAuth) => {
                    googleAuth.signIn()
                .then(() => {
                    const googleUser = googleAuth.currentUser.get()
                    const id_token = googleUser.getAuthResponse().id_token
                    return dispatch(userSocialLoginAction(id_token, 'googleOpenId'))
                })
                .then((data) => {
                    setIsLoading(false)
                    if(data) history.push(HOME)
                })})
                .catch(e => {
                    setIsLoading(false)
                    console.log('Failed Google login:', e)
                })
            })
        }
    }

    return (
        <>
            { isLoading && <Spinner loading={isLoading} /> }
            <SocialLoginButton alt='Google Logo' icon={GoogleIcon} onClick={googleLoginHandler} text='Google Login' />
        </>
    )
}

export default GoogleLogin
