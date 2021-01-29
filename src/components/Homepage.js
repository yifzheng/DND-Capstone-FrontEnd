import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllClasses } from '../redux/reducers'
import { Link } from 'react-router-dom'

import '../css/homepage.css'
class Homepage extends Component {
  async componentDidMount() {
    await this.props.getAllClasses()
  }
  render() {
    console.log('classes', this.props.classes)
    return (
      <div className="homepage">
        <img
          className="home-page-logo"
          src="https://dragonfirethegame.com/wp-content/uploads/2017/04/logo-dnd.png"
        ></img>

        {this.props.currentUser ? (
          <div>
            <Link to="CharacterCreation">
              <button className="chara-create-btn">Create A Character!</button>{' '}
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="login-btn">Login To Create Character</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Sign Up To Create Account</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    classes: state.classes,
    currentUser: state.currentLoggedInUserInfo,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllClasses: () => dispatch(getAllClasses()),
  }
}
export default connect(mapState, mapDispatch)(Homepage)

// we should get the values on the "create your chara" page b/c
// if the user refreshes on that page, state will be reset and
// the options will be blank
