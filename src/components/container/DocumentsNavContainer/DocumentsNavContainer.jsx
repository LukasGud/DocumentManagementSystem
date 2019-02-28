import React, { Component } from "react";
import "./docNavContainer.css";
import { Link } from "react-router-dom";
import DocumentsList from "../DocumentsList/DocumentsList";

class DocumentsNavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [
        { id: 1, status: "Sukurti dokumentai" },
        { id: 2, status: "Pateikti dokumentai" },
        { id: 3, status: "Patvirtinti dokumentai" },
        { id: 4, status: "Atmesti dokumentai" }
      ]
    };
  }

  openTable = e => {};
  render() {
    return (
      <div className="documentsContainer">
        <div className="list-group-doc">
          <div className="list-group-item bg-dark text-light">
            <h4>Mano dokumentai</h4>
          </div>
          <div>
            <Link to="/createDocument" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <strong>+ Kurti dokumentą</strong>
              </button>
            </Link>
            {this.state.documents.map(doc => (
              <button
                key={doc.id}
                type="button"
                onClick={this.openTable}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                {doc.status}
                <span className="badge badge-dark badge-pill">0</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentsNavContainer;
