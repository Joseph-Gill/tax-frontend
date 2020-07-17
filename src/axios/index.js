import axios from 'axios'


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

export default Axios
