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
    return(
        <div onClick={visitProfile} className="list-group-item user-list-item">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    {user.username}
                </div>
                <div className="col-3">
                    <button className="btn btn-sm btn-success" onClick={handleFollowUser}>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserTile