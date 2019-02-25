import React, { Component } from "react";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";
import Footer from "../container/Footer";
import RichTextEditor from "../richTextEditor/RichTextEditor";

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
