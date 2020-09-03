import axios from 'axios'
import Cookie from 'js-cookie'
import {getUserProfile} from '../store/user/actions/user/userAction'
import {store} from '../store'
import {BACKEND_AUTH_URL} from '../routes/paths'


let baseUrl = ''

// eslint-disable-next-line no-undef
if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000/backend/api/'
} else {
    // Works only for client side SPA apps
    if(window.location.host.includes('propulsion-home.ch')){
        baseUrl = `${window.location.origin}/backend/api/`
    }
}

const Axios = axios.create({
    baseURL: baseUrl
})

Axios.defaults.baseURL = baseUrl
Axios.defaults.headers.post['Content-Type'] = 'application/json'

//response interceptor if access token expires
Axios.interceptors.response.use(
    // Response successful then return response
    response => response,
    async error => {
        const  { config, response: { status }} = error
        // Unsuccessful response then get new token a resubmit response
        if(status === 401 && config.url !== BACKEND_AUTH_URL) {
            let body = {refresh: Cookie.get('refresh')}
            // refresh access token
            const { data } = await Axios.post(`auth/token/refresh/`, body )
            // update access token
            await store.dispatch(getUserProfile(data.access))
            // set new token to config
            config.headers.Authorization = `Bearer ${data.access}`
            // resend response
            return Axios.request(config)
        } else {
            return Promise.reject(error)
        }
    }
)

export default Axios
