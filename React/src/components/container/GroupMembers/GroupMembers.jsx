import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./groupMembers.css";

class GroupMemeber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Jonas",
          surname: "Jonaitis",
          email: "jonaitis@gmail.com ",
          isActive: "Prisijungęs"
        },
        {
          name: "Petras",
          surname: "Petras",
          email: "petras@gmail.com ",
          isActive: "Prisijungęs"
        }
      ]
    };
  }

  render() {
    const bgStyle = {
      backgroundColor: "#519e8a"
    };
    const { SearchBar } = Search;
    const columns = [
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
        dataField: "email",
        text: "El paštas",
        sort: true,
        headerStyle: bgStyle
      },
      {
        dataField: "isActive",
        text: "Prisijungimo statusas",
        sort: true,
        headerStyle: bgStyle
      }
    ];

    return (
      <div className="listContainer">
        <div className="listBox">
          <ToolkitProvider
            keyField="id"
            data={this.state.users}
            columns={columns}
            search
          >
            {props => (
              <div>
                <SearchBar
                  {...props.searchProps}
                  style={{ width: "40%", marginBottom: "10px", float: "right" }}
                />
                <BootstrapTable
                  {...props.baseProps}
                  filter={filterFactory()}
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

export default GroupMemeber;
