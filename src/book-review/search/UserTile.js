import React from 'react'
import {useNavigate} from "react-router";

const UserTile = ({user}) => {
    const navigate = useNavigate();
    const visitProfile = () => {
        navigate(`/profile/${user._id}`, {replace: true})
    }
    const handleFollowUser = () => {
        console.log("followed")
    }
    return (
        <div onClick={visitProfile} className="list-group-item user-list-item ">
            <div className="row">
                <div className="col-2 ">
                    <i className="fa fa-user user-tile-icon"/>
                </div>
                <div className="col-6">
                    <span className="fw-bold fs-6">{user.username}</span>
                    <br />
                    <span className="fw-light">{user.handle}</span>
                </div>
                <div className="col-4">
                    <button className="btn btn-sm btn-success" onClick={handleFollowUser}>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserTile