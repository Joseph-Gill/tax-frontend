import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
    HOME, LOGIN, PASSWORD_RESET, PASSWORD_RESET_VALIDATION, REGISTRATION, REGISTRATION_VALIDATION, USERPROFILE,
    GROUPS, ORG_CHART, PROJECTS, MEMBERS, ADD_PROJECT, EDIT_PROJECT, EDIT_GROUP, ADD_GROUP, EDIT_MEMBER, TASKS,
    ADD_TASK, STEPS, BEGINNING, DISPLAY_STEP, ENDING, EDIT_TASK, LANDING, PLATFORM
} from './paths'
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
import GroupDisplay from '../pages/GroupDisplay'
import GroupOrgChart from '../pages/GroupOrgChart'
import GroupProjects from '../pages/GroupProjects'
import GroupMembers from '../pages/GroupMembers'
import ProjectAdd from '../pages/ProjectAdd'
import ProjectEdit from '../pages/ProjectEdit'
import GroupEdit from '../pages/GroupEdit'
import GroupAdd from '../pages/GroupAdd'
import ProjectDisplay from '../pages/ProjectDisplay'
import MemberEdit from '../pages/MemberEdit'
import ProjectTasks from '../pages/ProjectTasks'
import TaskAdd from '../pages/TaskAdd'
import ProjectSteps from '../pages/ProjectSteps'
import StepBeginning from '../pages/StepBeginning'
import StepDisplay from '../pages/StepDisplay'
import StepEnding from '../pages/StepEnding'
import TaskEdit from '../pages/TaskEdit'
import LandingV2 from '../pages/LandingV2'
import LandingPlatform from '../pages/LandingPlatform'


const Routes = () => {
    return (
        <Router>
            <SideBar>
                <Switch>
                    <Route component={LandingV2} exact path={LANDING} />
                    <Route component={LandingPlatform} exact path={PLATFORM} />
                    <Route component={Login} exact path={LOGIN} />
                    <Route component={PasswordReset} exact path={PASSWORD_RESET} />
                    <Route component={PasswordResetValidation} exact path={PASSWORD_RESET_VALIDATION} />
                    <Route component={Registration} exact path={REGISTRATION} />
                    <Route component={RegistrationValidation} exact path={REGISTRATION_VALIDATION} />
                    <Route component={WithAuth(Home)} exact path={HOME} />
                    <Route component={WithAuth(Groups)} exact path={GROUPS} />
                    <Route component={WithAuth(UserProfile)} exact path={USERPROFILE} />
                    <Route component={WithAuth(GroupAdd)} exact path={`${GROUPS}${ADD_GROUP}`} />
                    <Route component={WithAuth(GroupEdit)} exact path={`${GROUPS}${EDIT_GROUP}`} />
                    <Route component={WithAuth(GroupOrgChart)} exact path={`${GROUPS}${ORG_CHART}`} />
                    <Route component={WithAuth(GroupProjects)} exact path={`${GROUPS}${PROJECTS}`} />
                    <Route component={WithAuth(GroupMembers)} exact path={`${GROUPS}${MEMBERS}`} />
                    <Route component={WithAuth(ProjectAdd)} exact path={`${GROUPS}${PROJECTS}${ADD_PROJECT}`} />
                    <Route component={WithAuth(ProjectEdit)} exact path={`${GROUPS}${PROJECTS}${EDIT_PROJECT}`} />
                    <Route component={WithAuth(TaskAdd)} exact path={`${GROUPS}${PROJECTS}${ADD_TASK}`} />
                    <Route component={WithAuth(StepBeginning)} exact path={`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`} />
                    <Route component={WithAuth(StepDisplay)} exact path={`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`} />
                    <Route component={WithAuth(StepEnding)} exact path={`${GROUPS}${PROJECTS}${STEPS}${ENDING}`} />
                    <Route component={WithAuth(TaskEdit)} path={`${GROUPS}${PROJECTS}${TASKS}${EDIT_TASK}/:taskId/`} />
                    <Route component={WithAuth(ProjectSteps)} path={`${GROUPS}${PROJECTS}${STEPS}/:projectId/`} />
                    <Route component={WithAuth(ProjectTasks)} path={`${GROUPS}${PROJECTS}${TASKS}/:projectId/`} />
                    <Route component={WithAuth(MemberEdit)} path={`${GROUPS}${MEMBERS}${EDIT_MEMBER}/:memberId/`} />
                    <Route component={WithAuth(ProjectDisplay)} path={`${GROUPS}${PROJECTS}/:projectId/`} />
                    <Route component={WithAuth(GroupDisplay)} path={`${GROUPS}/:groupId/`} />
                    <Route component={Page404} />
                </Switch>
            </SideBar>
        </Router>
    )
}

export default Routes
