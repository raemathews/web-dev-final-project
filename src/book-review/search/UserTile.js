import React from 'react'
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

const UserTile = ({user}) => {
    const {currentUser} = useSelector(store => store.currentUser)
    const navigate = useNavigate();
    const visitProfile = () => {
        navigate(`/profile/${user._id}`, {replace: true})
    }
    const handleFollowUser = () => {
        console.log("followed")
    }

    const getProfileFile = () => {
        if (user.profile_pic) {
            return `/images/${user.profile_pic}`;
        }
        return `/images/profile.jpg`;
    }

    return (
        <button onClick={visitProfile} className="btn btn-light list-group-item user-list-item mb-1">
            <div className="row flex-row align-items-center">
                <div className="col-xl-3 col-lg-5 col-md-5 col-sm-2 col-2">
                    <img
                        width="100%"
                        className="float-end align-middle"
                        src={getProfileFile()}
                        style={{clipPath: "circle()"}}/>
                </div>
                <div className="col-xl-4 col-lg-7 col-md-7 col-sm-5 col-5">
                    <span className="fw-bold fs-6 align-middle">{user.username}</span>
                    <br />
                    <span className="fw-light align-middle">{user.handle}</span>
                </div>
                <div className="d-sm-block d-md-none d-xl-block col-xl-5 col-3">
                    <span className="fw-normal align-middle">View Profile</span>
                </div>
            </div>
        </button>
    )
}
export default UserTile