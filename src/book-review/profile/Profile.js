import React from 'react'
import Navigation from "../navigation/Navigation";
import PersonalReviewList from "./review-data/PersonalReviewList";
import ProfileInfo from "./Profile-Info";
import FollowersList from "./followers-data/FollowersList";
import FollowingList from "./following-data/FollowingList";
import ReadList from "./favorites-data/ReadList";

const Profile = ({active}) => {
    let content;

    console.log("Active in profile" + active);
    if (active === 'reviews') {
        content = (<PersonalReviewList />);
    } if (active === 'followers'){
        content = (<FollowersList />);
    } if (active === 'following') {
        content = (<FollowingList />);
    } if (active === 'read') {
        content = (<ReadList/>); //TODO: this will pass a boolean for where books are read or unread.
    } if (active === 'willRead') {
        content = (<ReadList/>);
    }
    return (
        <>
            <div className="row mt-2">
                    <Navigation />
                <div className="col-2"></div>
                <div className="col-8">
                    <ProfileInfo active={active}/>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default Profile