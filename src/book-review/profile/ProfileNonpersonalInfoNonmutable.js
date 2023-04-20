import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const ProfileNonpersonalInfoNonmutable = ({user}) => {
    // TODO: this should not use the currentUser, but one we get instead
    // user is the ID from the param. We want to retrieve the details of the user by ID.
    return(
        <>
            <div className="col-4">
                <img src={currentUser.profile_pic}
                     width="90%"
                     height="200px"/>
            </div>
            <div className="col-6">
                <div>
                    <div>
                        <text><b>Username: </b> {currentUser.username}</text>
                    </div>
                    <div>
                        <text><b>Handle: </b> {currentUser.handle}</text>
                    </div>
                    <div>
                        <text><b>Bio: </b> {currentUser.bio}</text>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileNonpersonalInfoNonmutable;