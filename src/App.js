import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.js'
import ContactPage from './pages/ContactPage/ContactPage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import SignupPage from './pages/LoginPage/LoginPage'
import './assets/css/App.scss'
import contactPng from '../src/imgs/contact.png';
import homePng from '../src/imgs/home.png';
import chartPng from '../src/imgs/chart.png';

import { inject, observer } from 'mobx-react';


const PrivateRoute = (props) => {
  return props.user ? <Route {...props} /> : <Redirect to="/Signup" />
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
                <img src={contactPng} />
              </NavLink>
              <NavLink exact to="/Home">
                <img src={homePng} />
              </NavLink>
              <NavLink exact to="/Statistics">
                <img src={chartPng} />
              </NavLink>
            </ul>
            <div class="nav-line-sep"></div>
            <Switch>
              <Route path="/Signup" component={SignupPage} />
              <Route path="/Statistics" component={StatisticPage} />
              <PrivateRoute path="/Contact" user={user} exact component={ContactPage} />
              <Route path="/Contact/Edit/:contactId?" component={ContactEdit} />
              <Route path="/Contact/:contactId" component={ContactDetails} />
              <PrivateRoute path="/" user={user} component={HomePage} />
            </Switch>

          </div>
        </div>
      </Router>

    );
  }
}
export default App;
