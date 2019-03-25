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
      users: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:8080/api/users/", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });
      const data = await response.json();
      this.setState({ users: data });
    } catch (error) {
      console.error(error);
    }
    console.log(this.state.users);
  }

  render() {
    const bgStyle = {
      backgroundColor: "#519e8a"
    };
    const { SearchBar } = Search;
    const columns = [
      {
        dataField: "name",
        text: "Vartotojas",
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
        dataField: "updatedAt",
        text: "Prisijungta paskutinį kartą",
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
