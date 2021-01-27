import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }

    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.username) {
      alert('please enter username')
    }

    if (!this.state.password) {
      alert('please enter password')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUserChange}
        />

        <label>Password</label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

function mapState(state) {
  return
}

// const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);

// export {connectedLoginPage as LoginPage};

export default LoginPage
