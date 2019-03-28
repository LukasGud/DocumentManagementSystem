import React, { Component } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./textEditor.css";
import { get } from "http";
import Modal from "react-bootstrap/Modal";
import { Link, withRouter  } from "react-router-dom";

// convertToRaw(this.state.editorState.getCurrentContent()) -- this could be sent to backend / arba JSON.stringify(convertToRaw(content))

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      docText: "",
      canCreateNewDocType: true,
      documentTitle: "",
      modalShow: false
    };

    const content = localStorage.getItem("doc");

    if (content) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(content))
      );
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
  }

  createDocument = async () => {
    const token = localStorage.getItem("token");
    const postDoc = await fetch(
      "http://localhost:8080/api/templates/newtemplate",
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "authorization": "Bearer " + token
        },
        body: JSON.stringify({
          title: this.state.documentTitle,
          text: JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
        })
      }
    );
    const res = await postDoc.status;
    console.log(res);
    
    if(res === 200){
      this.setState({
        modalShow: false
      })
    }
  };

  settingUserRole = () => {
    const userRole = localStorage.getItem('role')
    if (userRole === "ROLE_ADMIN") {
      this.setState({
        canCreateNewDocType: true
      })
    } else if (userRole === "ROLE_USER") {
      this.setState({
        canCreateNewDocType: false
      })
    }
  }

  componentDidMount = () => {
    this.settingUserRole()
  }

  onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    console.log("content state", JSON.stringify(convertToRaw(contentState)));
    this.setState({ editorState });
  };

  handleInput = (e) => {
    this.setState({
      documentTitle: e.target.value
    })
  }  

  render() {
    const { editorState } = this.state;

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="editorWrapper">
        <div>
          <button
            type="button"
            className="btn btn-light btn-sm"
            style={{ margin: "0 5px 5px 0" }}
          >
            Saugoti
          </button>
          {this.state.canCreateNewDocType && (<button
            type="button"
            className="btn btn-light btn-sm"
            style={{ margin: "0 5px 5px 0" }}
            onClick={() => this.setState({ modalShow: true })}
          >
            Saugoti šabloną
          </button>)}
          <button
            type="button"
            className="btn btn-light btn-sm"
            style={{ margin: "0 5px 5px 0" }}
          >
            Pateikti
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            style={{ marginBottom: "5px" }}
          >
            Atšaukti
          </button>
            <Modal
              size="md"
              show={this.state.modalShow}
              onHide={modalClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Įveskite dokumento pavadinimą
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group">
                  <input className="form-conrol" type="text" name='documentTitle' value={this.state.title} onChange={this.handleInput} style={{width: "100%"}}/>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-dark" onClick={this.createDocument}>
                  Saugoti
                </button>
              </Modal.Footer>
            </Modal>
        </div>
        <div className="editorStyle">
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="editer-content"
            onEditorStateChange={this.onChange}
            spellCheck={true}
          // editorStyle={{ lineHeight: '87%' }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(TextEditor);