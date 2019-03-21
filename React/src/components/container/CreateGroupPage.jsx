import React, { Component } from "react";
import Footer from "./Footer";
import AdminBoardHeader from "./AdminBoardHeader/AdminBoardHeader";
import CreateGroup from "./CreateGroup/CreateGroup";
import GroupsList from "./GroupsList/GroupsList";

class GroupsListTable extends Component {
  render() {
    return (
      <div style={{ marginTop: "66px" }}>
        <CreateGroup />
      </div>
    );
  }
}

export default GroupsListTable;
