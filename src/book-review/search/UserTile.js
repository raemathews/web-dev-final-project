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
    console.log("username: " + user.username)
    return (
        <div onClick={visitProfile} className="list-group-item user-list-item">
            <div className="row">
                <div className="col-2 ">
                    <i className="fa fa-user user-tile-icon"/>
                </div>
                <div className="col-7">
                    <span className="fw-bold fs-6">{user.username}</span>
                    <br />
                    <span className="fw-light">{user.handle}</span>
                </div>
                <div className="col-3">
                    <button className={`btn btn-sm btn-success ${currentUser || "d-none"}`} onClick={handleFollowUser}>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserTile