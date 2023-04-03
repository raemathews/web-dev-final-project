import React from 'react'
import Navigation from "../navigation/Navigation";
import FollowingList from "./following-data/FollowingList";
import ProfileInfo from "./Profile-Info";

const ProfileFollowing = ({active}) => {
    return (
        <>
            <div className="row mt-2">
                <Navigation />
                <div className="col-2"></div>
                <div className="col-8">
                    <ProfileInfo active={active}/>
                    <div className="row">
                        <FollowingList />
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default ProfileFollowing