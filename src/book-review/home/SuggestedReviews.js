import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import ReviewList from "./ReviewList";
import {useEffect} from "react";
import {findFollowingByUserIdThunk} from "../../services/followers/followers-thunk";
import {findReviews} from "../../services/reviews/reviews-service";
import {findReviewsThunk} from "../../services/reviews/reviews-thunk";
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
    const dispatch = useDispatch()
    const {currentUser} =
        useSelector(store => store.currentUser)
    const {reviews, loading} = useSelector(store => store.reviews)
    const {
        followers,
        following,
        follows,
        followsloading
    } = useSelector(store => store.followers)
    useEffect(() => {
        dispatch(findReviewsThunk())
        currentUser &&
        dispatch(findFollowingByUserIdThunk(currentUser._id))
    }, [])
    const display = currentUser && following ?
        reviews.filter((r) => following.map((f) => f.follows).includes(r.user_id))
        : reviews.slice(0,3)
    console.log("reviews to display: " + display)
    return (
        <>
            <h5 className={"mt-3 fw-bolder"}>{currentUser ?
                "Your Friends' Recent Reviews" : "Trending Reviews"}</h5>
            <div className={"list-group mt-3"}>
                <ReviewList reviews={display} />

            </div>
        </>
    )
}

export default SuggestedReviews