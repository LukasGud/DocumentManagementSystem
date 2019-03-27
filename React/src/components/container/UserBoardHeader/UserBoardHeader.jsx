import React, { Component } from "react";
import { Link, withRouter  } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUsers,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";
import "./userBoardNav.css";
import { hasRole } from "../../Auth";


library.add(faHome, faFileAlt, faUsers, faUserCog);

class UserBoardHeader extends Component {
  constructor(props) {
    super(props);
   
  }

  logout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('username');
   localStorage.removeItem('role');
   this.props.history.push("/login");
  }

  render() {
    
    return (
      <nav className="headerNavBar navbar fixed-top bg-dark">
        <div className="userNavBar">
          <Link to="/userboard">
            <FontAwesomeIcon icon="home" className="text-light" />
          </Link>
          <Link to="/mydocuments">
            <FontAwesomeIcon icon="file-alt" className="text-light" />
          </Link>
          <Link to="/groups">
            <FontAwesomeIcon icon="users" className="text-light" />
          </Link>
        </div>
        <div className="navBar">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login" onClick={this.logout} >
                Atsijungti
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(UserBoardHeader);
