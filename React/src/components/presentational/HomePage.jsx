import React, { Component } from "react";
import Header from "../container/Header/Header";
import Footer from "../container/Footer";
import DefaultBody from "../container/DefaultBody/DefaultBody";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <DefaultBody />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
