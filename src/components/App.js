import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./presentational/HomePage";
import LogInPage from "./presentational/LogInPage";
import SignUpPage from "./presentational/SignUpPage";
import CreateDocument from "./presentational/CreateDocument";
import UserBoard from "./presentational/UserBoard";
import DocumentsBoard from "./presentational/DocumentsBoard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/createDocument" component={CreateDocument} />
          <Route path="/userBoard" component={UserBoard} />
          <Route path="/documentsBoard" component={DocumentsBoard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
