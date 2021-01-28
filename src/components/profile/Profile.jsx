import React from 'react';
import UserProfile from "./displayUser/UserProfile"
import DisplayUserCharacters from "./displayCharacters/DisplayUserCharacters"
import {connect} from "react-redux"

class Profile extends React.Component{
   
    render(){
        console.log("this is the current user", this.props.currentUser)
        return (
            <div>
                <UserProfile userName = {this.props.currentUser.username} email = {this.props.currentUser.email}/>
                {/* if a user exists then render the component below, else it doesn't render */}
                <DisplayUserCharacters id = {this.props.currentUser.userId}/>
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