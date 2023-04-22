import React, {useEffect, useState} from "react";
import FollowersItem from "./FollowersItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findFollowersByUserIdThunk, findFollowingByUserIdThunk} from "../../../services/followers/followers-thunk";
import {findUsersThunk} from "../../../services/users/users-thunk";

const OtherFollowersList = ({accountId}) => {
    const {followers, following, loading} = useSelector(
        state => state.followers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFollowersByUserIdThunk(accountId))
    }, [accountId]);

    return(
        <ul className="list-group">
            {
                followers.length > 0?
                followers.map(follower =>
                    <FollowersItem
                        key={follower._id} f={follower}/> )
                    : <p> No followers yet :(</p>
            }
        </ul>
    );
};
export default OtherFollowersList;
