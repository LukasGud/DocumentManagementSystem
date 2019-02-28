import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LogInPage from "./components/presentational/LogInPage";
import SignUpPage from "./components/presentational/SignUpPage";
import CreateDocument from "./components/presentational/CreateDocument";
import UserBoard from "./components/presentational/UserBoard";
import DocumentsBoard from "./components/presentational/DocumentsBoard";
import GroupViewPage from "./components/presentational/GroupViewPage";
import CreateGroupPage from "./components/presentational/CreateGroupPage";
import AdministratorBord from "./components/presentational/AdministratorBoard";
import AdminGroupsListPage from "./components/presentational/AdminGroupsList";
import AdminDocumentBoard from "./components/presentational/AdminDocumentBoard";
import HomePage from "./components/presentational/HomePage";
import Header from "./components/container/Header/Header";
import UserBoardHeader from "./components/container/UserBoardHeader/UserBoardHeader";
import AdminBoardHeader from "./components/container/AdminBoardHeader/AdminBoardHeader";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <AdminBoardHeader />
            <UserBoardHeader /> */}
            {/* <Header /> */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LogInPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/createDocument" component={CreateDocument} />
              <Route path="/userBoard" component={UserBoard} />
              <Route path="/myDocuments" component={DocumentsBoard} />
              <Route path="/groups" component={GroupViewPage} />
              <Route path="/createGroup" component={CreateGroupPage} />
              <Route path="/adminBoard" component={AdministratorBord} />
              <Route path="/adminGroups" component={AdminGroupsListPage} />
              <Route path="/adminDocuments" component={AdminDocumentBoard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
