import React, {useEffect} from "react";
import FollowersItem from "./FollowersItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findFollowersByUserIdThunk} from "../../../services/followers/followers-thunk";

const FollowersList = () => {
    const { currentUser } = useSelector((state) => state.currentUser);
    const {followers, following, loading} = useSelector(
        state => state.followers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFollowersByUserIdThunk(currentUser._id))
    }, [])


    return(
        <>
            <div className={"fw-bold h6 d-md-none"}>
                Followers
            </div>
            <ul className="list-group">
                {
                    followers.length > 0 ?
                        followers.map(follower =>
                            <FollowersItem
                                key={follower._id} f={follower}/> )
                        :
                            <div className={"list-group-item"}>No Followers</div>
                }
            </ul>
        </>

    );
};
export default FollowersList;
