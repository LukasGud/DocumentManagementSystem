import React, { Component } from "react";
import "./groupsList.css";
import { Link } from "react-router-dom";
import GroupView from "../GroupView/GroupView";
import CreateGroup from "../CreateGroup/CreateGroup";

// Sudeti visus elementus i sarasa ir ismapinti.

class GroupsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateionButtonClicked: false,
      groups: [
        {
          name: "Vadovybė",
          id: 1
        },
        {
          name: "Sekretoriatas",
          id: 2
        },
        {
          name: "Teisės skyrius",
          id: 3
        },
        {
          name: "IT skyrius",
          id: 4
        },
        {
          name: "Personalo skyrius",
          id: 5
        }
      ]
    };
  }

  handleClick = e => {
    this.setState({ isCreateionButtonClicked: true });
  };
  render() {
    return (
      <div className="groupsView groups">
        <div className="groupTableContainer">
          {this.state.isCreateionButtonClicked ? (
            <CreateGroup />
          ) : (
            <GroupView />
          )}
        </div>
        <div className="groupListContainer">
          <div className="list-group-doc">
            <div className="list-group-item bg-dark text-light">
              <h4>Grupės</h4>
            </div>
            <div>
              {/* <Link to="/creategroup"> */}
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={false}
                title="Jūs neturite reikiamų teisių kurti grupę"
                style={{ fontWeight: "bold" }}
                onClick={this.handleClick}
              >
                + Kurti naują grupę
              </button>
              {/* </Link> */}
              {this.state.groups.map(groupname => (
                <button
                  type="button"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  disabled={false}
                  title="Jūs nepriklausote šiai grupei"
                  key={groupname.id}
                  onClick={this.handleOpenClick}
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
