import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/groupView.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUser,
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";
import GroupsList from "./GroupsList";
import UsersTable from "./UsersTable";

library.add(faUsers, faUser, faFolderOpen);

class GroupView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="groupviewContainer">
        <div className="groupHeader">
          <Link className="text-light" to="/prisijungti">
            <h3 className="text-dark">
              <FontAwesomeIcon icon="users" className="text-dark" />{" "}
              <strong> Darbuotojai</strong>
            </h3>
          </Link>
        </div>
        <div className="navBar">
          <ul className="nav">
            <li className="nav-item">
              <Link className="text-light" to="/prisijungti">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="user" className="text-light" /> Grupės
                  nariai
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light" to="/registruotis">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Pateikti dokumentai
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light" to="/registruotis">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Priimti dokumentai
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light" to="/registruotis">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Atmesti dokumentai
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-light" to="/registruotis">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Visi dokumentai
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <UsersTable />
      </div>
    );
  }
}

export default GroupView;
