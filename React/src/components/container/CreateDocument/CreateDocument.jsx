import React, { Component } from "react";
import "./createDocument.css";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import RichTextEditor from "../../richTextEditor/RichTextEditor";
import { hasRole } from "../../Auth";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docTypes: [
        {
          id: "1",
          docName: "Prašymas dėl kasmetinių atostogų"
        },
        {
          id: "2",
          docName: "Prašymas dėl komandiruotės"
        },
        {
          id: "3",
          docName: "Prašymas dėl vaiko priežiūros atostogų"
        },
        {
          id: "4",
          docName: "Prašymas dėl darbo laiko nustatymo"
        },
        {
          id: "5",
          docName: "Prašymas dėl atleidimo iš pareigų"
        },
        {
          id: "6",
          docName: "Prašymas laisva forma"
        }
      ],
      docSelected: "",
      displayEditor: false,
      errorMessage: "",
      canCreateDoc: false,
      displayEmptyEditor: false
    };
  }

  selectOption = value => {
    this.setState({ docSelected: value });
  };

  settingUserRole = () => {
    const userRole = localStorage.getItem('role')
    if(userRole === "ROLE_ADMIN"){
      this.setState({
        canCreateDoc: true
      })
    }else if(userRole === "ROLE_USER"){
      this.setState({
        canCreateDoc: false
      })
    }
  }

  componentDidMount = () => {
    this.settingUserRole();
  }

  handleDocsSubmit = e => {
    e.preventDefault();
    if(this.state.docSelected){
      this.setState({ displayEditor: true, errorMessage: "", displayEmptyEditor: false });
    }else{
      this.setState({errorMessage: "Pasirinkite dokumento šabloną" })
    }
  };

  createDocType = e => {
    this.setState({ displayEditor: false, errorMessage: "", displayEmptyEditor: true });
  }

  render() {

    return (
      <div className="containerDocumentCreation">
        <form className="documentCreationForm" onSubmit={this.handleDocsSubmit}>
          <h1>Pasirinkti dokumento šabloną</h1>
          <div>
            <label htmlFor="email">Pasirinkti dokumentą</label>
            <Picky
              options={this.state.docTypes}
              value={this.state.docSelected}
              onChange={this.selectOption}
              open={false}
              valueKey="id"
              labelKey="docName"
              multiple={false}
              includeFilter={true}
            />
            {this.state.errorMessage.length > 0 && (
              <span className="errorMessage">{this.state.errorMessage}</span>
            )}
          </div>
          {this.state.canCreateDoc && (
            <button className="creationButton" onClick={this.createDocType}>
              Kurti naują dokumento šabloną
            </button>
          )}
          <button type="submit" className="creationButton">
            Pildyti dokumentą
          </button>
        </form>
        {this.state.displayEditor && (
          <RichTextEditor style={{ float: "right", width: "60%" }} />
        )}
        {this.state.displayEmptyEditor && (
          <RichTextEditor style={{ float: "right", width: "60%" }} />
        )}
      </div>
    );
  }
}

export default CreateGroup;
