import React, { Component } from "react";
import AdminBoardHeader from "../container/AdminBoardHeader/AdminBoardHeader";
import AdminGroupList from "../container/AdminGroupList/AdminGroupList";
import Footer from "../container/Footer";

// path: /adminGrupes
class AdminGroupsListPage extends Component {
  render() {
    return (
      <div>
        <AdminBoardHeader />
        <AdminGroupList />
        <Footer />
      </div>
    );
  }
}

export default AdminGroupsListPage;
