import React from 'react';
import UserProfile from "./displayUser/UserProfile"
import DisplayUserCharacters from "./displayCharacters/DisplayUserCharacters"
const Profile = ( props ) => {
    return (
        <div>
            <UserProfile />
            <DisplayUserCharacters />
        </div>
    )
}

export default Profile;