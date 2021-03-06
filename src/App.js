import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import ShareItems from "./components/ShareItems";

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


import {firebaseConfig} from "./components/Firebase";
  


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      displayName: null
    }
  }
  

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(user => {
        this.setState({
          isLogin: user ? true : false,
          displayName: user ? user.email : null
        })
      });    
  }


  submitOnRegister = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

  submitOnLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      this.setState({
        isLogin: true,
        displayName: email
      })
    }
    )
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }

  submitOnLogout = () => {
    firebase.auth().signOut().then(() => {
      console.log("wylogowano")
      this.setState({
        isLogin: false,
        displayName: null
      })
    }).catch(function(error) {
      console.log(error)
    });
  }


  render() {

    const {isLogin, displayName} = this.state;
    return (
      <Router>
        <div className="main-wrapper">
        <Switch>
          <Route exact path="/" component={() => <Home isLogin={isLogin} displayName={displayName} logout={this.submitOnLogout} />} />
          <Route path="/logowanie" component={() => <Login submitOnLogin={this.submitOnLogin} isLogin={isLogin} logout={this.submitOnLogout} displayName={displayName} />} />
          <Route path="/rejestracja" component={() => <Register submitOnRegister={this.submitOnRegister} logout={this.submitOnLogout} isLogin={isLogin} displayName={displayName} />} />
          {!isLogin && <Route path="/wylogowano" component={Logout} />}
          {isLogin && <Route path="/oddaj-rzeczy" component={() => <ShareItems isLogin={isLogin} displayName={displayName} logout={this.submitOnLogout} />} />}
        </Switch>
        </div>
      </Router>
    );
  }
}
