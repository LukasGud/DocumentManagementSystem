import React, { Component } from "react";
import Header from "../container/Header/Header";
import LogIn from "../container/LogIn/LogIn";
import Footer from "../container/Footer";

class LogInPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogIn />
        <Footer />
      </div>
    );
  }
}

export default LogInPage;
