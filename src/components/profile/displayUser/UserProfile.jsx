import React from 'react';

import "../../../css/userprofile.css"

const UserProfile = ( props ) => {
    return (
        <div id="user-info-container">
            <div id="profile-image"><img src="https://img.icons8.com/color/452/dungeons-and-dragons.png" alt="userImage"></img></div>
            <div id = "user-info">
                <h2>Username: { props.userName }</h2>
                <h2>Email: { props.email }</h2>
            </div>

        </div>
    )
}

export default UserProfile;