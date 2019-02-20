import React, { Component } from "react";
import "../../css/groupsList.css";
import { Link } from "react-router-dom";

// Sudeti visus elementus i sarasa ir ismapinti.

class GroupsList extends Component {
  render() {
    return (
      <div className="groupsContainer groups">
        <div className="list-group-doc" style={{ width: "18rem" }}>
          <div className="list-group-item bg-dark text-light">
            <h4>Grupės</h4>
          </div>
          <div>
            <Link to="/grupe/kurtiNauja" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={true}
                title="Jūs neturite reikiamų teisių kurti grupę"
                style={{ fontWeight: "bold" }}
              >
                + Kurti naują grupę
              </button>
            </Link>
            <Link to="/grupe:administracija" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={true}
                title="Jūs nepriklausote šiai grupei"
              >
                Administracija
              </button>
            </Link>
            <Link to="/grupe:sekretoriatas" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={true}
                title="Jūs nepriklausote šiai grupei"
              >
                Sekretoriatas
              </button>
            </Link>
            <Link to="/grupe/darbuotojai" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                Darbuotojai
              </button>
            </Link>
            <Link to="/grupe:personalas" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                disabled={true}
                title="Jūs nepriklausote šiai grupei"
              >
                Personalas
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsList;
