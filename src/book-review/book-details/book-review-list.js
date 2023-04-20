import React, {useEffect, useState} from "react";
import ReviewItem from "./book-review-item";
import {useDispatch, useSelector}
    from "react-redux";
import {findReviewsByBookId} from "../../services/reviews/reviews-thunk";
import {useParams} from "react-router-dom";

const ReviewList = () => {
    const {bookid} = useParams();
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsByBookId(bookid))
    }, [])
    return(
        <ul className="list-group mt-2 mb-4">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                reviews.map(review =>
                    <ReviewItem key={review._id} review={review}/>)
            }
        </ul>
    );
};
export default ReviewList;