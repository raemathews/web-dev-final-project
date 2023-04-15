import React from "react";
const ReviewItem = (
    {review}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{review.name}
                        <i className="fas fa-check-circle"></i>
                        - {review.userName}
                    </div>
                    <div className="fw-bolder">{review.book}</div>
                    <div>{review.review}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`${review.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default ReviewItem;
