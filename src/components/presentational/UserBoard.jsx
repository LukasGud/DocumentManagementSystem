import React, { Component } from "react";
import Footer from "../container/Footer";
import DefaultBody from "../container/DefaultBody/DefaultBody";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";

class UserBoard extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <DefaultBody />
        <Footer />
      </div>
    );
  }
}

export default UserBoard;
