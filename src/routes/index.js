import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WithAuth from '../HOC/withAuth'
import SideBar from '../components/SideBar'
import UserProfile from '../pages/UserProfile'
import Page404 from '../components/404'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import RegistrationValidation from '../pages/RegistrationValidation'
import PasswordReset from '../pages/PasswordReset'
import PasswordResetValidation from '../pages/PasswordResetValidation'
import EditUserProfile from '../pages/UserProfile/EditUserProfile'
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
