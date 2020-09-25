import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import CreateNewIssue from '../components/issue/CreateNewIssue'
import CardR from '../components/issue/CardR'
import AddMembers from '../components/addmembers/AddMembers'
import history from './history'
import ViewIssues from '../components/issue/ViewIssues'
import Management from '../components/management/Management'
import UserLogin from '../components/usercontrol/UserLogin'
import UserControlSignup from '../components/usercontrol/UserControlSignup'
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserControlSignup} />
          <Route path="/createnewissue" component={CreateNewIssue} />
          <Route path="/issue" component={CardR} />
          <Route path="/viewissues" component={ViewIssues} />
          <Route path="/addmembers" component={AddMembers} />
          <Route path="/manage" component={Management} />
          <Route path="/login" component={UserLogin} />
          <Route path="/usercontrolsignup" component={UserControlSignup} />
        </Switch>
      </Router>
    )
  }
}
