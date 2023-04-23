import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../../services/users/users-thunk";
import {updateCurrentUser} from "../reducers/auth-reducer";

const ProfilePersonalInfoMutable = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.currentUser);
    const [defaultUser, setDefaultUser] = useState(currentUser);

    const [isEditing, setIsEditing] = useState(false);
    const changeUsername = event => {
        setDefaultUser({...defaultUser, username: event.target.value});
    };
    const changeHandle = event => {
        setDefaultUser({...defaultUser, handle: event.target.value});
    };
    const changeBio = event => {
        setDefaultUser({...defaultUser, bio: event.target.value});
    };
    const changeEmail = event => {
        setDefaultUser({...defaultUser, email: event.target.value});
    };
    const changePhoneNum = event => {
        setDefaultUser({...defaultUser, phone_number: event.target.value});
    };
    const changePassword = event => {
        setDefaultUser({...defaultUser, password: event.target.value});
    };

    const updateProfileInfo = () => {
        dispatch(updateUserThunk(defaultUser));
        dispatch(updateCurrentUser(defaultUser));
    }

    let profileButton;
    if (isEditing) {
        profileButton = (
            <button type="button" onClick={() => {
                setIsEditing(false);
                updateProfileInfo();}}> Update </button>
        );
    } else {
        profileButton = (
            <button type="button" onClick={() => {
                setIsEditing(true);}}> Edit </button>
        );
    }

    let updateOrViewInfo;
    if (isEditing) {
        updateOrViewInfo = (
            <div>
                <div>
                    <label htmlFor="userNameFld">
                        Username</label>
                    <input id="userNameFld"
                           value={defaultUser.username}
                           onChange={changeUsername}/>
                </div>
                <div>
                    <label htmlFor="handleFld">
                        Handle</label>
                    <input id="handleFld"
                           value={defaultUser.handle}
                           onChange={changeHandle}/>
                </div>
                <div>
                    <label htmlFor="bioFld">Bio</label>
                    <textarea id="bioFld"
                              type="text"
                              title="bio"
                              placeholder="This is my bio for the profile!"
                              value={defaultUser.bio}
                              onChange={changeBio}/>
                </div>
                <div>
                    <label htmlFor="emailFld">
                        Email</label>
                    <input id="emailFld"
                           value={defaultUser.email}
                           onChange={changeEmail}/>
                </div>
                <div>
                    <label htmlFor="phoneNumFld">
                        Phone Number</label>
                    <input id="phoneNumFld"
                           value={defaultUser.phone_number}
                           onChange={changePhoneNum}/>
                </div>
                <div>
                    <label htmlFor="passwordFld">
                        Password</label>
                    <input id="passwordFld"
                           value={defaultUser.password}
                           onChange={changePassword}/>
                </div>
            </div>
        );
    } else {
        updateOrViewInfo = (
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
                <div>
                    <text><b>Email: </b> {currentUser.email}</text>
                </div>
                <div>
                    <text><b>Phone Number: </b> {currentUser.phone_number}</text>
                </div>
                <div>
                    <text><b>Password: </b> {currentUser.password}</text>
                </div>
            </div>
        );
    }

    return(
        <>
            <div className="col-4">
                <img src={currentUser.profile_pic}
                     width="90%"
                     height="200px"/>
            </div>
            <div className="col-6">
                {updateOrViewInfo}
                {profileButton}
            </div>
        </>
    );
}

export default ProfilePersonalInfoMutable;