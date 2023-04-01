import React from 'react'
import {Link} from 'react-router-dom'

const ProfileInfo = ({active}) => {
    return(
        <>
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
        </>
    );
}

export default ProfileInfo;