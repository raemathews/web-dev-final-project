import React, {useEffect, useState} from "react";
import ReviewItem from "./book-review-item";
import {useDispatch, useSelector}
    from "react-redux";
import {findReviewsByBookId} from "../../services/reviews/reviews-thunk";
import {useParams} from "react-router-dom";

const ReviewList = ({reviews, loading}) => {
    return(
        <div>
            <h3><b>Reviews</b></h3>
            <ul className="list-group mt-3 mb-4">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    reviews.length > 0 ?
                        reviews.map(review =>
                        <ReviewItem key={review._id} review={review}/>)
                        : <p>No reviews yet, why not write one?</p>
                }
            </ul>
        </div>
    );
};
export default ReviewList;