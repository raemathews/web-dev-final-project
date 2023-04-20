import React from 'react'
import Review from "./Review";

const ReviewList = ({reviews}) => {
    return (
        reviews.map((r) =>
            <Review review={r} />
        )
    )
}

export default ReviewList