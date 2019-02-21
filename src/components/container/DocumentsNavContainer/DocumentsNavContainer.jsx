import React, { Component } from "react";
import "./docNavContainer.css";
import { Link } from "react-router-dom";

class DocumentsNavContainer extends Component {
  render() {
    return (
      <div className="documentsContainer">
        <div className="list-group-doc" style={{ width: "18rem" }}>
          <div className="list-group-item bg-dark text-light">
            <h4>Mano dokumentai</h4>
          </div>
          <div>
            <Link to="/kurtiDokumenta">
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <strong>+ Kurti dokumentą</strong>
              </button>
            </Link>
            <Link to="/vartotojoLangas">
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                Sukurti dokumentai{" "}
                <span className="badge badge-dark badge-pill">0</span>
              </button>
            </Link>
            <Link to="/vartotojoLangas">
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                Pateikti dokumentai{" "}
                <span className="badge badge-dark badge-pill">0</span>
              </button>
            </Link>
            <Link to="/vartotojoLangas">
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                Patvirtinti dokumentai{" "}
                <span className="badge badge-dark badge-pill">0</span>
              </button>
            </Link>
            <Link to="/vartotojoLangas">
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                Atmesti dokumentai{" "}
                <span className="badge badge-dark badge-pill">0</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentsNavContainer;
