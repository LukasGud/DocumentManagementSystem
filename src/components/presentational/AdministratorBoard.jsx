import React, { Component } from "react";
import AdminHeader from "../container/AdminBoardHeader/AdminBoardHeader";
import DefaultBody from "../container/DefaultBody/DefaultBody";
import Footer from "../container/Footer";

//  path : /adminLangas
class AdministratorBord extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <DefaultBody />
        <Footer />
      </div>
    );
  }
}

export default AdministratorBord;
