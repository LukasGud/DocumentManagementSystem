import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./myDocumentsList.css";
import DocumentsNavContainer from "../DocumentsNavContainer/DocumentsNavContainer";

class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const bgStyle = {
      backgroundColor: "#519e8a"
    };
    const { SearchBar } = Search;
    const columns = [
      {
        dataField: "id",
        text: "Doc Nr.",
        sort: true,
        headerStyle: { backgroundColor: "#519e8a", width: "90px" }
      },
      {
        dataField: "name",
        text: "Vardas",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "surname",
        text: "Pavardė",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "type",
        text: "Šablonas",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "status",
        text: "Statusas",
        sort: true,
        headerStyle: { backgroundColor: "#519e8a", width: "110px" }
      },
      {
        dataField: "date",
        text: "Data",
        sort: true,
        headerStyle: { backgroundColor: "#519e8a", width: "110px" }
      }
    ];
    const documents = [
      {
        id: 123,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Atostogos",
        status: "Pateiktas",
        date: "2018-09-06"
      },
      {
        id: 191,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Komandiruote",
        status: "Sukurtas",
        date: "2019-01-06"
      },
      {
        id: 161,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "šaukimas",
        status: "Atmestas",
        date: "2019-03-04"
      },
      {
        id: 761,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Liga",
        status: "Atmestas",
        date: "2017-09-06"
      },
      {
        id: 91,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Komandiruote",
        status: "Patvirtintas",
        date: "2018-12-09"
      },
      {
        id: 171,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Atostogos",
        status: "Pateiktas",
        date: "2018-11-25"
      },
      {
        id: 133,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Komandiruote",
        status: "Atmestas",
        date: "2017-04-07"
      },
      {
        id: 871,
        name: "Gedvilas",
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Atostogos",
        status: "Pateiktas",
        date: "2018-10-06"
      },
      {
        id: 124,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Atostogos",
        status: "Atmestas",
        date: "2018-11-23"
      },
      {
        id: 176,
        name: "Vardenis",
        surname: "Pavardenis",
        type: "Komandiruote",
        status: "Atmestas",
        date: "2019-01-22"
      }
    ];
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#edeeeebe"
    };

    const savedDocuments = documents.filter(doc => {
      return doc.status === "Sukurtas";
    });

    const acceptedDocuments = documents.filter(doc => {
      return doc.status === "Patvirtintas";
    });

    const pendingDocuments = documents.filter(doc => {
      return doc.status === "Pateiktas";
    });

    const declinedDocuments = documents.filter(doc => {
      return doc.status === "Atmestas";
    });

    return (
      <div className="myDocsListContainer">
        <div className="docsListBox">
          <ToolkitProvider
            keyField="id"
            data={documents}
            columns={columns}
            search
          >
            {props => (
              <div>
                <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                  Peržiūrėti
                </button>
                <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                  Pateikti
                </button>
                <button className="btn btn-danger">Pašalinti</button>
                <SearchBar
                  {...props.searchProps}
                  style={{ width: "40%", marginBottom: "10px", float: "right" }}
                />
                <BootstrapTable
                  {...props.baseProps}
                  filter={filterFactory()}
                  selectRow={selectRow}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
      </div>
    );
  }
}

export default DocumentsList;
