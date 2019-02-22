import React, { Component } from "react";
import Footer from "../container/Footer";
import AdminBoardHeader from "../container/AdminBoardHeader/AdminBoardHeader";
import DocumentsNavContainer from "../container/DocumentsNavContainer/DocumentsNavContainer";

class AdminDocumentsBoard extends Component {
  render() {
    return (
      <div>
        <AdminBoardHeader />
        <DocumentsNavContainer />
        <Footer />
      </div>
    );
  }
}

export default AdminDocumentsBoard;
