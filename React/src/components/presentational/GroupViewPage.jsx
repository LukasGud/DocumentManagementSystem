import React, { Component } from "react";
import Footer from "../container/Footer";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";
import GroupsList from "../container/GroupsList/GroupsList";
import GroupView from "../container/GroupView/GroupView";
import CreateGroup from "../container/CreateGroup/CreateGroup";

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
