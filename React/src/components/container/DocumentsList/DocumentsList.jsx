import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./documentsList.css";
import Modal from "react-bootstrap/Modal";

class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, selectedDoc: {} };
  }

  handleOnSelectDoc = (row, isSelect) => {
    if (isSelect) {
      this.setState({ selectedDoc: row });
    }
  };

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
      mode: "radio",
      clickToSelect: true,
      bgColor: "#edeeeebe",
      onSelect: (row, isSelect, rowIndex, e) => {
        this.handleOnSelectDoc(row, isSelect);
      }
    };

    let modalClose = () => this.setState({ modalShow: false });

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
                <button
                  className="btn btn-dark"
                  style={{ marginRight: "5px" }}
                  onClick={() => this.setState({ modalShow: true })}
                >
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
                <Modal
                  size="lg"
                  show={this.state.modalShow}
                  onHide={modalClose}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Peržiūrimas dokumentas
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* <Editor
                      editorState={this.state.editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="editer-content"
                      onEditorStateChange={this.onChange}
                      spellCheck={true}
                      readOnly
                    /> */}
                    <p>Dokumento numeris: {this.state.selectedDoc.id}</p>
                    <p>Pateikėjo vardas: {this.state.selectedDoc.name}</p>
                    <p>Pateikėjo pavardė: {this.state.selectedDoc.surname}</p>
                    <p>Šablono tipas: {this.state.selectedDoc.type}</p>
                    <p>Dokumento statusas: {this.state.selectedDoc.status}</p>
                    <p>Dokumento statuso data: {this.state.selectedDoc.date}</p>
                    <p>
                      Dokumento teksto laukas: {this.state.selectedDoc.text}
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn btn-danger" onClick={modalClose}>
                      Atmesti
                    </button>
                    <button className="btn btn-dark" onClick={modalClose}>
                      Patvirtinti
                    </button>
                    <button className="btn btn-dark" onClick={modalClose}>
                      Redaguoti
                    </button>
                  </Modal.Footer>
                </Modal>
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
