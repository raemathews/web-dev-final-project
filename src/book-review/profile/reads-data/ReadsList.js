import React from "react";
import ReadsItem from "./ReadsItem";
import favorites from "./favorites.json"

const ReadsList = () => {
    return(
        <ul className="list-group">
            {
                favorites.map(book =>
                    <ReadsItem
                        key={book._id} book={book}/> )
            }
        </ul>
    );
};
export default ReadsList;
