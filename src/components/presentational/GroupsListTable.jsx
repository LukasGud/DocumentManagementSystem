import React, { Component } from "react";
import Footer from "../container/Footer";
import UserBoardHeader from "../container/UserBoardHeader";
import GroupsList from "../container/GroupsList";

class GroupsListTable extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <GroupsList />
        <Footer />
      </div>
    );
  }
}

export default GroupsListTable;