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
      errorMessage: "Neteisingi prisijungimo duomenys"
    };
  }

  handleSubmitLogIn = async e => {
    e.preventDefault();

    try {
      const loginData = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          usernameOrEmail: this.state.email,
          password: this.state.password
        })
      });
      const data = await loginData.json();
      console.log(data);
      alert("Sveikiname prisijungus");
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
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
              type="text"
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
          <Link to="/signup">
            <small>Naujas narys? Registruokis čia</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default LogIn;
