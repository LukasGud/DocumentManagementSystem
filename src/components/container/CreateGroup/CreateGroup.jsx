import React, { Component } from "react";
import "./createGroup.css";
import Picky from "react-picky";
import "react-picky/dist/picky.css";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rights: [
        {
          id: 1,
          right: "Dokumentų tvirtinimas"
        },
        {
          id: 2,
          right: "Dokumentų atmetimas"
        },
        {
          id: 3,
          right: "Naujų dokumentų šablonų kūrimas"
        }
      ],
      members: [
        {
          id: "1",
          firstName: "Rimas",
          lastName: "Rimaitis"
        },
        {
          id: "2",
          firstName: "Jonas",
          lastName: "Jonaitis"
        },
        {
          id: "3",
          firstName: "Angelė",
          lastName: "Angelienė"
        },
        {
          id: "4",
          firstName: "Rimutė",
          lastName: "Rimka"
        }
      ],
      membersSelected: []
    };
  }

  selectMultipleOptions = value => {
    console.count("onChange");
    console.log("vals", value);
    this.setState({ membersSelected: value });
  };

  render() {
    return (
      <div className="containerGroupCreation">
        <form className="groupCreationForm" onSubmit={this.handleGroupSubmit}>
          <h1>Sukurti naują grupę</h1>
          <div>
            <label htmlFor="groupName">Grupės pavadinimas</label>
            <input
              type="text"
              className="groupName"
              placeholder="Grupės pavainimas"
              name="groupName"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Trumpas aprašymas</label>
            <textarea
              type="text"
              className="description"
              placeholder="Trumpai apie grupę.."
              name="description"
            />
          </div>
          <div>
            <label htmlFor="email">Pridėti narius</label>
            <Picky
              options={this.state.members}
              value={this.state.membersSelected}
              onChange={this.selectMultipleOptions}
              open={false}
              valueKey="id"
              labelKey="firstName"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
            />
          </div>
          <div>
            <label htmlFor="rights">Teisės grupei:</label>
            {this.state.rights.map(right => (
              <label
                htmlFor={right.right.toLocaleLowerCase}
                className="inputContainer"
              >
                <input
                  type="checkbox"
                  key={right.id}
                  name={right.right.toLocaleLowerCase}
                />
                {right.right}
                <span className="checkmark" />
              </label>
            ))}
          </div>
          <button type="submit" className="registrationButton">
            Registruotis
          </button>
        </form>
      </div>
    );
  }
}

export default CreateGroup;
