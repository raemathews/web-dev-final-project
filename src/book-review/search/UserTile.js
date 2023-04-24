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
            <div className="row flex-row ">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-2 col-2">
                    <img
                        width="100%"
                        className="float-end align-middle"
                        src={getProfileFile()}
                        style={{clipPath: "circle()"}}/>
                </div>
                <div className="my-1 col-xl-9 col-lg-8 col-md-8 col-sm-10 col-10 align-items-center">
                    <p align="left" className="fw-bold p-0 m-0">{user.username}</p>
                    <p align="left" className="fw-light p-0 m-0">{user.handle}</p>
                </div>
            </div>
        </button>
    )
}
export default UserTile