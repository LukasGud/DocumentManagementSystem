import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./logIn.css";

library.add(faUser, faKey);

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "Neteisingi prisijungimo duomenys",
      users: [
        {
          id: "1",
          email: "user@pastas.lt",
          password: "Useruser1",
          role: "user"
        },
        {
          id: "2",
          email: "user2@pastas.lt",
          password: "Useruser2",
          role: "user"
        },
        {
          id: "3",
          email: "root@root.lt",
          password: "Rootroot0",
          role: "admin"
        }
      ]
    };
  }

  handleSubmitLogIn = e => {
    e.preventDefault();
    // fetch("http://localhost:8080/LoginPage", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     // Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("success: " + data);
    //   });
    console.log(this.state);
    this.verifyUser();
  };

  //funkcija turetu grazinti true arba false. Jeigu true -> nuoroda i admin/user board, jeigu false -> error message
  verifyUser = () => {
    const { email, password, users } = this.state;
    for (let i = 0; i < this.state.users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        return console.log("sutampa");
      }
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="containerLogIn">
        <h1>Prisijunkite prie sistemos</h1>
        <form onSubmit={this.handleSubmitLogIn} className="form-inline">
          <div className="form-group">
            <span className="input-group-addon" id="sizing-addon1">
              <FontAwesomeIcon className="icon" icon="user" />
            </span>
            <input
              className="form-conrol"
              name="email"
              type="email"
              placeholder="El. paštas"
              aria-describedby="sizing-addon1"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <span>
              <FontAwesomeIcon className="icon" icon="key" />
            </span>
            <input
              className="form-conrol"
              name="password"
              type="password"
              placeholder="Slaptažodis"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="logInButton">
            Prisijungti
          </button>
          <Link to="/registruotis">
            <small>Naujas narys? Registruokis čia</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default LogIn;
