import React, {useEffect} from "react";
import ReviewItem from "./book-review-item";
import reviews from "./reviews.json";
const ReviewList = () => {
    return(
        <div className="container">
            <div className="row">
                <ul className="list-group ">
                    <h2 className="m-3">Reviews</h2>
                    {
                        reviews.map(review =>
                            <ReviewItem key={review._id} review={review}/>)
                    }
                </ul>
            </div>
        </div>
    );
};
export default ReviewList;