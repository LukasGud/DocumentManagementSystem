import React, { Component } from "react";
import "./docNavContainer.css";
import { Link } from "react-router-dom";
import MyDocumentsList from "../MyDocumentsList/MyDocumentsList";

class DocumentsNavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: "",
      documents: [
        {
          id: 123,
          name: "Pavardenis Vardenis",
          type: "Atostogos",
          status: "Pateiktas",
          date: "2018-09-06",
          text: "tekstas tekstas tekstas kazkoks tekstas"
        },
        {
          id: 191,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Sukurtas",
          date: "2019-01-06"
        },
        {
          id: 161,
          name: "Pavardenis Vardenis",
          type: "šaukimas",
          status: "Atmestas",
          date: "2019-03-04"
        },
        {
          id: 761,
          name: "Pavardenis Vardenis",
          type: "Liga",
          status: "Atmestas",
          date: "2017-09-06"
        },
        {
          id: 91,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Patvirtintas",
          date: "2018-12-09"
        },
        {
          id: 171,
          name: "Pavardenis Vardenis",
          type: "Atostogos",
          status: "Pateiktas",
          date: "2018-11-25"
        },
        {
          id: 133,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Atmestas",
          date: "2017-04-07"
        },
        {
          id: 871,
          name: "Pavardenis Vardenis",
          type: "Atostogos",
          status: "Pateiktas",
          date: "2018-10-06"
        },
        {
          id: 124,
          name: "Pavardenis Vardenis",
          type: "Atostogos",
          status: "Atmestas",
          date: "2018-11-23"
        },
        {
          id: 176,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Sukurtas",
          date: "2019-01-22"
        },
        {
          id: 177,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Sukurtas",
          date: "2019-01-22"
        },
        {
          id: 178,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Atmestas",
          date: "2019-01-22"
        },
        {
          id: 1700,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Sukurtas",
          date: "2019-01-22"
        },
        {
          id: 1096,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Pateiktas",
          date: "2019-01-22"
        },
        {
          id: 17876,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Atmestas",
          date: "2019-01-22"
        },
        {
          id: 11114,
          name: "Pavardenis Vardenis",
          type: "Liga",
          status: "Atmestas",
          date: "2019-01-23"
        },
        {
          id: 4568,
          name: "Pavardenis Vardenis",
          type: "Komandiruote",
          status: "Patvirtintas",
          date: "2019-01-24"
        }
      ],
      savedDocuments: [],
      acceptedDocuments: [],
      pendingDocuments: [],
      declinedDocuments: [],
      selected: []
    };
  }

  openDocumentsTable = selected => {
    this.setState({ selected });
  };

  componentDidMount() {
    this.setDifferentDocType();
  }

  setDifferentDocType = () => {
    const savedDocuments = this.state.documents.filter(docs => {
      return docs.status === "Sukurtas";
    });

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
      savedDocuments: savedDocuments,
      acceptedDocuments: acceptedDocuments,
      pendingDocuments: pendingDocuments,
      declinedDocuments: declinedDocuments
    });
  };

  render() {
    const documentsStatusList = [
      {
        id: 1,
        status: "Sukurti dokumentai",
        document: this.state.savedDocuments
      },
      {
        id: 2,
        status: "Pateikti dokumentai",
        document: this.state.pendingDocuments
      },
      {
        id: 3,
        status: "Patvirtinti dokumentai",
        document: this.state.acceptedDocuments
      },
      {
        id: 4,
        status: "Atmesti dokumentai",
        document: this.state.declinedDocuments
      },
      { id: 5, status: "Visi dokumentai", document: this.state.documents }
    ];

    return (
      <div className="documentsContainer">
        <div className="mydocumentsList">
          <MyDocumentsList allDocs={this.state.selected} />
        </div>
        <div className="navigationList">
          <div className="list-group-doc">
            <div className="list-group-item bg-dark text-light">
              <h4>Mano dokumentai</h4>
            </div>
            <div>
              <Link to="/createdocument" style={{ textDecoration: "none" }}>
                <button
                  type="button"
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <strong>+ Kurti dokumentą</strong>
                </button>
              </Link>
              {documentsStatusList.map(doc => (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => this.openDocumentsTable(doc.document)}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  {doc.status}
                  <span className="badge badge-dark badge-pill">
                    {doc.document.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentsNavContainer;
