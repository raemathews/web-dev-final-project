import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersByIDThunk, findUsersThunk} from "../../../services/users/users-thunk";
const FollowersItem = (
    {f}
) => {
    const {numResults, foundUsers, userFoundById, loading} = useSelector(
        state => state.users)
    const dispatch = useDispatch();

    let[user, setUser] = useState({});
    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])

    useEffect(() => {
        const list = foundUsers.filter((u) => u._id == f.follower_id)
        if(list.length > 0) {setUser(list[0])};
    }, [foundUsers])

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="fw-bolder">{user.handle}
                        <i className="fas fa-check-circle"></i>
                        - {user.username}
                    </div>
                    <div>{user.bio}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${user.profile_pic}`}/>
                </div>
            </div>
        </li>
    );
};
export default FollowersItem;
