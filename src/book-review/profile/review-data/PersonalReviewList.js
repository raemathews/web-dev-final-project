import React, {useEffect} from "react";
import ReviewItem from "./ReviewItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsByUserIdThunk} from "../../../services/reviews/reviews-thunk";

const PersonalReviewList = () => {

    const { currentUser } = useSelector((state) => state.currentUser);
    const {reviews, loading} = useSelector(
        state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsByUserIdThunk(currentUser._id))
    }, [])


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
