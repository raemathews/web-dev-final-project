import React from "react";
import ReadItem from "./ReadItem";
import favorites from "./favorites.json"

const OtherReadList = ({isRead}) => {
    return(
        <ul className="list-group">
            {
                favorites.map(book =>
                    <ReadItem
                        key={book._id} book={book}/> )
            }
        </ul>
    );
};
export default OtherReadList;
