import React from 'react'
import ProfileTabs from "./ProfileTabs";
import ProfilePersonalInfoMutable from "./ProfilePersonalInfoMutable";


const ProfileInfo = ({active}) => {
    return(
        <>
                <div className="row">
                    <h2> Profile </h2>
                    <ProfilePersonalInfoMutable/>
                </div>
                <div className="row mt-3">
                    <ProfileTabs />
                </div>
        </>
    );
}

export default ProfileInfo;