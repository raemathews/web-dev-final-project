import React from 'react'
import Review from "./Review";

const ReviewList = ({reviews}) => {
    return (
        reviews.length > 0 ?
        reviews.map((r) =>
            <Review review={r} />
        ) :
            <div className={"list-group"}>
            <div className={"list-group-item"}>
                No recent reviews
            </div>
            </div>
    )
}

export default ReviewList