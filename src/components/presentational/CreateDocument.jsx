import React, { Component } from "react";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";
import Footer from "../container/Footer";
import CreateDocument from "../container/CreateDocument/CreateDocument";

class UserBoard extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <CreateDocument />
        <Footer />
      </div>
    );
  }
}

export default UserBoard;
