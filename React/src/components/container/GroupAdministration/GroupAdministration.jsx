import React, { Component } from "react";
import "./groupAdministration.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

library.add(faEdit);

class GroupAdministration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rights: [
        {
          id: 1,
          right: "Dokumentų tvirtinimas",
          isHaveRight: true
        },
        {
          id: 2,
          right: "Dokumentų atmetimas",
          isHaveRight: true
        },
        {
          id: 3,
          right: "Naujų dokumentų šablonų kūrimas",
          isHaveRight: false
        }
      ],
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
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#edeeeebe"
    };

    return (
      <div className="listContainer">
        <div className="listBox">
          <div style={{ textAlign: "right" }}>
            <button
              className="btn btn-danger btn-sm"
              style={{ marginRight: "5px" }}
            >
              Ištrinti grupę{" "}
            </button>
          </div>
          <div>
            <button className="btn btn btn-sm">
              <FontAwesomeIcon icon="edit" className="text-dark" />
            </button>
            <label htmlFor="rights" style={{ fontWeight: "bold" }}>
              Grupei suteiktos teisės:{" "}
            </label>
            <div className=" form-check-inline">
              {this.state.rights.map(right => (
                <label htmlFor="rights" className="inputContainerGroups">
                  <input
                    type="checkbox"
                    key={right.id}
                    name={right.right.toLocaleLowerCase}
                    checked={right.isHaveRight}
                  />
                  {right.right}
                  <span className="checkmarkGroups" />
                </label>
              ))}
            </div>
          </div>
          <div />
          <div>
            <ToolkitProvider
              keyField="id"
              data={this.state.users}
              columns={columns}
              search
            >
              {props => (
                <div>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{ marginRight: "5px" }}
                  >
                    + Pridėti naują vartotoją
                  </button>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{ marginRight: "5px" }}
                  >
                    Pašalinti vartotją
                  </button>
                  <SearchBar
                    {...props.searchProps}
                    style={{
                      width: "45%",
                      marginBottom: "10px",
                      float: "right",
                      height: "30px"
                    }}
                  />
                  <BootstrapTable
                    {...props.baseProps}
                    filter={filterFactory()}
                    selectRow={selectRow}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupAdministration;
