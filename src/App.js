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
// import Header from "./components/container/Header/Header";
// import UserBoardHeader from "./components/container/UserBoardHeader/UserBoardHeader";
// import AdminBoardHeader from "./components/container/AdminBoardHeader/AdminBoardHeader";
import { hasRole, isAllowed } from "./components/presentational/Auth";

const user = {
  roles: ["user", "admin"],
  rights: ["can_view_articles", "can_view_users"]
};

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <AdminBoardHeader />
            <UserBoardHeader />
            <Header /> */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LogInPage} />
              <Route path="/signup" component={SignUpPage} />
              {hasRole(user, ["user"]) && (
                <Route path="/createDocument" component={CreateDocument} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/userBoard" component={UserBoard} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/myDocuments" component={DocumentsBoard} />
              )}
              {hasRole(user, ["user"]) && (
                <Route path="/groups" component={GroupViewPage} />
              )}
              {hasRole(user, ["admin"]) && (
                <Route path="/createGroup" component={CreateGroupPage} />
              )}
              {hasRole(user, ["admin"]) && (
                <Route path="/adminBoard" component={AdministratorBord} />
              )}
              {hasRole(user, ["admin"]) && (
                <Route path="/adminGroups" component={AdminGroupsListPage} />
              )}
              {hasRole(user, ["admin"]) && (
                <Route path="/adminDocuments" component={AdminDocumentBoard} />
              )}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
