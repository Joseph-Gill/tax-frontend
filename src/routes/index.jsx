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
import Chart from '../pages/Chart'
import Groups from '../pages/Groups'
import {HOME, LOGIN, PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION, USERPROFILE, CHART, GROUPS, CREATEGROUP} from './paths'
import CreateGroup from '../pages/CreateGroup'
import GroupDisplay from '../pages/GroupDisplay'


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
                    <Route component={WithAuth(Groups)} exact path={GROUPS} />
                    <Route component={WithAuth(CreateGroup)} exact path={CREATEGROUP} />
                    <Route component={WithAuth(GroupDisplay)} path={`${GROUPS}/:groupId/`} />
                    <Route component={WithAuth(UserProfile)} exact path={USERPROFILE} />
                    <Route component={Chart} exact path={CHART} />
                    <Route component={Page404} />
                </Switch>
            </SideBar>
        </Router>
    )
}

export default Routes
