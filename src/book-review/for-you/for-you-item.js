import React from "react";
import booksArray from "./books.json";

const ForYouItem = (
    {

    }
) => {
    return(
        <ul className="list-group">
            {
                booksArray.map(book => <li className="list-group-item">
                        <div className="row">
                            <div className="col-10">
                                <div>{book.title} - By: {book.author}</div>
                                <div className="fw-bolder">{book.stars} stars</div>
                                <div>{book.description}</div>
                            </div>
                            <div className="col-2">
                                <img width={70} className="float-end rounded-3"
                                     src={`/images/${book.image}`}/>
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>

    );
};
export default ForYouItem;