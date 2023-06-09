import React, {useEffect, useState} from "react";
import FollowersItem from "./FollowersItem.js";
import {useDispatch, useSelector} from "react-redux";
import {
    findAllFollows,
    findFollowersByUserIdThunk,
    findFollowingByUserIdThunk
} from "../../../services/followers/followers-thunk";
import {findUsersThunk} from "../../../services/users/users-thunk";

const OtherFollowersList = ({accountId}) => {
    const {followers, following, follows, loading} = useSelector(
        state => state.followers)
    const dispatch = useDispatch();

    const [list, setList] = useState([]);
    useEffect(() => {
        dispatch(findAllFollows())
    }, [accountId]);

    useEffect(() => {
        setList(follows.filter((u) => u.following_id === accountId));
    }, [follows])

    return(
        <>
            <div className={"fw-bold h6 d-md-none"}>
                Followers
            </div>
            <ul className="list-group">
                {
                    list.length > 0?
                        list.map(follower =>
                            <FollowersItem
                                key={follower._id} f={follower}/> )
                        : <div className={"list-group"}>
                            <div className={"list-group-item"}>No Followers</div>
                        </div>
                }
            </ul>
        </>
    );
};
export default OtherFollowersList;
