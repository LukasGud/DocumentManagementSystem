import React, { Component } from "react";
import { Link, withRouter  } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUsers,
  faUsersCog
} from "@fortawesome/free-solid-svg-icons";
import "./adminBoardHeader.css";


library.add(faHome, faFileAlt, faUsers, faUsersCog);

class UserBoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: []
    };
  }

  settingUserRole = () => {
    const userRole = localStorage.getItem('role')
    this.setState({
        role: userRole
    })
    console.log(this.state.role)
  }

  handleLogout = async event => {
    event.preventDefault();
    await this.logout();
    this.props.history.push("/login");
  }

  logout = async () => {
   await localStorage.removeItem('token');
   await localStorage.removeItem('username')
   await localStorage.removeItem('role')
  }

  render() {
    const user = {
      roles: this.state.role
    };
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
          <Link to="/members">
              <FontAwesomeIcon icon="users-cog" className="text-light" />
          </Link>
        </div>
        <div className="navBar">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login" onClick={this.handleLogout} >
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
