import React, { Component } from "react";
import Footer from "../container/Footer";
import AdminBoardHeader from "../container/AdminBoardHeader/AdminBoardHeader";
import AdminGroupList from "../container/AdminGroupList/AdminGroupList";
import CreateGroup from "../container/CreateGroup/CreateGroup";

class GroupsListTable extends Component {
  render() {
    return (
      <div>
        <AdminBoardHeader />
        <CreateGroup />
        <AdminGroupList />
        <Footer />
      </div>
    );
  }
}

export default GroupsListTable;
