import React from 'react'
import {useSelector} from "react-redux";
import ReviewList from "./ReviewList";
import reviews from "../book-details/reviews.json";


const SuggestedReviews = () => {
    const {currentUserId} =
        useSelector(store => store.currentUser)
    //const {reviews, reviewsByCurrentUser} = useSelector(store => store.reviews)
    return (
        <>
            <h5>{ currentUserId ?
                "Your Friends' Recent Reviews" : "Trending Reviews"}</h5>
            <ReviewList reviews={reviews}/>
        </>
    )
}

export default SuggestedReviews