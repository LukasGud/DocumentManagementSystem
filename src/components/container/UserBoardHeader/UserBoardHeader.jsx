import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import "./userBoardNav.css";

library.add(faHome, faFileAlt, faUsers);

class UserBoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="headerNavBar navbar fixed-top bg-dark">
        <div className="userNavBar">
          <Link to="/userBoard">
            <FontAwesomeIcon icon="home" className="text-light" />
          </Link>
          <Link to="/myDocuments">
            <FontAwesomeIcon icon="file-alt" className="text-light" />
          </Link>
          <Link to="/groups">
            <FontAwesomeIcon icon="users" className="text-light" />
          </Link>
        </div>
        <div className="navBar">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/prisijungti">
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
