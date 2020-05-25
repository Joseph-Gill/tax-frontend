import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Authentication from './components/Authentication'
import WithAuth from './HOC/withAuth'
import SideBar from './components/SideBar'
import UserProfile from './components/UserProfile'
import Page404 from './components/Tools/404'
import Home from './components/Home'
import LandingPage from './components/LandingPage'


export const LANDING_PAGE = '/'
export const LOGIN = '/login'
export const ROUTE_HOME = '/home'
export const ROUTE_USERPROFILE = '/userprofile'

const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Route exact path={LANDING_PAGE} component={LandingPage}/>
                <SideBar>
                    <Route exact path={LOGIN} component={Authentication}/>
                    <Route exact path={ROUTE_HOME} component={WithAuth(Home)}/>
                    <Route exact path={ROUTE_USERPROFILE} component={WithAuth(UserProfile)}/>
                </SideBar>
                <Route component={Page404}/>
            </Switch>
        </Router>
    </>
}

export default Routes
