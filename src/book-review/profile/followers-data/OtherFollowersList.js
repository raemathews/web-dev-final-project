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
        console.log("All follows in followers for the user is: " + follows);
        follows.map((f) => {console.log("Follow: " + JSON.stringify(f))})
        console.log("USER ID: " + accountId)
        setList(follows.filter((u) => u.following_id === accountId));
        console.log("The followers for the user is: " + list);
    }, [follows])

    return(
        <ul className="list-group">
            {
                list.length > 0?
                list.map(follower =>
                    <FollowersItem
                        key={follower._id} f={follower}/> )
                    : <p> No followers yet :(</p>
            }
        </ul>
    );
};
export default OtherFollowersList;
