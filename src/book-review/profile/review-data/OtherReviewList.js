import React, {useEffect, useState} from "react";
import ReviewItem from "../../book-details/book-review-item";
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
        <>
            <div className={"fw-bold h6 d-md-none"}>
                Reviews
            </div>
            <ul className="list-group">
                {
                    reviews.length > 0 ?
                        reviews.map(review =>
                            <ReviewItem
                                key={review._id} review={review}/> )
                        : <div className={"list-group"}>
                            <div className={"list-group-item"}>No Reviews Written</div>
                        </div>
                }
            </ul>
        </>

    );
};
export default OtherReviewList;
