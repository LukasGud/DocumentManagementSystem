import React, { Component } from "react";
import Footer from "../container/Footer";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";
import DocumentsNavContainer from "../container/DocumentsNavContainer/DocumentsNavContainer";
import MyDocumentsList from "../container/MyDocumentsList/MyDocumentsList";

class DocumentsBoard extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <div style={bodyStyle}>
          <MyDocumentsList />
          <DocumentsNavContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export const bodyStyle = {
  backgroundColor: "rgba(188, 207, 207, 0.479)",
  overflow: "auto",
  marginBottom: "55px",
  padding: "15px 0",
  height: "100vh",
  marginTop: "66px"
};

export default DocumentsBoard;
