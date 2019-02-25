import React, { Component } from "react";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUsers,
  faUsersCog
} from "@fortawesome/free-solid-svg-icons";
import "./adminBoardHeader.css";

library.add(faHome, faFileAlt, faUsers, faUsersCog);

class UserBoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="headerNavBar navbar fixed-top bg-dark">
        <div className="adminNavBar">
          <Link to="/adminLangas">
            <FontAwesomeIcon icon="home" className="text-light" />
          </Link>
          <Link to="/adminDokumentai">
            <FontAwesomeIcon icon="file-alt" className="text-light" />
          </Link>
          <Link to="/adminGrupes">
            <FontAwesomeIcon icon="users" className="text-light" />
          </Link>
          <Link to="/nariai">
            <FontAwesomeIcon icon="users-cog" className="text-light" />
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
