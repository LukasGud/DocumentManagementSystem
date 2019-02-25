import React, { Component } from "react";
import Footer from "../container/Footer";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";
import DocumentsNavContainer from "../container/DocumentsNavContainer/DocumentsNavContainer";

class DocumentsBoard extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <DocumentsNavContainer />
        <Footer />
      </div>
    );
  }
}

export default DocumentsBoard;
