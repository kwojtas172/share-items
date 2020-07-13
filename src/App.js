import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

import {firebaseApp, firebaseRegister, firebaseLogin} from "./components/firebase";
  


export default class App extends Component {



  submitOnRegister = (email, password) => {
    firebaseRegister(email, password)
  }

  submitOnLogin = (email, password) => {
    firebaseLogin(email, password)
  }


  render() {
    return (
      <Router>
        <div className="main-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={() => <Login submitOnLogin={this.submitOnLogin} />} />
          <Route path="/rejestracja" component={() => <Register submitOnRegister={this.submitOnRegister} />} />
          <Route path="/wylogowano" component={Logout} />
        </Switch>
        </div>
      </Router>
    );
  }
}
