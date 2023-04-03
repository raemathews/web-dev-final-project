import React from 'react'
import {Link} from 'react-router-dom'

// NOTE: THIS WILL NEED REACT/REDUCERS TO HANDLE EDITING THEM!
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