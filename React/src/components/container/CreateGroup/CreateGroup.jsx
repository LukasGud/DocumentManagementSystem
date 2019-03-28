import React, { Component } from "react";
import "./createGroup.css";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import { Link, withRouter  } from "react-router-dom";

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
        }
      ],
      // members: [
      //   {
      //     id: "1",
      //     firstName: "Rimas",
      //     lastName: "Rimaitis"
      //   },
      //   {
      //     id: "2",
      //     firstName: "Jonas",
      //     lastName: "Jonaitis"
      //   },
      //   {
      //     id: "3",
      //     firstName: "Angelė",
      //     lastName: "Angelienė"
      //   },
      //   {
      //     id: "4",
      //     firstName: "Rimutė",
      //     lastName: "Rimka"
      //   }
      // ],
      membersSelected: [],
      groupName: "",
      description: "",
      rightsSelected: []
    };
  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(this.state);
  };

  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    const getusers = await fetch(
      "http://localhost:8080/api/users",
      {
        method: "GET",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "authorization": "Bearer " + token
        }
      }
    );
    const users = await getusers.json();
    this.setState({ members: users })

  
      // const getuserswith = await fetch(
      //   "http://localhost:8080/api/usergroups",
      //   {
      //     method: "GET",
      //     headers: {
      //       // "accept": "application/json",
      //       "content-type": "application/json",
      //       "authorization": "Bearer " + token
      //     }
      //   }
      // );
      // const data = await getuserswith.json();
      // console.log(data)
      // console.log(getuserswith)
  
  }

  selectMembers = value => {
    console.count("onChange");
    console.log("vals", value);
    this.setState({ membersSelected: value });
  };

  selectRights = value => {
    console.count("onChange");
    console.log("vals", value);
    this.setState({ rightsSelected: value });
  };

  handleGroupSubmit = async (e) => {
  
    this.createGroup();
    this.props.history.push("/groups")
  };

  createGroup = async () => {
    const token = localStorage.getItem("token");
    const addDoc = await fetch(
      "http://localhost:8080/api/groups",
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "authorization": "Bearer " + token
        },
        body: JSON.stringify({
          groupName: this.state.groupName,
          groupDescription: this.state.description
        })
      }
    );
    const res = await addDoc.json();
    console.log("Sukurtos grupes id" + res.id);
    if(addDoc.status === 200){
      let addUsersToGroup = await this.state.membersSelected.forEach(user => fetch(
        "http://localhost:8080/api/usergroups",
        {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": "Bearer " + token
          },
          body: JSON.stringify({
            group_id: res.id,
            user_id: user.id
          })
        }
      ));
    }
    
  }

  render() {
    return (
      <div className="containerGroupCreation">
        <form className="groupCreationForm" onSubmit={this.handleGroupSubmit}>
          <h1>Kurti naują grupę</h1>
          <div>
            <label htmlFor="groupName">Grupės pavadinimas</label>
            <input
              type="text"
              className="groupName"
              placeholder="Grupės pavadinimas"
              name="groupName"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Pridėti narius</label>
            <Picky
              options={this.state.members}
              value={this.state.membersSelected}
              onChange={this.selectMembers}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              placeholder="Pasirinkite narius, kuriuos norite pridėti"
            />
          </div>
          <div>
            <label htmlFor="rights">Pasirinkti grupės teises:</label>
            <Picky
              options={this.state.rights}
              value={this.state.rightsSelected}
              onChange={this.selectRights}
              open={false}
              valueKey="id"
              labelKey="right"
              multiple={true}
              placeholder="Pasirinkite teises grupei"
            />
          </div>
          <button type="submit" className="registrationButton">
            Kurti grupę
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateGroup);
