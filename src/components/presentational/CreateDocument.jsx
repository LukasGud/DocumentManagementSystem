import React, { Component } from "react";
import UserBoardHeader from "../container/UserBoardHeader";
import Footer from "../container/Footer";
import RichTextEditor from "../richTextEditor/RichTextEditor";
import Header from "../container/Header";

class UserBoard extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <RichTextEditor />
        <Footer />
      </div>
    );
  }
}

export default UserBoard;
