import React from 'react';
import UserProfile from "./displayUser/UserProfile"
import DisplayUserCharacters from "./displayCharacters/DisplayUserCharacters"
import {connect} from "react-redux"
import { Redirect } from "react-router-dom"

import "../../css/userprofile.css"
class Profile extends React.Component{
   
    render(){
        return (
            <div id = "userprofile-container">
                {this.props.currentUser ? 
                <div><UserProfile userName = {this.props.currentUser.username} email = {this.props.currentUser.email}/>
                {/* if a user exists then render the component below, else it doesn't render */}
                <DisplayUserCharacters id = {this.props.currentUser.userId}/> </div>
                :
                <Redirect to ="/" />
            }
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        currentUser : state.currentLoggedInUserInfo,
    }
}
const mapDispatchToProps = dispatch => {
    return{}
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);