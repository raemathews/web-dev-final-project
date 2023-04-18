import React, {useState} from "react";

const ProfilePersonalInfoMutable = () => {
    const [defaultUser, setDefaultUser] = useState({
        _id: "643b45c7a2af62c42d6d808e",
        handle: "@andra-g",
        username: "andrag",
        admin: false,
        password: "badPassword",
        email: "andra@example.com",
        phone_number: "312-122-2545",
        bio: "Example bio #1"
    });

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
        console.log("should update info");
        // TODO: this needs to be through the thunk, which is connected to the services
        // TODO: technically, nothing is connected to the button rn, since we are updated the moment
        // we input something new....
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
                    <text><b>Username: </b> {defaultUser.username}</text>
                </div>
                <div>
                    <text><b>Handle: </b> {defaultUser.handle}</text>
                </div>
                <div>
                    <text><b>Bio: </b> {defaultUser.bio}</text>
                </div>
                <div>
                    <text><b>Email: </b> {defaultUser.email}</text>
                </div>
                <div>
                    <text><b>Phone Number: </b> {defaultUser.phone_number}</text>
                </div>
                <div>
                    <text><b>Password: </b> {defaultUser.password}</text>
                </div>
            </div>
        );
    }

    return(
        <>
            <div className="col-4">
                <img src="haybale.jpg"
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