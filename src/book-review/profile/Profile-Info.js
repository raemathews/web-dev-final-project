import React from 'react'
import ProfileTabs from "./ProfileTabs";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersByIDThunk} from "../../services/users/users-thunk";


const ProfileInfo = ({active}) => {

    const { currentUser } = useSelector((state) => state.currentUser);
    // TODO: add check if there is a logged in user or not.

    return(
        <>
                <div className="row">
                    <h2> Profile </h2>
                    <div className="col-4">
                        <img src={currentUser.profile_pic}
                             width="90%"
                             height="200px"/>
                    </div>
                    <div className="col-6">
                        <div>
                            <div>
                                <label htmlFor="firstNameFld">
                                    Handle</label>
                                <input id="firstNameFld"
                                       value={currentUser.handle}/>
                            </div>

                            <div>
                                <label htmlFor="lastNameFld">
                                    Username</label>
                                <input id="lastNameFld"
                                       value={currentUser.username}/>
                            </div>

                            <div>
                                <label htmlFor="bioFld">Bio</label>
                                <textarea id="bioFld"
                                          type="text"
                                          title="bio"
                                          placeholder="This is my bio for the profile!"/>
                            </div>
                        </div>
                        <button type="button"> Edit Profile </button>
                    </div>
                </div>
                <div className="row mt-3">
                    <ProfileTabs />
                </div>
        </>
    );
}

export default ProfileInfo;