import React from 'react'
import Navigation from "../navigation/Navigation";
import PersonalReviewList from "./PersonalReviewList";
import {Link} from "react-router-dom";

const ProfileFollowers = ({active}) => {
    return (
        <>
            <div className="row mt-2">
                <Navigation />
                <div className="col-2"></div>
                <div className="col-8">
                    <div>
                        <h2> Profile </h2>

                        <img src="haybale.jpg"
                             width="100%"
                             height="200px"/>

                        <img src="mishu.jpeg"
                             height="48px"
                             width="48px"/>
                        <a href="edit-profile.html">Edit Profile</a>
                    </div>
                    <div className="row mt-3">
                        <ul className="nav nav-pills mb-2">
                            <li className="nav-item">
                                <Link to="/profile" className={`nav-link
                     ${active === 'reviews'?'active':''}`}>
                                    Reviews
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile/followers" className={`nav-link
                     ${active === 'followers'?'active':''}`}>
                                    Followers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile/following" className={`nav-link
                     ${active === 'following'?'active':''}`}>
                                    Following
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile/favorites" className={`nav-link
                     ${active === 'favorites'?'active':''}`}>
                                    Favorites
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <PersonalReviewList />
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default ProfileFollowers