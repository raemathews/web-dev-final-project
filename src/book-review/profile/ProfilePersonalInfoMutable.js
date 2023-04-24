import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../../services/users/users-thunk";
import {updateCurrentUser} from "../reducers/auth-reducer";
import {updateLibrarianThunk} from "../../services/librarians/librarians-thunk";
import {deleteFollowerThunk} from "../../services/followers/followers-thunk";

const ProfilePersonalInfoMutable = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.currentUser);
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

    const changeLibrary = event => {
        setDefaultUser({...defaultUser, library: event.target.value});
    };
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const updateProfileUserInfo = () => {
        dispatch(updateUserThunk(defaultUser));
        dispatch(updateCurrentUser(defaultUser));
    }

    const updateProfileLibInfo = () => {
        dispatch(updateLibrarianThunk(defaultUser));
        dispatch(updateCurrentUser(defaultUser));
    }

    let profileButton;
    if (isEditing && !currentUser.admin) {
        profileButton = (
            <button className={"btn bg-warning text-white list-group-item d-inline"}
                    type="button " onClick={() => {
                setIsEditing(false);
                updateProfileUserInfo();
            }}> Update </button>
        );
    } else if (isEditing && currentUser.admin) {
        profileButton = (
            <button className={"btn bg-warning text-white list-group-item d-inline"}
                    type="button" onClick={() => {
                setIsEditing(false);
                updateProfileLibInfo();
            }}> Update </button>
        );
    } else {
        profileButton = (
            <button className={"btn bg-secondary text-white list-group-item d-inline"}
                    type="button" onClick={() => {
                setIsEditing(true);
            }}> Edit Profile
                <i className={"fa fa-user-pen ms-2"}/>
            </button>
        );
    }

    const cancelButton = (
        <button className={"btn bg-danger text-white list-group-item d-inline"}
                type="button" onClick={() => {
            setIsEditing(false);
        }}> Discard Changes </button>
    )
    let updateOrViewInfo;
    if (isEditing && !currentUser.admin) {
        updateOrViewInfo = (
            <>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="userNameFld" className={"form-label fw-bold"}>
                            Username</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="userNameFld"
                               value={defaultUser.username}
                               onChange={changeUsername}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="handleFld" className={"form-label fw-bold"}>
                            Handle</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="handleFld"
                               value={defaultUser.handle}
                               onChange={changeHandle}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="emailFld" className={"form-label fw-bold"}>
                            Email</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="emailFld"
                               value={defaultUser.email}
                               onChange={changeEmail}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="phoneNumFld" className={"form-label fw-bold"}>
                            Phone #</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="phoneNumFld"
                               value={defaultUser.phone_number}
                               onChange={changePhoneNum}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="passwordFld" className={"form-label fw-bold"}>
                            Password</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="passwordFld"
                               value={defaultUser.password}
                               onChange={changePassword}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="bioFld" className={"form-label fw-bold"}>
                            Bio</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <textarea className={"form-control"}
                                  id="bioFld"
                                  value={defaultUser.bio}
                                  onChange={changeBio}
                                  style={{height: "100px"}}
                        />
                    </div>
                </div>
            </>
        );
    } else if (isEditing && currentUser.admin) {
        updateOrViewInfo = (
            <>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="userNameFld" className={"form-label fw-bold"}>
                            Username</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="userNameFld"
                               value={defaultUser.username}
                               onChange={changeUsername}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="handleFld" className={"form-label fw-bold"}>
                            Handle</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="handleFld"
                               value={defaultUser.handle}
                               onChange={changeHandle}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="passwordFld" className={"form-label fw-bold"}>
                            Password</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <input className={"form-control"}
                               id="passwordFld"
                               value={defaultUser.password}
                               onChange={changePassword}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-3"}>
                        <label htmlFor="bioFld" className={"form-label fw-bold"}>
                            Bio</label>
                    </div>
                    <div className={"col-12 col-md-6"}>
                        <textarea className={"form-control"}
                                  id="bioFld"
                                  value={defaultUser.bio}
                                  onChange={changeBio}
                                  style={{height: "100px"}}
                        />
                    </div>
                </div>
            </>
        );
    } else if (!isEditing && !currentUser.admin) {
        updateOrViewInfo = (
            <div className={"col-12 col-md-9 "}>
                <h4 className={"fw-bolder mt-2"}>{currentUser.username}</h4>
                <span className={"fw-bold text-muted"}>{currentUser.handle}</span>
                <span className={"fw-light text-muted d-block"}>{currentUser.email}</span>
                <span className={"fw-light text-muted d-block"}>{currentUser.phone_number}</span>
                {
                    passwordVisibility ?
                        <span className={"fw-light text-muted d-inline"} style={{width: "100px"}}>{currentUser.password}</span>
                        :
                        <input
                            value={currentUser.password}
                            readOnly
                            type={"password"}
                            className={"fw-light text-muted d-inline border-0 d-inline"}
                            style={{width: "100px"}}
                        />
                }
                {
                    passwordVisibility ||
                    <i className={`d-inline fa fa-eye ps-2 text-secondary`}
                       id={"showPassword"}
                       onClick={() => setPasswordVisibility(!passwordVisibility)}/>
                }
                {
                    passwordVisibility &&
                    <i className={`d-inline fa fa-eye-slash ps-2 text-secondary`}
                       id={"showPassword"}
                       onClick={() => setPasswordVisibility(!passwordVisibility)}/>
                }
                {currentUser.bio.length > 0 &&
                    <div className={"list-group"}>
                        <div className={"list-group-item mt-3"}>
                            {currentUser.bio}
                        </div>
                    </div>
                }
            </div>
        );
    } else if (!isEditing && currentUser.admin) {
        updateOrViewInfo = (
            <div className={"col-12 col-md-9 "}>
                <h4 className={"fw-bolder mt-2"}>{currentUser.username}</h4>
                <span className={"fw-bold text-muted"}>{currentUser.handle}</span>
                <span className={"fw-light text-muted d-block"}>Library: {currentUser.library}</span>
                {
                    passwordVisibility ?
                        <span className={"fw-light text-muted d-inline"} style={{width: "100px"}}>{currentUser.password}</span>
                        :
                        <input
                            value={currentUser.password}
                            readOnly
                            type={"password"}
                            className={"fw-light text-muted d-inline border-0 d-inline"}
                            style={{width: "100px"}}
                        />
                }
                {
                    passwordVisibility ||
                    <i className={`d-inline fa fa-eye ps-2 text-secondary`}
                       id={"showPassword"}
                       onClick={() => setPasswordVisibility(!passwordVisibility)}/>
                }
                {
                    passwordVisibility &&
                    <i className={`d-inline fa fa-eye-slash ps-2 text-secondary`}
                       id={"showPassword"}
                       onClick={() => setPasswordVisibility(!passwordVisibility)}/>
                }
                {currentUser.bio.length > 0 &&
                    <div className={"list-group"}>
                        <div className={"list-group-item mt-3"}>
                            {currentUser.bio}
                        </div>
                    </div>
                }
            </div>
        );
    }
    const fillerProfilePic = "/images/profile.jpg"
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col-12 col-md-4">
                    <img className="rounded-circle shadow-lg align-items-center justify-content-center"
                         width="200px"
                         alt="avatar2"
                         src={"/images/" + currentUser.profile_pic || fillerProfilePic}/>
                </div>
                <div className="col-12 col-md-8">
                    <div className={"row"}>
                        {updateOrViewInfo}
                        <div className={"col-12 col-md-auto list-group"}>
                            {profileButton}
                        </div>
                        <div className={"col-12 col-md-auto list-group"}>
                            {isEditing && cancelButton}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePersonalInfoMutable;