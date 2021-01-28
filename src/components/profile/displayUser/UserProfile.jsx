import React from 'react';

const UserProfile = (props) => {
    return(
        <div>
            <img alt = "userImage"></img>
            <h2>Username: {props.userName}</h2>
            <h2>Email: {props.email}</h2>
        </div>
    )
}

export default UserProfile;