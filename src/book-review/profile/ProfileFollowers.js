import React from 'react'
import Navigation from "../navigation/Navigation";
import FollowersList from "./followers-data/FollowersList";
import ProfileInfo from "./Profile-Info";

const ProfileFollowers = ({active}) => {
    return (
        <>
            <div className="row mt-2">
                <Navigation />
                <div className="col-2"></div>
                <div className="col-8">
                    <ProfileInfo active={active}/>
                    <div className="row">
                        <FollowersList />
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default ProfileFollowers