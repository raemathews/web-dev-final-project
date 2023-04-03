import React from "react";
import ReviewItem from "./ReviewItem.js";
import reviews from "./reviews.json"

const PersonalReviewList = () => {
    return(
        <ul className="list-group">
            {
                reviews.map(review =>
                    <ReviewItem
                        key={review._id} review={review}/> )
            }
        </ul>
    );
};
export default PersonalReviewList;
