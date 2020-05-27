import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WithAuth from './HOC/withAuth'
import SideBar from './components/SideBar'
import UserProfile from './components/UserProfile'
import Page404 from './components/Shared/404'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import Login from './components/Authentication/Login'
import Registration from './components/Authentication/Registration'
import RegistrationValidation from './components/Authentication/RegistrationValidation'
import PasswordReset from './components/Authentication/PasswordReset'
import PasswordResetValidation from './components/Authentication/PasswordResetValidation'
let NotFoundRoute = Router.NotFound

export const LANDING_PAGE = '/'
export const LOGIN = '/login'
export const REGISTRATION = '/registration'
export const REGISTRATION_VALIDATION = '/registration-validation'
export const PASSWORD_RESET = '/password-reset'
export const PASSWORD_RESET_VALIDATION = '/password-reset-validation'
export const ROUTE_HOME = '/home'
export const ROUTE_USERPROFILE = '/userprofile'

const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Route exact path={LANDING_PAGE} component={LandingPage}/>
                <SideBar>
                    <Route exact path={LOGIN} component={Login}/>
                    <Route exact path={PASSWORD_RESET} component={PasswordReset}/>
                    <Route exact path={PASSWORD_RESET_VALIDATION} component={PasswordResetValidation}/>
                    <Route exact path={REGISTRATION} component={Registration}/>
                    <Route exact path={REGISTRATION_VALIDATION} component={RegistrationValidation}/>
                    <Route exact path={ROUTE_HOME} component={WithAuth(Home)}/>
                    <Route exact path={ROUTE_USERPROFILE} component={WithAuth(UserProfile)}/>
                </SideBar>
                <NotFoundRoute component={Page404}/>
            </Switch>
        </Router>
    </>
}

export default Routes
