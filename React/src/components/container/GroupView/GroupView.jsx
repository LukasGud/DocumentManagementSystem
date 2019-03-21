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
import { hasRole } from "../../Auth";
import GroupMembers from "../GroupMembers/GroupMembers";
import GroupAdministration from "../GroupAdministration/GroupAdministration";

const user = {
  roles: ["user", "admin"]
};

library.add(faUsers, faUser, faFolderOpen, faCog);

class GroupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [
        {
          id: 123,
          name: "Ana",
          surname: "Taurienė",
          type: "Atostogos",
          status: "Pateiktas",
          date: "2018-09-06"
        },
        {
          id: 191,
          name: "Daliene",
          surname: "Daliene",
          type: "Komandiruote",
          status: "Sukurtas",
          date: "2019-01-06"
        },
        {
          id: 161,
          name: "Marius",
          surname: "Karininkas",
          type: "šaukimas",
          status: "Atmestas",
          date: "2019-03-04"
        },
        {
          id: 761,
          name: "Vardeliokas",
          surname: "Pavardziokas",
          type: "Liga",
          status: "Atmestas",
          date: "2017-09-06"
        },
        {
          id: 91,
          name: "Kotletas",
          surname: "Kijevas",
          type: "Komandiruote",
          status: "Patvirtintas",
          date: "2018-12-09"
        },
        {
          id: 171,
          name: "Helio",
          surname: "Dasviduli",
          type: "Atostogos",
          status: "Pateiktas",
          date: "2018-11-25"
        },
        {
          id: 133,
          name: "Jurgis",
          surname: "Antanela",
          type: "Komandiruote",
          status: "Atmestas",
          date: "2017-04-07"
        },
        {
          id: 871,
          name: "Gedvilas",
          surname: "Grazulaitis",
          type: "Atostogos",
          status: "pateiktas",
          date: "2018-10-06"
        },
        {
          id: 124,
          name: "Tadas",
          surname: "Vailokas",
          type: "Atostogos",
          status: "Atmestas",
          date: "2018-11-23"
        },
        {
          id: 176,
          name: "Pumpurelis",
          surname: "Pumpurelis",
          type: "Komandiruote",
          status: "Atmestas",
          date: "2019-01-22"
        },
        {
          id: 189,
          name: "Angele",
          surname: "Nailoniene",
          type: "Atostogos",
          status: "Sukurtas",
          date: "2018-05-06"
        },
        {
          id: 7446,
          name: "Pim",
          surname: "Piririm",
          type: "Atostogos",
          status: "Sukurtas",
          date: "2016-05-06"
        },
        {
          id: 199,
          name: "Liutauras",
          surname: "Pal",
          type: "Liga",
          status: "Pateiktas",
          date: "2019-05-06"
        },
        {
          id: 109,
          name: "Jonas",
          surname: "Vadelionis",
          type: "Atostogos",
          status: "Atmestas",
          date: "2017-05-06"
        }
      ],
      acceptedDocuments: [],
      pendingDocuments: [],
      declinedDocuments: [],
      selected: [],
      isDocumentsButtonClicked: false,
      isGroupMembersButtonClicked: false,
      isHandleAdminButtonClicked: false
    };
  }

  openDocumentsTable = selected => {
    this.setState({
      selected,
      isDocumentsButtonClicked: true,
      isGroupMembersButtonClicked: false,
      isHandleAdminButtonClicked: false
    });
  };

  componentDidMount() {
    this.setDifferentDocType();
  }

  setDifferentDocType = e => {
    const acceptedDocuments = this.state.documents.filter(docs => {
      return docs.status === "Patvirtintas";
    });

    const pendingDocuments = this.state.documents.filter(docs => {
      return docs.status === "Pateiktas";
    });

    const declinedDocuments = this.state.documents.filter(docs => {
      return docs.status === "Atmestas";
    });
    this.setState({
      acceptedDocuments: acceptedDocuments,
      pendingDocuments: pendingDocuments,
      declinedDocuments: declinedDocuments
    });
  };

  handleButtonClick = e => {
    this.setState({
      isGroupMembersButtonClicked: true,
      isHandleAdminButtonClicked: false,
      isDocumentsButtonClicked: false
    });
  };

  handleAdminClick = e => {
    this.setState({
      isHandleAdminButtonClicked: true,
      isGroupMembersButtonClicked: false,
      isDocumentsButtonClicked: false
    });
  };

  render() {
    const {
      acceptedDocuments,
      pendingDocuments,
      declinedDocuments,
      documents
    } = this.state;

    return (
      <div className="groupviewContainer">
        <div className="contentTogether">
          <div className="groupHeader">
            <h3 className="text-dark">
              <FontAwesomeIcon icon="users" className="text-dark" />{" "}
              <strong>{this.props.group}</strong>
            </h3>
          </div>
          <div className="navBar">
            <ul className="nav">
              <li className="nav-item">
                <button
                  onClick={this.handleButtonClick}
                  type="button"
                  className="btn btn-dark"
                >
                  <FontAwesomeIcon icon="user" className="text-light" /> Grupės
                  nariai
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-dark"
                  onClick={() => this.openDocumentsTable(pendingDocuments)}
                >
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Pateikti dokumentai
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-dark"
                  onClick={() => this.openDocumentsTable(acceptedDocuments)}
                >
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Priimti dokumentai
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-dark"
                  onClick={() => this.openDocumentsTable(declinedDocuments)}
                >
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Atmesti dokumentai
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-dark"
                  onClick={() => this.openDocumentsTable(documents)}
                >
                  <FontAwesomeIcon icon="folder-open" className="text-light" />{" "}
                  Visi dokumentai
                </button>
              </li>
              {hasRole(user, ["admin"]) && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={this.handleAdminClick}
                  >
                    <FontAwesomeIcon icon="cog" className="text-light" />{" "}
                    Administruoti grupę
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        {this.state.isGroupMembersButtonClicked && <GroupMembers />}
        {this.state.isDocumentsButtonClicked && (
          <DocumentsList documents={this.state.selected} />
        )}
        {this.state.isHandleAdminButtonClicked && <GroupAdministration />}
      </div>
    );
  }
}

export default GroupView;
