import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HOME, LOGIN, PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION, USERPROFILE, GROUPS, CREATEGROUP, ORG_CHART, PROJECTS, MEMBERS, ADD_PROJECT, EDIT_PROJECT} from './paths'
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
import Groups from '../pages/Groups'
import CreateGroup from '../pages/CreateGroup'
import GroupDisplay from '../pages/GroupDisplay'
import GroupOrgChart from '../pages/GroupOrgChart'
import GroupProjects from '../pages/GroupProjects'
import GroupMembers from '../pages/GroupMembers'
import ProjectAdd from '../pages/ProjectAdd'
import ProjectEdit from '../pages/ProjectEdit'


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
                    <Route component={WithAuth(UserProfile)} exact path={USERPROFILE} />
                    <Route component={WithAuth(CreateGroup)} exact path={CREATEGROUP} />
                    <Route component={WithAuth(GroupOrgChart)} exact path={`${GROUPS}${ORG_CHART}`} />
                    <Route component={WithAuth(GroupProjects)} exact path={`${GROUPS}${PROJECTS}`} />
                    <Route component={WithAuth(GroupMembers)} exact path={`${GROUPS}${MEMBERS}`} />
                    <Route component={WithAuth(ProjectAdd)} exact path={`${GROUPS}${PROJECTS}${ADD_PROJECT}`} />
                    <Route component={WithAuth(ProjectEdit)} path={`${GROUPS}${PROJECTS}${EDIT_PROJECT}/:projectId/`} />
                    <Route component={WithAuth(GroupDisplay)} path={`${GROUPS}/:groupId/`} />
                    <Route component={Page404} />
                </Switch>
            </SideBar>
        </Router>
    )
}

export default Routes
