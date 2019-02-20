import React, { Component } from "react";
import Footer from "../container/Footer";
import UserBoardHeader from "../container/UserBoardHeader";
import GroupsList from "../container/GroupsList";
import GroupView from "../container/GroupView";
import CreateGroup from "../container/CreateGroup";

class GroupsListTable extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <GroupView />
        <GroupsList />
        <CreateGroup />
        <Footer />
      </div>
    );
  }
}

export default GroupsListTable;
