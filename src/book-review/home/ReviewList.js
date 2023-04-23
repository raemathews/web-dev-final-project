import React from 'react'
import Review from "./Review";
import ReviewItem from "../book-details/book-review-item";

const ReviewList = ({reviews}) => {
    return (
        reviews.length > 0 ?
            reviews.map((r) =>
                <ReviewItem review={r}/>
            ) :
            <div className={"list-group"}>
                <div className={"list-group-item"}>
                    No recent reviews
                </div>
            </div>
    )
}

export default ReviewList