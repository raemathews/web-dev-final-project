import React from "react";
import reviews from "../book-details/reviews.json";
import ReviewItem from "../book-details/book-review-item";
import following from "../profile/followers-data/followers.json"
import TrendingReviewItem from "./trending-review-item";

const filteredReviews = reviews.filter( x =>
    x.likes > 1000 &&
    x.spoilers === false
    //add another line that checks if they follow the username who wrote the review
);



const TrendingItem = (
    {

    }
) => {
    return(
        <div className="container">
            <div className="row">
                <ul className="list-group ">
                    {
                        filteredReviews.map(review =>
                            <TrendingReviewItem key={review._id} review={review}/>)
                    }
                </ul>
            </div>
        </div>

    );
};
export default TrendingItem;