import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./presentational/HomePage";
import LogInPage from "./presentational/LogInPage";
import SignUpPage from "./presentational/SignUpPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
