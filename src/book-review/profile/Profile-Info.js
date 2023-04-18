import React from 'react'
import {Link} from 'react-router-dom'
import ProfilePersonalInfoMutable from "./ProfilePersonalInfoMutable";

// NOTE: THIS WILL NEED REACT/REDUCERS TO HANDLE EDITING THEM!
const ProfileInfo = ({active}) => {
    return(
        <>
                <div className="row">
                    <h2> Profile </h2>
                    <ProfilePersonalInfoMutable/>
                </div>
                <div className="row mt-3">
                    <ul className="nav nav-pills mb-2">
                        <li className="nav-item">
                            <Link to="/profile" className={`nav-link
                     ${active === 'start'?'active':''}`}>
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
                            <Link to="/profile/reads" className={`nav-link
                     ${active === 'reads'?'active':''}`}>
                                Reads
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile/willReads" className={`nav-link
                     ${active === 'willReads'?'active':''}`}>
                                Will Reads
                            </Link>
                        </li>
                    </ul>
                </div>
        </>
    );
}

export default ProfileInfo;