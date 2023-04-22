import React, {useEffect, useState} from "react";
import ReviewItem from "./ReviewItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsByUserIdThunk} from "../../../services/reviews/reviews-thunk";
import {findUsersThunk} from "../../../services/users/users-thunk";

const OtherReviewList = ({accountId}) => {
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsByUserIdThunk(accountId))
    }, [accountId]);


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
export default OtherReviewList;
