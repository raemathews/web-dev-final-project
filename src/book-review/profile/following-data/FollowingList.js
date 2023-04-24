import React, {useEffect} from "react";
import FollowingItem from "./FollowingItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findFollowingByUserIdThunk} from "../../../services/followers/followers-thunk";
import FollowersItem from "../followers-data/FollowersItem";

const FollowingList = () => {
    const { currentUser } = useSelector((state) => state.currentUser);
    const {followers, following, follows, loading} = useSelector(
        state => state.followers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFollowingByUserIdThunk(currentUser._id))
    }, [])

    return(
        <>
            <div className={"fw-bold h6 d-md-none"}>
                Following
            </div>
            <ul className="list-group">
                {
                    following.length > 0?
                        following.map(f =>
                            <FollowingItem
                                key={f._id} f={f}/> )
                        : <div className={"list-group"}>
                            <div className={"list-group-item"}>Not Following Anyone</div>
                        </div>
                }
            </ul>
        </>
    );
};
export default FollowingList;
