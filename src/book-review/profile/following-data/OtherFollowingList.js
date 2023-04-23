import React, {useEffect, useState} from "react";
import FollowingItem from "./FollowingItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findAllFollows, findFollowingByUserIdThunk} from "../../../services/followers/followers-thunk";

const OtherFollowingList = ({accountId}) => {
    const {followers, following, follows, loading} = useSelector(
        state => state.followers);

    const [list, setList] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllFollows())
    }, [accountId]);

    useEffect(() => {
        console.log("All follows in followings for the user is: " + follows);
        follows.map((f) => {console.log("Follow: " + JSON.stringify(f))})
        console.log("USER ID: " + accountId)
        setList(follows.filter((u) => u.follower_id === accountId));
        console.log("THE followings for the user is: " + list);
    }, [follows])

    return(
        <ul className="list-group">
            {
                list.length > 0?
                list.map(f =>
                    <FollowingItem
                        key={f._id} f={f}/> )
                    : <p> Not following anyone yet :( Go follow someone!!</p>
            }
        </ul>
    );
};
export default OtherFollowingList;
