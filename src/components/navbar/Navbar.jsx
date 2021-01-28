import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutUser } from "../../redux/reducers"
import './Navbar.css'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/classes">Classes</Link>
              </li>
              <li className="nav-item">
                <Link to="/races">Races</Link>
              </li>
              <li className="nav-item">
                <Link to="/spells">Spells</Link>
              </li>
              <li className="nav-item">
                <Link to="/monsters">Monsters</Link>
              </li>
              <li className="nav-item">
                <Link to="/builds">Characters</Link>
              </li>
              <li className="nav-item">
                <Link to="/createCharacter">Create Character</Link>
              </li>
              <div className="dropdown">
                <li className="dropbtn">Profile</li>
                <div className="dropdown-content">
                  <Link to="/userprofile">User Profile</Link>
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login">Login</Link>
                  <button onClick={ e => this.props.logoutUser() }>Logout</button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch( logoutUser() ),
  }
}

export default connect( null, mapDispatchToProps )( Navbar );
