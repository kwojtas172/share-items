import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import ShareItems from "./components/ShareItems";

import {firebaseRegister, firebaseLogin, firebaseAuth, /* displayName */} from "./components/firebase";
  


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      displayName: "janek@gmalmgdkb.com"
    }
  }
  
  componentDidMount() {
    firebaseAuth();
  }


  submitOnRegister = (email, password) => {
    firebaseRegister(email, password)
  }

  submitOnLogin = (email, password) => {
    firebaseLogin(email, password);
    this.setState({
      isLogin: true
    })
  }


  render() {
    return (
      <Router>
        <div className="main-wrapper">
        <Switch>
          <Route exact path="/" component={() => <Home isLogin={this.state.isLogin} displayName={this.state.displayName} />} />
          {!this.state.isLogin && <Route path="/logowanie" component={() => <Login submitOnLogin={this.submitOnLogin} />} />}
          {!this.state.isLogin && <Route path="/rejestracja" component={() => <Register submitOnRegister={this.submitOnRegister} />} />}
          {!this.state.isLogin && <Route path="/wylogowano" component={Logout} />}
          {this.state.isLogin && <Route path="/oddaj-rzeczy" component={() => <ShareItems isLogin={this.state.isLogin} displayName={this.state.displayName} />} />}
        </Switch>
        </div>
      </Router>
    );
  }
}
