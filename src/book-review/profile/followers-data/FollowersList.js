import React from "react";
import FollowersItem from "./FollowersItem.js";
import followers from "./followers.json"

const FollowingList = () => {
    return(
        <ul className="list-group">
            {
                followers.map(f =>
                    <FollowersItem
                        key={f._id} f={f}/> )
            }
        </ul>
    );
};
export default FollowingList;
