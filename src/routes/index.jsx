import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WithAuth from '../HOC/withAuth'
import SideBar from '../components/SideBar'
import UserProfile from '../pages/UserProfile'
import Page404 from '../components/404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import RegistrationValidation from '../pages/RegistrationValidation'
import PasswordReset from '../pages/PasswordReset'
import PasswordResetValidation from '../pages/PasswordResetValidation'
import EditUserProfile from '../pages/UserProfile/EditUserProfile'
import {EDITUSERPROFILE, HOME, LOGIN, PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION, USERPROFILE} from './paths'


const Routes = () => {
    return (
        <Router>
            <SideBar>
                <Switch>
                    <Route component={Login} exact path={LOGIN} />
                    <Route component={PasswordReset} exact path={PASSWORD_RESET} />
                    <Route component={PasswordResetValidation} exact path={PASSWORD_RESET_VALIDATION} />
                    <Route component={Registration} exact path={REGISTRATION} />
                    <Route component={RegistrationValidation} exact path={REGISTRATION_VALIDATION} />
                    <Route component={WithAuth(Home)} exact path={HOME} />
                    <Route component={WithAuth(UserProfile)} exact path={USERPROFILE} />
                    <Route component={WithAuth(EditUserProfile)} exact path={EDITUSERPROFILE} />
                    <Route component={Page404} />
                </Switch>
            </SideBar>
        </Router>
    )
}

export default Routes
