import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import DefaultBody from "../container/DefaultBody";

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
