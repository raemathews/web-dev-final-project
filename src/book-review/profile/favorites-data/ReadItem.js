import React from "react";
const ReadItem = (
    {book}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="fw-bolder">{book.title}
                        - {book.rating_average}
                    </div>
                    <div>By {book.author_name}</div>
                </div>
                <div className="col-2">
                    {book.cover_i ?
                        <img className="card-img-top"
                             src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                             alt="book cover"/>
                        : <img className="card-img-top not-found"
                               src={"/images/no_cover.png"}
                               alt="book cover"/>               }
                </div>
            </div>
        </li>
    );
};
export default ReadItem;
