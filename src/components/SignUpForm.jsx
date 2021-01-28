import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createUser, getAllUsers } from "../redux/reducers"
class SignUpForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            userInfo: {
                username: "",
                email: "", 
                password: ""
            },
            confirmpassword: '',
        }
    }
    handleInputChange = e => {
        this.setState( {
            userInfo: {
                ...this.state.userInfo,
                [ e.target.name ]: e.target.value
            }
        } )
    }
    handlePasswordChange = e => {
        this.setState( {
            [ e.target.name ]: e.target.value
        } )
    }
    comparePassword = () => {
        if ( this.state.userInfo.password === this.state.confirmpassword ) {
            return true;
        }
        return false;
    }
    handleSubmit = async ( e ) => {
        e.preventDefault();
        if ( this.comparePassword() ) {
            await this.props.createUser( this.state.userInfo )
        }
        else {
            alert( "Passwords Need To Match" )
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={ e => this.handleSubmit( e ) }>
                    <label>
                        UserName <br></br>
                        <input type="text" name="username" placeholder="John Smith" value={ this.state.userInfo.username } onChange={ e => this.handleInputChange( e ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Email <br></br>
                        <input type="email" name="email" placeholder="johnsmith@email.com" value={ this.state.userInfo.email } onChange={ e => this.handleInputChange( e ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Password <br></br>
                        <input type="password" name="password" placeholder="John Smith" value={ this.state.userInfo.password } onChange={ e => this.handleInputChange( e ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Confirm Password <br></br>
                        <input type="password" name="confirmpassword" placeholder="John Smith" value={ this.state.confirmpassword } onChange={ e => this.handlePasswordChange( e ) }></input>
                    </label>
                    <br></br>
                    <input type="submit" value="Sign Up"></input>
                    <Link to="/"><input type="reset" value="Cancel"></input></Link>
                </form>
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {
        user: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: ( userInfo ) => dispatch( createUser( userInfo ) ),
        getAllUsers: () => dispatch( getAllUsers() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( SignUpForm );