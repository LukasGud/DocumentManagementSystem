import React, { Component } from "react";
import Header from "./container/Header/Header";
import Footer from "./container/Footer";
import App from "../App";
import "./AppContainer.css";

class MainApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div className="bodyContainer">
          <App />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainApp;
