import React, { Component } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./textEditor.css";
import { get } from "http";

// convertToRaw(this.state.editorState.getCurrentContent()) -- this could be sent to backend / arba JSON.stringify(convertToRaw(content))

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editorState: EditorState.createEmpty(),
      docText: ""      
    };

    // const content = localStorage.getItem("content");

    // if (content) {
    //   this.state.editorState = EditorState.createWithContent(
    //     convertFromRaw(JSON.parse(content))
    //   );
    // } else {
    //   this.state.editorState = EditorState.createEmpty();
    // }
  }

  // saveContent = content => {
  //   localStorage.setItem(
  //     "content",
  //     JSON.stringify(convertToRaw(content))
  //   );
  // };

  createDocument = async () => {
    const token = localStorage.getItem("token");
    const postDoc = await fetch(
      "http://localhost:8080/api/documents/newdocument",
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "authorization": "Bearer " + token
        },
        body: JSON.stringify({
          title: "Prasymas del kasmetiniu atostogu",
          text: JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
        })
      }
    );
    const res = await postDoc.status;
    console.log(res);
  };

  // getDocument = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token)
  //   const getDoc = await fetch(
  //     "http://localhost:8080/api/documents",
  //     {
  //       method: "GET",
  //       headers: {
  //         "accept": "application/json",
  //         "content-type": "application/json",
  //         "authorization": "Bearer " + token
  //       }
  //     }
  //   );

  //   const data = await getDoc.json();
  //   this.setState({
  //     docText: data.content[1].text
  //   })
  //      this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(this.state.docText)))

  // };

  onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    console.log("content state", JSON.stringify(convertToRaw(contentState)));
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="editorWrapper">
        <div>
          <button
            type="button"
            className="btn btn-light btn-sm"
            style={{ margin: "0 5px 5px 0" }}
            onClick={this.createDocument}
          >
            Saugoti
          </button>
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
        </div>
        <div className="editorStyle">
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="editer-content"
            onEditorStateChange={this.onChange}
            spellCheck={true}
            editorStyle={{lineHeight: '30%'}}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
