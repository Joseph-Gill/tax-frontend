import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Authentication from './components/Authentication'
import WithAuth from './HOC/withAuth'
import SideBar from './components/SideBar'
import UserProfile from './components/UserProfile'
import Page404 from './components/Tools/404'
import Home from './components/Home'


export const ROUTE_AUTHENTICATION = '/'
export const ROUTE_HOME = '/home'
export const ROUTE_USERPROFILE = '/userprofile'

const Routes = () => {
    return <>
        <Router>
            <SideBar>
                <Switch>
                    <Route exact path={ROUTE_AUTHENTICATION} component={Authentication}/>
                    <Route exact path={ROUTE_HOME} component={WithAuth(Home)}/>
                    <Route exact path={ROUTE_USERPROFILE} component={WithAuth(UserProfile)}/>
                    <Route component={Page404}/>
                </Switch>
            </SideBar>
        </Router>
    </>
}

export default Routes
