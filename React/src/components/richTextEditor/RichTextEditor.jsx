import React, { Component } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./textEditor.css";

// convertToRaw(this.state.editorState.getCurrentContent()) -- this could be sent to backend / arba JSON.stringify(convertToRaw(content))

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editorState: EditorState.createEmpty(),
      
    };

    const content = localStorage.getItem("content");

    if (content) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(content))
      );
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
  }

  saveContent = content => {
    localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };


  onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    console.log("content state", convertToRaw(contentState));
    this.saveContent(contentState);
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
            onClick={this.saveContentToJSON}
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
