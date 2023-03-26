import React from 'react'
import Navigation from "../navigation/Navigation";
import PersonalReviewList from "./PersonalReviewList";

const Profile = () => {
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
                                <a className="nav-link active">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Followers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Following</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Favorites</a>
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

export default Profile