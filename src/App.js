import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import ContactService from './services/ContactService.js'
import HomePage from './pages/HomePage/HomePage.js'
import ContactPage from './pages/ContactPage/ContactPage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import SignupPage from './pages/LoginPage/LoginPage'
import './assets/css/App.scss'

import { inject, observer } from 'mobx-react';


const PrivateRoute = (props) => {
  return props.user ? <Route {...props}/> : <Redirect to="/Signup" />
}


@inject('store')
@observer
class App extends Component {

  

  render() {
    const user = this.props.store.UserStore.logedUser
    console.log('user is', user)

    return (
      <Router>
        <div>
          <div className="App">
            <ul className="nav-container">
              <NavLink exact to="/Contact">
                <li>Bit a friend |</li>
              </NavLink>
              <NavLink exact to="/Home">
                <li>My Profie |</li>
              </NavLink>
              <NavLink exact to="/Statistics">
                <li>Statistics</li>
              </NavLink>
            </ul>



            <Switch>
              <Route path="/Signup" component={SignupPage} />
              <PrivateRoute path="/Home" user={user} component={HomePage} />
              <Route path="/Statistics" component={StatisticPage} />
              <PrivateRoute path="/Contact" user={user} exact component={ContactPage} />
              <Route path="/Contact/Edit/:contactId?" component={ContactEdit} />
              <Route path="/Contact/:contactId" component={ContactDetails} />
            </Switch>

          </div>
        </div>
      </Router>

    );
  }
}
export default App;
