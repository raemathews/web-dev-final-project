import React from 'react'
import ProfileTabs from "./ProfileTabs";

const ProfileInfo = ({active}) => {
    return(
        <>
                <div className="row">
                    <h2> Profile </h2>
                    <div className="col-4">
                        <img src="haybale.jpg"
                             width="90%"
                             height="200px"/>
                    </div>
                    <div className="col-6">
                        <div>
                            <div>
                                <label htmlFor="firstNameFld">
                                    First Name</label>
                                <input id="firstNameFld"
                                       value="Alice"/>
                            </div>

                            <div>
                                <label htmlFor="lastNameFld">
                                    Last Name</label>
                                <input id="lastNameFld"
                                       value="Greene"/>
                            </div>

                            <div>
                                <label htmlFor="bioFld">Name</label>
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