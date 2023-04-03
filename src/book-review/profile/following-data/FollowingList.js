import React from "react";
import FollowingItem from "./FollowingItem.js";
import followings from "./following.json"

const FollowingList = () => {
    return(
        <ul className="list-group">
            {
                followings.map(f =>
                    <FollowingItem
                        key={f._id} f={f}/> )
            }
        </ul>
    );
};
export default FollowingList;
