import React from "react";
import FavoritesItem from "./FavoritesItem";
import favorites from "./favorites.json"

const FollowingList = () => {
    return(
        <ul className="list-group">
            {
                favorites.map(book =>
                    <FavoritesItem
                        key={book._id} book={book}/> )
            }
        </ul>
    );
};
export default FollowingList;
