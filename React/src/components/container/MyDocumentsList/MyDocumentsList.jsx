import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./myDocumentsList.css";
import Modal from "react-bootstrap/Modal";
import "../../richTextEditor/RichTextEditor";

import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      documentsList: []
    };
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
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#edeeeebe"
    };

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="myDocsListContainer">
        <div className="docsListBox">
          <ToolkitProvider
            keyField="id"
            data={this.props.allDocs}
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
                  Pateikti
                </button>
                <button className="btn btn-danger">Pašalinti</button>
                <Modal
                  size="lg"
                  show={this.state.modalShow}
                  onHide={modalClose}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Editor />
                  {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Dokumentas
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Editor
                      editorState={this.state.editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="editer-content"
                      onEditorStateChange={this.onChange}
                      spellCheck={true}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn btn-danger" onClick={modalClose}>
                      Atmesti
                    </button>
                    <button className="btn btn-dark" onClick={modalClose}>
                      Patvirtinti
                    </button>
                    <button className="btn btn-dark" onClick={modalClose}>
                      Close
                    </button>
                  </Modal.Footer> */}
                </Modal>
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
