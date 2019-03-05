import React, { Component } from "react";
import Footer from "../container/Footer";
import AdminBoardHeader from "../container/AdminBoardHeader/AdminBoardHeader";
import CreateGroup from "../container/CreateGroup/CreateGroup";
import GroupsList from "../container/GroupsList/GroupsList";

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
