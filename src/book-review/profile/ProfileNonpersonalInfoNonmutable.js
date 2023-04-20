import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersByIDThunk, findUsersThunk} from "../../services/users/users-thunk";

const ProfileNonpersonalInfoNonmutable = ({user}) => {
    // TODO: this should not use the currentUser, but one we get instead
    console.log("In component, user id is" + user)
    // user is the ID from the param. We want to retrieve the details of the user by ID.
    const dispatch = useDispatch();
    const {numResults, foundUsers, userFoundById, loading} =
        useSelector(store => store.users)

    useEffect(() => {
        dispatch(findUsersByIDThunk(user));
        console.log("User found " + userFoundById);
    }, [])
    return(
        <>
            <div className="col-4">
                <img src={userFoundById.profile_pic}
                     width="90%"
                     height="200px"/>
            </div>
            <div className="col-6">
                <div>
                    <div>
                        <text><b>Username: </b> {userFoundById.username}</text>
                    </div>
                    <div>
                        <text><b>Handle: </b> {userFoundById.handle}</text>
                    </div>
                    <div>
                        <text><b>Bio: </b> {userFoundById.bio}</text>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileNonpersonalInfoNonmutable;