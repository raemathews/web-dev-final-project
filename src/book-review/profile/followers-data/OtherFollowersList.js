import React, {useEffect} from "react";
import FollowersItem from "./FollowersItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findFollowersByUserIdThunk} from "../../../services/followers/followers-thunk";

const OtherFollowersList = () => {
    const { currentUser } = useSelector((state) => state.currentUser);
    const {followers, following, loading} = useSelector(
        state => state.followers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFollowersByUserIdThunk(currentUser._id))
    }, [])


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
