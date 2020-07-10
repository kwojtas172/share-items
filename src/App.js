import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <Router>
      <div className="main-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
