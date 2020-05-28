import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WithAuth from '../HOC/withAuth'
import SideBar from '../components/SideBar'
import UserProfile from '../components/UserProfile'
import Page404 from '../components/Shared/404'
import Home from '../components/Home'
import LandingPage from '../components/LandingPage'
import Login from '../components/Authentication/Login'
import Registration from '../components/Authentication/Registration'
import RegistrationValidation from '../components/Authentication/RegistrationValidation'
import PasswordReset from '../components/Authentication/PasswordReset'
import PasswordResetValidation from '../components/Authentication/PasswordResetValidation'
import EditUserProfile from '../components/UserProfile/EditUserProfile'
import {EDITUSERPROFILE, HOME, LANDING_PAGE, LOGIN, PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION, USERPROFILE} from './paths'


const Routes = () => {
    return <Router>
        <SideBar>
            <Switch>
                <Route exact path={LANDING_PAGE} component={LandingPage}/>
                <Route exact path={LOGIN} component={Login}/>
                <Route exact path={PASSWORD_RESET} component={PasswordReset}/>
                <Route exact path={PASSWORD_RESET_VALIDATION} component={PasswordResetValidation}/>
                <Route exact path={REGISTRATION} component={Registration}/>
                <Route exact path={REGISTRATION_VALIDATION} component={RegistrationValidation}/>
                <Route exact path={HOME} component={WithAuth(Home)}/>
                <Route exact path={USERPROFILE} component={WithAuth(UserProfile)}/>
                <Route exact path={EDITUSERPROFILE} component={WithAuth(EditUserProfile)}/>
                <Route component={Page404}/>
            </Switch>
        </SideBar>
    </Router>
}

export default Routes
