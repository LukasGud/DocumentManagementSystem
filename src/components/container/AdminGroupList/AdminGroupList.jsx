import React, { Component } from "react";
import "./adminGroupList.css";
import { Link } from "react-router-dom";

// Sudeti visus elementus i sarasa ir ismapinti.

class AdminGroupsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="groupsContainer groups">
        <div className="list-group-doc" style={{ width: "18rem" }}>
          <div className="list-group-item bg-dark text-light">
            <h4>Grupės</h4>
          </div>
          <div>
            <Link to="/kurtigrupe" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={false}
                title="Jūs neturite reikiamų teisių kurti grupę"
                style={{ fontWeight: "bold" }}
              >
                + Kurti naują grupę
              </button>
            </Link>
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
    );
  }
}

export default AdminGroupsList;
