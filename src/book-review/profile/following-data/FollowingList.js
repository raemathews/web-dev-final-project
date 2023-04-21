import React, {useEffect} from "react";
import FollowingItem from "./FollowingItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findFollowingByUserIdThunk} from "../../../services/followers/followers-thunk";

const FollowingList = () => {
    const { currentUser } = useSelector((state) => state.currentUser);
    const {followers, following, loading} = useSelector(
        state => state.followers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findFollowingByUserIdThunk(currentUser._id))
    }, [])

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
export default FollowingList;
