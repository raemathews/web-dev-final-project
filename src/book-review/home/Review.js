import React from 'react'
import TrendingReviewItem from "../trending/trending-review-item";

const Review = ({review}) => {
    return (
        <TrendingReviewItem key={review._id} review={review}/>
    )
}

export default Review