import React, {useEffect, useState} from "react";
import FollowingItem from "./FollowingItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findFollowingByUserIdThunk} from "../../../services/followers/followers-thunk";
import {findUsersThunk} from "../../../services/users/users-thunk";
import {findReviewsByUserIdThunk} from "../../../services/reviews/reviews-thunk";

const OtherFollowingList = ({accountId}) => {
    const {followers, following, loading} = useSelector(
        state => state.followers);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFollowingByUserIdThunk(accountId))
    }, [accountId]);

    return(
        <ul className="list-group">
            {
                following.length > 0?
                following.map(f =>
                    <FollowingItem
                        key={f._id} f={f}/> )
                    : <p> Not following anyone yet :( Go follow someone!!</p>
            }
        </ul>
    );
};
export default OtherFollowingList;
