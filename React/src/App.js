import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CreateDocument from "./components/container/CreateDocument/CreateDocument";
import CreateGroupPage from "./components/container/CreateGroupPage";
import { hasRole, isAllowed } from "./components/Auth";
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
import decode from "jwt-decode";

const history = createBrowserHistory();

const user = {
  roles: ["ROLE_USER", "ROLE_ADMIN"],
  rights: ["can_view_articles", "can_view_users"]
};

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fetchedRole: [],
  //     role: [],
  //     username: ""
  //   };
  // }

  // componentDidMount = async () => {
  //   const token = localStorage.getItem("token");
  //   const username = this.state.username;
  //   console.log(username);
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8080/api/users/${username}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: "Bearer" + token,
  //           "content-type": "application/json"
  //         }
  //       }
  //     );
  //     const data = await response.json();
  //     this.setState({ role: data.roles[0].name });
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log(this.state.role);
  // };

  // getUserName = username => {
  //   this.setState({
  //     username
  //   });
  // };
  render() {
    // const user = {
    //   roles: this.state.role
    // };
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            {hasRole(user, ["ROLE_USER"]) && <UserBoardHeader />}
            <Switch>
              <Route exact path="/" component={DefaultBody} />
              <Route
                path="/login"
                render={props => (
                  <LogIn {...props} getUserName={this.getUserName} />
                )}
                // component={LogIn}
              />
              <Route path="/signup" component={SignUp} />
              {hasRole(user, ["ROLE_USER"]) && (
                <Route path="/createdocument" component={CreateDocument} />
              )}
              {hasRole(user, ["ROLE_USER"]) && (
                <Route path="/userboard" component={DefaultBody} />
              )}
              {hasRole(user, ["ROLE_USER"]) && (
                <Route path="/mydocuments" component={DocumentsNavContainer} />
              )}
              {hasRole(user, ["ROLE_USER"]) && (
                <Route path="/groups" component={GroupsList} />
              )}
              {hasRole(user, ["ROLE_ADMIN"]) && (
                <Route path="/creategroup" component={CreateGroupPage} />
              )}
              {hasRole(user, ["ROLE_ADMIN"]) && (
                <Route path="/adminboard" component={DefaultBody} />
              )}
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
