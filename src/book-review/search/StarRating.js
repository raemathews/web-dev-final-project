import React from 'react'

const StarRating = ({rating, numReviews}) => {
    let stars = []
    for (let r = 1; r < 6; r++) {
        if (rating >= r) {
            stars.push(<span className="fa fa-star" key={r} style={{color: "orange", textShadow: " 0 0 1px black"}}/>)
        }
        else {
            stars.push(<span className="fa fa-star" key={r} style={{color: "white", textShadow: "0 0 1px black"}}/>)
        }
    }

    return (
        <div >
            {stars} {numReviews}
        </div>
    )
}

export default StarRating