import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducers'

class LoginPage extends React.Component {
  state = {
    loginInfo: {
      username: '',
      email: '',
      password: '',
    },
  }

  handleLoginFormChange = (e) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleLoginFormSubmit = async (e) => {
    e.preventDefault()
    console.log('logging in with info:', this.state.loginInfo)
    await this.props.loginUser(this.state.loginInfo)

    setTimeout(() => {
      console.log(
        'currentLoggedInUserInfo:',
        this.props.currentLoggedInUserInfo
      )
    }, 2000)
  }

  render() {
    console.log('loginInfo state:', this.state.loginInfo)
    return (
      <div>
        {/* LOGIN FORM */}
        <form onSubmit={(e) => this.handleLoginFormSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            required
            onChange={(e) => this.handleLoginFormChange(e)}
          />
          <br />
          <br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={(e) => this.handleLoginFormChange(e)}
          />
          <br />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={(e) => this.handleLoginFormChange(e)}
          />
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLoggedInUserInfo: state.currentLoggedInUserInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginInfo) => dispatch(loginUser(loginInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
