import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Cookie from 'js-cookie'
import Spinner from '../../../components/Spinner'
import SocialLoginButton from '../../../components/SocialLoginButton'
import {userSocialLoginAction} from '../../../store/user/actions/authentication/userLoginAction'
import {HOME} from '../../../routes/paths'
import LinkedInLogo from '../../../assets/icons/linkedin.svg'


// Currently not used in the Project, leftover from the Template

const LinkedinLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [linkedInCSRFState, setLinkedInCSRFState] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const linkedinLoginHandler = e => {
        e.preventDefault()
        const response_type = 'code'
        const client_id = '77m6j4ryf8lwak'
        const redirect_uri = window.location.hostname === 'localhost' ? 'http%3A%2F%2Flocalhost%3A3000%2Flogin' : 'https%3A%2F%2Ftest.app.templates.propulsion-home.ch%2Flogin'
        const scope = 'r_liteprofile%20r_emailaddress'
        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${linkedInCSRFState}&scope=${scope}`
    }

    const onCode = async (code) => {
            const data = await dispatch(userSocialLoginAction(code, 'linkedinOAuth2'))
            data ? history.push(HOME) : setIsLoading(false)
    }

    const onCodeCallback = useCallback(onCode, []);

    useEffect(() => {
        let linkedInState = Cookie.get('linkedinState')
        if (!linkedInState) {
            linkedInState = Math.random().toString(20).substr(2, 21)
            Cookie.set('linkedinState', linkedInState, { sameSite: 'strict' })
        }
        setLinkedInCSRFState(linkedInState)
    }, [])

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        const returned_state = urlParams.get('state')

        // we have to compare the state from our url with the returned state from LinkedIn to ensure that it is not a CSRF attack
        if (code && returned_state === linkedInCSRFState) {
            setIsLoading(true)
            onCodeCallback(code)
        }

        return () => setIsLoading(false)
    }, [onCodeCallback, linkedInCSRFState])

    return (
        <>
            { isLoading && <Spinner loading={isLoading} /> }
            <SocialLoginButton alt='LinkedIn Logo' icon={LinkedInLogo} onClick={linkedinLoginHandler} text='LinkedIn Login' />
        </>
    )
}

export default LinkedinLogin
