import React, { Component } from "react";
import Header from "../container/Header";
import SignUp from "../container/SignUp";
import Footer from "../container/Footer";

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default SignUpPage;
