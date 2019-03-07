import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./documentsList.css";

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
        text: "Doc. Nr.",
        sort: true,
        headerStyle: bgStyle
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
        headerStyle: bgStyle
      },
      {
        dataField: "date",
        text: "Data",
        sort: true,
        headerStyle: bgStyle
      }
    ];
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#edeeeebe"
    };

    return (
      <div className="listContainer">
        <div className="listBox">
          <ToolkitProvider
            keyField="id"
            data={this.props.documents}
            columns={columns}
            search
          >
            {props => (
              <div>
                <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                  Peržiūrėti
                </button>
                <button className="btn btn-dark" style={{ marginRight: "5px" }}>
                  Patvirtinti
                </button>
                <button className="btn btn-danger">Atmesti</button>
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
