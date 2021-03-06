import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './store'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {GlobalStyle, defaultTheme} from './style'
import {ThemeProvider} from 'styled-components'
import * as Sentry from '@sentry/browser'
import Routes from './routes'


// eslint-disable-next-line no-undef
if(process.env.NODE_ENV !== 'development'){
    Sentry.init({dsn: ''})
}

ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
