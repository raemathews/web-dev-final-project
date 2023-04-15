import React from "react";
const FavoritesItem = (
    {book}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="fw-bolder">{book.book_title}
                        - {book.publish_date}
                    </div>
                    <div>{book.summary}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${book.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default FavoritesItem;
