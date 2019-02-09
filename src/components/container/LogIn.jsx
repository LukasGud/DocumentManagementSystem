import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "../../css/logIn.css";

library.add(faUser, faKey);

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmitLogIn = e => {
    e.preventDefault();
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
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
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    //emailValidationRegex - example@example.lt - two letters after .
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    //passValidationRegex - at least 8 characters, one capital, one regular letter and numebr
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    //error zinutes laikinos. Klaidos pranesimas bus kitoks, atsizvelgiant kaip pavyks pasiekt viska is db
    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Neteisingas prisijungimo vardas";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "Neteisingas slaptazodis";
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value
    });
  };

  render() {
    const { formErrors } = this.state;
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
            {formErrors.email.length > 0 && (
              <span className="loginErrorMessage">{formErrors.email}</span>
            )}
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
            {formErrors.password.length > 0 && (
              <span className="loginErrorMessage">{formErrors.password}</span>
            )}
          </div>
          <button type="submit" className="logInButton">
            Prisijungti
          </button>
          <Link to="/signup">
            <small>Naujas narys? Registruokis čia</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default LogIn;
