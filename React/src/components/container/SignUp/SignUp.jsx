import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import Alert from "react-bootstrap/Alert";

// letterValidationRegex - only letters
const letterValidationRegex = /^[a-zA-Z]+$/;

//emailValidationRegex - example@example.lt - two letters after .
const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

//passValidationRegex - at least 8 characters, one capital, one regular letter and numebr
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: "",
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstname":
        formErrors.firstname = letterValidationRegex.test(value)
          ? ""
          : "Vardą gali sudaryti tik raidės";
        break;
      case "lastname":
        formErrors.lastname = letterValidationRegex.test(value)
          ? ""
          : "Pavardę gali sudaryti tik raidės";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "El. pašto formatas netinkamas (pavyzdys@paštas.lt)";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "Slaptažodis neatitnka reikalavimų (mažiausiai 8 simboliai iš jų bent viena didžioji, viena mažoji raidės ir skaičius)";
        break;
      case "repeatPassword":
        formErrors.repeatPassword =
          value === this.state.password ? "" : "Slaptažodžiai nesutampa";
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value
    });
  };

  handleSubmitSignUp = event => {
    event.preventDefault();
    this.emptyfields();
    this.validateForm() ? console.log("uzregistruota") : console.log("nepaejo");
    this.fetchUserToDb();
  };

  validateForm() {
    const { firstname, lastname, email, password, repeatPassword } = this.state;
    return (
      this.lettersValidate(firstname) &&
      this.lettersValidate(lastname) &&
      this.emailValidate(email) &&
      this.passwordValidate(password) &&
      this.passwordValidate(repeatPassword) &&
      this.passwordsMatch(password, repeatPassword)
    );
  }

  // or maybe String.matches() i dont remember now.
  passwordsMatch(passOne, passTwo) {
    return passOne === passTwo;
  }

  lettersValidate(name) {
    return letterValidationRegex.test(name) && name !== "";
  }

  emailValidate(email) {
    return emailRegex.test(email) && email !== "";
  }

  passwordValidate(password) {
    return passwordRegex.test(password) && password !== "";
  }

  emptyfields() {
    const { firstname, lastname, email, password, repeatPassword } = this.state;

    return (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== "" &&
      repeatPassword !== ""
    );
  }

  fetchUserToDb = async () => {
    try {
      const userData = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.email,
          name: this.state.firstname,
          // lastName: this.state.lastname,
          email: this.state.email,
          password: this.state.repeatPassword
        })
      });
      const data = await userData.json();
      console.log(data);
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let {
      firstname,
      lastname,
      email,
      password,
      repeatPassword,
      formErrors
    } = this.state;
    return (
      <div className="containerSignUp">
        <form className="signUpForm" onSubmit={this.handleSubmitSignUp}>
          <h1>Sukurti paskyrą</h1>
          <div>
            <label htmlFor="firstName">Vardas</label>
            <input
              type="text"
              className="firstname"
              placeholder="Vardas"
              name="firstname"
              pattern="^[a-zA-Z]+$"
              title="Jūsų vardą gali sudaryti tik raidės"
              value={firstname}
              onChange={this.handleChange}
              maxLength="30"
              required
            />
            {formErrors.firstname.length > 0 && (
              <span className="errorMessage">{formErrors.firstname}</span>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Pavardė</label>
            <input
              type="text"
              className="lastname"
              placeholder="Pavardė"
              name="lastname"
              pattern="^[A-Za-z]+$"
              title="Jūsų pavardę gali sudaryti tik raidės"
              maxLength="40"
              value={lastname}
              onChange={this.handleChange}
              required
            />
            {formErrors.lastname.length > 0 && (
              <span className="errorMessage">{formErrors.lastname}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Elektroninis paštas</label>
            <input
              type="email"
              className="email"
              placeholder="El. paštas"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="elektroninio pašto formatas yra pavyzdys@paštas.lt"
              maxLength="50"
              value={email}
              onChange={this.handleChange}
              required
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Slaptažodis</label>
            <input
              type="password"
              className="password"
              placeholder="Slaptažodis"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              maxLength="40"
              title="Slaptažodį turi sudaryti ne mažiau 8 simboliai iš jų viena bent didžioji raidė, viena mažoji ir skaičius"
              value={password}
              onChange={this.handleChange}
              required
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Pakartoti slaptažodį</label>
            <input
              type="password"
              className="repeatPassword"
              placeholder="Pakartoti slaptažodį"
              name="repeatPassword"
              maxLength="40"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="pakartokite slaptažodį"
              value={repeatPassword}
              onChange={this.handleChange}
              required
            />
            {formErrors.repeatPassword.length > 0 && (
              <span className="errorMessage">{formErrors.repeatPassword}</span>
            )}
          </div>
          <button type="submit" className="registrationButton">
            Registruotis
          </button>
          <Link to="/login">
            <small>Jau esate narys? Prisijunkite</small>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
