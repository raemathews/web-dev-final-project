import React from "react";
import {useNavigate} from "react-router";
const ReadItem = (
    {book}
) => {

    const navigate = useNavigate();
    const visitProfile = () => {
        navigate(`/book-details/works/${book.book_id}`, {replace: true})
    }
    return(
        <div onClick={visitProfile}>
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
        </div>
    );
};
export default ReadItem;
