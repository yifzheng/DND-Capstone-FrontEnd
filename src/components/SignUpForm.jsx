import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser, getAllUsers } from '../redux/reducers'

import "../css/signup-form.css"
class SignUpForm extends Component {
  constructor ( props ) {
    super( props )
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
  handleInputChange = ( e ) => {
    this.setState( {
      userInfo: {
        ...this.state.userInfo,
        [ e.target.name ]: e.target.value,
      },
    } )
  }
  handlePasswordChange = ( e ) => {
    this.setState( {
      [ e.target.name ]: e.target.value,
    } )
  }
  comparePassword = () => {
    if ( this.state.userInfo.password === this.state.confirmpassword ) {
      return true
    }
    return false
  }
  handleSubmit = async ( e ) => {
    e.preventDefault()
    if ( this.comparePassword() ) {
      await this.props.createUser( this.state.userInfo ).then( () => {
        if ( !this.props.newUser ) {
          alert( 'That email already exists!' )
          return
        } else {
          this.setState( {
            redirect: true,
          } )
        }
      } )
    } else {
      alert( 'Passwords Need To Match' )
    }
  }
  render () {
    if ( this.state.redirect ) {
      return <Redirect to="/login" />
    }
    return (
      <div id="signup-form-container">
        <div id="signup-form" className="sign-up-form-container">
          <form onSubmit={ ( e ) => this.handleSubmit( e ) }>
            <div id="username-container">
              <label id="username">
                Username <br></br>
                <input className="username"
                  type="text"
                  name="username"
                  placeholder="John Smith"
                  value={ this.state.userInfo.username }
                  onChange={ ( e ) => this.handleInputChange( e ) }
                ></input>
              </label>
            </div>

            <div id="email-container">
              <label id="email">
                Email <br></br>
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="johnsmith@email.com"
                  value={ this.state.userInfo.email }
                  onChange={ ( e ) => this.handleInputChange( e ) }
                ></input>
              </label>
            </div>

            <div id="password-container">
              <label id="password">
                Password<br></br>
                <input
                  className="password"
                  type="password"
                  name="password"
                  value={ this.state.userInfo.password }
                  onChange={ ( e ) => this.handleInputChange( e ) }
                ></input>
              </label>
            </div>

            <div id="password-container">
              <label id="password">
                Confirm Password<br></br>
                <input
                  className="password"
                  type="password"
                  name="confirmpassword"
                  value={ this.state.confirmpassword }
                  onChange={ ( e ) => this.handlePasswordChange( e ) }
                ></input>
              </label>
            </div>

            <div>
              <input id="signup" type="submit" value="Sign Up"></input>
              <Link to="/">
                <input id="cancel-signup" type="reset" value="Cancel"></input>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    user: state.users,
    newUser: state.newUser,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    createUser: ( userInfo ) => dispatch( createUser( userInfo ) ),
    getAllUsers: () => dispatch( getAllUsers() ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( SignUpForm )
