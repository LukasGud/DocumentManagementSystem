import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateDocument from "./components/container/CreateDocument/CreateDocument";
import CreateGroupPage from "./components/presentational/CreateGroupPage";
import { hasRole, isAllowed } from "./components/presentational/Auth";
import Header from "./components/container/Header/Header";
import UserBoardHeader from "./components/container/UserBoardHeader/UserBoardHeader";
import Footer from "./components/container/Footer";
import DefaultBody from "./components/container/DefaultBody/DefaultBody";
import LogIn from "./components/container/LogIn/LogIn";
import SignUp from "./components/container/SignUp/SignUp";
import DocumentsNavContainer from "./components/container/DocumentsNavContainer/DocumentsNavContainer";
import GroupsList from "./components/container/GroupsList/GroupsList";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()

const user = {
  roles: ["user", "admin"],
  rights: ["can_view_articles", "can_view_users"]
};

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            {hasRole(user, ["user"]) && <UserBoardHeader />}
            <Switch>
              <Route exact path="/" component={DefaultBody} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              {hasRole(user, ["user"]) && (<Route path="/createdocument" component={CreateDocument} />)}
              {hasRole(user, ["user"]) && (<Route path="/userboard" component={DefaultBody} />)}
              {hasRole(user, ["user"]) && (<Route path="/mydocuments" component={DocumentsNavContainer} />)}
              {hasRole(user, ["user"]) && (<Route path="/groups" component={GroupsList} />)}
              {hasRole(user, ["admin"]) && (<Route path="/creategroup" component={CreateGroupPage} />)}
              {hasRole(user, ["admin"]) && (<Route path="/adminboard" component={DefaultBody} />)}
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
