import React from 'react';
import UserProfile from "./displayUser/UserProfile"
import DisplayUserCharacters from "./displayCharacters/DisplayUserCharacters"
const Profile = ( props ) => {
    return (
        <div>
            <UserProfile />
            {/* if a user exists then render the component below, else it doesn't render */}
            <DisplayUserCharacters />
        </div>
    )
}

export default Profile;