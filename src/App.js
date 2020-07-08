import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="login" />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
