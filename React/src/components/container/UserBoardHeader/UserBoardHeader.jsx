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
import Dropdown from 'react-bootstrap/Dropdown'


library.add(faHome, faFileAlt, faUsers, faUserCog);

class UserBoardHeader extends Component {
  constructor(props) {
  super(props);
   this.state = {
      name: ""
   }
  }

  logout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('username');
   localStorage.removeItem('role');
   this.props.history.push("/login");
   this.setState({
      name: ""
   })
  }

  componentDidMount = async () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username')
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${username}`,
        {
          method: "GET",
          headers: {
            "authorization": "Bearer " + token,
            "content-type": "application/json"
          }
        }
      );
      const data = await response.json();
      this.setState({ name: data.name })
    } catch (error) {
      console.error(error);
    }
  };

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
        <div className="navBar nav justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {this.state.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item to="/login" onClick={this.logout}>
                  Atsijungti
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default withRouter(UserBoardHeader);
