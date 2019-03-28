import React, { Component } from "react";
import "./groupAdministration.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter  } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import Modal from "react-bootstrap/Modal";

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
        }
      ],
      users: [
        {
          id: "1",
          name: "Jonaitis Jonas",
          email: "jonaitis@gmail.com ",
          updatedAt: "Prisijungęs"
        },
        {
          id: "2",
          name: "Petras Petras",
          email: "petras@gmail.com ",
          updatedAt: "Prisijungęs"
        }
      ],
      selectedUser: {},
      members: [
        {
          id: "5",
          name: "Rimaitis Rimas",
          email: "riri@gmail.com ",
          updatedAt: "Prisijungęs"
        },
        {
          id: "6",
          name: "Jonis Jonas",
          email: "jnjon@gmail.com ",
          updatedAt: "Prisijungęs"
        },
        {
          id: "3",
          name: "Angelienė Angelė",
          email: "angis@gmail.com ",
          updatedAt: "Prisijungęs"
        },
        {
          id: "4",
          name: "Rimka Rimutė",
          email: "rama@gmail.com ",
          updatedAt: "Prisijungęs"
        }
      ],
      selectedMembers: [],
      smallModalShow: false,
      modalShow: false
    };
  }

  addMembers = value => {
    console.count("onChange");
    console.log("vals", value);
    this.setState({ selectedMembers: value });
  };

  handleOnSelectUser = (row, isSelect) => {
    if (isSelect) {
      window.setTimeout(
        function() {
          this.setState({ selectedUser: row });
        }.bind(this),
        0
      );
    }
  };

  addMembersToGroup = () => {
    this.setState(prevState => ({
      users: [...prevState.users, ...this.state.selectedMembers],
      modalShow: false,
      smallModalShow: false
    }));
  };

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

    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#edeeeebe",
      onSelect: (row, isSelect, rowIndex) => {
        this.handleOnSelectUser(row, isSelect);
      }
    };

    let modalClose = () => this.setState({ modalShow: false });

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
            <label
              htmlFor="rights"
              style={{ fontWeight: "bold", marginRight: "5px" }}
            >
              Grupei suteiktos teisės:{" "}
            </label>
            <div className=" form-check-inline">
              {this.state.rights.map(right => (
                <label htmlFor="rights" className="inputContainerGroups">
                  <input
                    type="checkbox"
                    key={right.id}
                    checked={right.isHaveRight}
                    readOnly
                  />
                  {right.right}
                  <span className="checkmarkGroups" />
                </label>
              ))}
            </div>
          </div>
          <div />
          <Modal
            size="lg"
            show={this.state.modalShow}
            onHide={modalClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Pasirinkite narius, kuriuos norite pridėti
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Picky
                options={this.state.members}
                value={this.state.selectedMembers}
                onChange={this.addMembers}
                open={false}
                valueKey="id"
                labelKey="name"
                multiple={true}
                includeSelectAll={true}
                includeFilter={true}
                placeholder="Pasirinkite narius, kuriuos norite pridėti"
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-dark"
                onClick={() => this.setState({ smallModalShow: true })}
              >
                Pridėti
              </button>
            </Modal.Footer>
          </Modal>
          <Modal
            size="lg"
            show={this.state.smallModalShow}
            onHide={() => {
              this.setState({ smallModalShow: false });
            }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter" />
            </Modal.Header>
            <Modal.Body>
              <div style={{ textAlign: "center", padding: "10px" }}>
                <p>Ar tikrai norite pridėti šiuos narius?</p>
                <button
                  className="btn btn-success sm"
                  style={{ marginRight: "5px" }}
                  onClick={this.addMembersToGroup}
                >
                  Taip
                </button>
                <button
                  className="btn btn-danger sm"
                  onClick={() => this.setState({ smallModalShow: false })}
                >
                  Ne
                </button>
              </div>
            </Modal.Body>
            <Modal.Footer />
          </Modal>
          <div>
            <ToolkitProvider
              keyField="name"
              data={this.state.users}
              columns={columns}
              search
            >
              {props => (
                <div>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{ marginRight: "5px" }}
                    onClick={() => this.setState({ modalShow: true })}
                  >
                    + Pridėti naują vartotoją
                  </button>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{ marginRight: "5px" }}
                    onClick={this.removeUser}
                  >
                    Pašalinti vartotoją
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

export default withRouter(GroupAdministration);
