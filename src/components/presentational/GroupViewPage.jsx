import React, { Component } from "react";
import Footer from "../container/Footer";
import UserBoardHeader from "../container/UserBoardHeader/UserBoardHeader";
import GroupsList from "../container/GroupsList/GroupsList";
import GroupView from "../container/GroupView/GroupView";
import CreateGroup from "../container/CreateGroup/CreateGroup";
import { bodyStyle } from "./DocumentsBoard";

class GroupsListTable extends Component {
  render() {
    return (
      <div>
        <UserBoardHeader />
        <div style={bodyStyle}>
          <GroupView />
          <GroupsList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default GroupsListTable;
