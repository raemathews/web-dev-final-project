import React from 'react'
import {useSelector} from "react-redux";
import ReviewList from "./ReviewList";
// import reviews from "../book-details/reviews.json";

// book_title: String,
//     review_title: String,
//     book_id: String,
//     body: String,
//     likes: Number,
//     replied: Number,
//     spoiler_flag: Boolean,
//     user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
// time: String
const SuggestedReviews = () => {
    const {currentUserId} =
        useSelector(store => store.currentUser)
    const {reviews, loading} = useSelector(store => store.reviews)
    const display = currentUserId ? reviews.filter((r) => r.user_id === currentUserId._id) : reviews
    return (
        <>
            <h5 className={"mt-3 fw-bolder"}>{ currentUserId ?
                "Your Friends' Recent Reviews" : "Trending Reviews"}</h5>
            <ReviewList reviews={display}/>
        </>
    )
}

export default SuggestedReviews