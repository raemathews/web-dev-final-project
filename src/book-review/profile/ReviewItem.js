import React from "react";
const ReviewItem = (
    {review}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{review.userName}
                        <i className="fas fa-check-circle"></i>
                        - {review.time}
                    </div>
                    <div className="fw-bolder">{review.topic}</div>
                    <div>{review.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${review.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default ReviewItem;
