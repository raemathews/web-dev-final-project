import React from 'react'
import Navigation from "../navigation/Navigation";
import PersonalReviewList from "./review-data/PersonalReviewList";
import {Link} from "react-router-dom";
import ProfileInfo from "./Profile-Info";

const Profile = ({active}) => {
    return (
        <>
            <div className="row mt-2">
                    <Navigation />
                <div className="col-2"></div>
                <div className="col-8">
                    <ProfileInfo active={active}/>
                    <div className="row">
                        <PersonalReviewList />
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default Profile