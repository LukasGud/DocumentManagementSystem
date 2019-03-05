import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./groupView.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUser,
  faFolderOpen,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import DocumentsList from "../DocumentsList/DocumentsList";
import { hasRole } from "../../presentational/Auth";

const user = {
  roles: ["user", "admin"]
};

library.add(faUsers, faUser, faFolderOpen, faCog);

class GroupView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="groupviewContainer">
        <div className="contentTogether">
          <div className="groupHeader">
            <h3 className="text-dark">
              <FontAwesomeIcon icon="users" className="text-dark" />{" "}
              <strong>IT Skyrius</strong>
            </h3>
          </div>
          <div className="navBar">
            <ul className="nav">
              <li className="nav-item">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="user" className="text-light" /> Grupės
                  nariai
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Pateikti dokumentai
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Priimti dokumentai
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Atmesti dokumentai
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark">
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Visi dokumentai
                </button>
              </li>
              {hasRole(user, ["admin"]) && (
                <li className="nav-item">
                  <button className="btn btn-dark">
                    <FontAwesomeIcon icon="cog" className="text-light" />{" "}
                    Administruoti grupę
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        <DocumentsList />
      </div>
    );
  }
}

export default GroupView;
