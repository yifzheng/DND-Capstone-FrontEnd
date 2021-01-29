import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser, getAllUsers } from '../redux/reducers'
class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        username: '',
        email: '',
        password: '',
      },
      confirmpassword: '',
      redirect: false,
    }
  }
  handleInputChange = (e) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value,
      },
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  comparePassword = () => {
    if (this.state.userInfo.password === this.state.confirmpassword) {
      return true
    }
    return false
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.comparePassword()) {
      await this.props.createUser(this.state.userInfo).then(() => {
        if (!this.props.newUser) {
          alert('That email already exists!')
          return
        } else {
          this.setState({
            redirect: true,
          })
        }
      })
    } else {
      alert('Passwords Need To Match')
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <div className="sign-up-form-container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label>
                UserName
                <input
                  type="text"
                  name="username"
                  placeholder="John Smith"
                  value={this.state.userInfo.username}
                  onChange={(e) => this.handleInputChange(e)}
                ></input>
              </label>
            </div>

            <div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="johnsmith@email.com"
                  value={this.state.userInfo.email}
                  onChange={(e) => this.handleInputChange(e)}
                ></input>
              </label>
            </div>

            <div>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="John Smith"
                  value={this.state.userInfo.password}
                  onChange={(e) => this.handleInputChange(e)}
                ></input>
              </label>
            </div>

            <div>
              <label>
                Confirm Password
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="John Smith"
                  value={this.state.confirmpassword}
                  onChange={(e) => this.handlePasswordChange(e)}
                ></input>
              </label>
            </div>

            <div>
              <input type="submit" value="Sign Up"></input>
              <Link to="/">
                <input type="reset" value="Cancel"></input>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
    newUser: state.newUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userInfo) => dispatch(createUser(userInfo)),
    getAllUsers: () => dispatch(getAllUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
