import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUsers,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";
import "./userBoardNav.css";
import { hasRole } from "../../Auth";

const user = {
  roles: ["user", "admin"]
};

library.add(faHome, faFileAlt, faUsers, faUserCog);

class UserBoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="headerNavBar navbar fixed-top bg-dark">
        <div className="userNavBar">
          <Link to="/userboard">
            <FontAwesomeIcon icon="home" className="text-light" />
          </Link>
          <Link to="/mydocuments">
            <FontAwesomeIcon icon="file-alt" className="text-light" />
          </Link>
          <Link to="/groups">
            <FontAwesomeIcon icon="users" className="text-light" />
          </Link>
          {hasRole(user, ["admin"]) && (
            <Link to="/members">
              <FontAwesomeIcon icon="users-cog" className="text-light" />
            </Link>
          )}
        </div>
        <div className="navBar">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">
                Atsijungti
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default UserBoardHeader;
