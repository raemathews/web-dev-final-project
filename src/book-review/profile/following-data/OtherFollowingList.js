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
        setList(follows.filter((u) => u.follower_id === accountId));
    }, [follows])

    return (
        <>
            <div className={"fw-bold h6 d-md-none"}>
                Following
            </div>
            <ul className="list-group">
                {
                    list.length > 0 ?
                        list.map(f =>
                            <FollowingItem
                                key={f._id} f={f}/>)
                        : <div className={"list-group"}>
                            <div className={"list-group-item"}>Not Following Anyone</div>
                        </div>
                }
            </ul>
        </>
    );
};
export default OtherFollowingList;
