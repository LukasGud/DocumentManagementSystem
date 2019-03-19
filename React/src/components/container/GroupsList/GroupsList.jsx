import React, { Component } from "react";
import "./groupsList.css";
import { Link } from "react-router-dom";
import GroupView from "../GroupView/GroupView";
import CreateGroup from "../CreateGroup/CreateGroup";

class GroupsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreationButtonClicked: false,
      groups: [
        {
          name: "Vadovybė",
          id: 1,
          isClicked: false
        },
        {
          name: "Sekretoriatas",
          id: 2,
          isClicked: false
        },
        {
          name: "Teisės skyrius",
          id: 3,
          isClicked: false
        },
        {
          name: "IT skyrius",
          id: 4,
          isClicked: false
        },
        {
          name: "Personalo skyrius",
          id: 5,
          isClicked: false
        }
      ],
      groupSelected: "",
      isGroupViewButtonClicked: false
    };
  }

  handleClick = e => {
    this.setState({
      isCreationButtonClicked: true,
      isGroupViewButtonClicked: false
    });
  };

  handleOpenClick = groupSelected => {
    this.setState({
      groupSelected,
      isGroupViewButtonClicked: true,
      isCreationButtonClicked: false
    });
  };

  render() {
    return (
      <div className="groupsView groups">
        <div className="groupTableContainer">
          {this.state.isCreationButtonClicked && <CreateGroup />}
          {this.state.isGroupViewButtonClicked && (
            <GroupView group={this.state.groupSelected} />
          )}
        </div>
        <div className="groupListContainer">
          <div className="list-group-doc">
            <div className="list-group-item bg-dark text-light">
              <h4>Grupės</h4>
            </div>
            <div>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={false}
                style={{ fontWeight: "bold" }}
                onClick={this.handleClick}
              >
                + Kurti naują grupę
              </button>
              {this.state.groups.map(groupname => (
                <button
                  type="button"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  disabled={false}
                  key={groupname.id}
                  onClick={() => this.handleOpenClick(groupname.name)}
                >
                  {groupname.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsList;
