import React, {useEffect, useState} from "react";
import BookReviewList from "./book-review-list";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk} from "../../services/reviews/reviews-thunk";
import {useParams} from "react-router-dom";
import {findBookByIdThunk, findBooksThunk} from "../../services/books/library-thunk";

const BookItem = (
    {
        book = {
            "_id": 234,
            "author": "Colleen Hoover",
            "title": "It Ends With Us",
            "image": "itendswithus.jpeg",
            "rating": "4.8",
            "reviews": 2378478,
            "saves": 200620,
            "saved": true,
            "pages": 386,
            "published": "August 2, 2016",
            "tags": "Romance, Fiction, Contemporary, New Adult, Contemporary Romance, Adult",
            "summary": "",
        }
    }
) => {
    let [currentReview, setCurrentReview] = useState('');

    // Get book from library
    const {bookid} = useParams();
    const dispatch = useDispatch();

    const {numResults, books, bookById, loading} =
        useSelector(store => store.library)
    useEffect(() => {
        dispatch(findBookByIdThunk(bookid));
    }, [])

    console.log(books)
    const extraBooks = books.filter(b => b.key == `/works/${bookid}`);
    const extraBook = extraBooks ? extraBooks[0] : {};
    console.log(extraBook);
    const bookInfo = {
        ...extraBook,
        ...bookById,
    }

    const createReviewHandler = () => {
        const newReview = {
            body: currentReview,
        }
        dispatch(createReviewThunk(newReview));
    }

    const StarRatingDetails = ({rating}) => {
        let stars = []
        let rate = Math.round(rating);
        for (let r = 1; r < 6; r++) {
            let c = "text-light";
            if (rate >= r) {
                c = "text-warning";
                console.log(`${rate} >= ${r}`);
            }
            stars.push(<span key={r}
                             className={`bi bi-star-fill text-warning fa-2x ${c}`}
                             style={{textShadow: "0 0 1px black"}}/>)
        }

        return (
            <div >
                {stars}
                <h2 className="ps-2" style={{display: "inline"}}>{rating? Math.round(rating * 100) / 100 : 0}</h2>
            </div>
        )
    }

    const getDescription = (book) => {
        if (book.description != undefined) {
            return book.description.split("([")[0];
        }
        return "No summary for this title.";
    }

    return (
        <div className="container">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                <div className="row">
                    <div className="col-3 position-fixed sticky-lg-top" style={{top: '10%'}}>
                        {bookInfo.cover_i ?
                            <img className="float-end"
                                 width="100%"
                                 src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-L.jpg`}
                                 alt="book cover"/>
                            : <img className="float-end not-found"
                                   width="100%"
                                   src={"/images/no_cover.png"}
                                   alt="book cover"/>               }
                        {/*TODO: will change to say something else when you click it, and # of saved will go up*/}
                        <button type="button"
                                className="btn btn-primary mt-3"
                                style={{width: "100%"}}>
                            Save to Reading List
                        </button>
                        <textarea className="mt-2 p-1"
                                  placeholder={'Write a review...'}
                                  style={{width: "100%"}}
                                  onChange={(event) => setCurrentReview(event.target.value)}>
                        </textarea>
                        {/*TODO: will submit and add a review about this book*/}
                        <button type="button"
                                className="btn btn-primary mt-2"
                                style={{width: "100%"}}
                                onClick={() => createReviewHandler()}>
                            Add review
                        </button>
                    </div>
                    <div className="col-9 position-relative pt-5 ps-xl-5" style={{marginLeft: '26%'}}>
                        <div>
                            <div className="float-end">
                                {StarRatingDetails({rating: bookInfo.ratings_average})}
                            </div>
                            <h1><b>{bookInfo.title}</b></h1>
                            <h4>{bookInfo.author_name}</h4>
                            <p>{bookInfo.ratings_count? bookInfo.ratings_count : 0} reviews | {bookInfo.readinglog_count} saves</p>
                        </div>
                        <hr/>
                        {console.log(`Book keys: ${Object.keys(bookInfo)}`)}
                        <div style={{whiteSpace: "pre-line"}}>{getDescription(bookInfo)}</div>
                        <hr/>
                        <div>
                            <p>Tags: {bookInfo.subjects ?
                                bookInfo.subjects.slice(0, Math.min(bookInfo.subjects.length, 25)).join(", ")
                                : "No tags for this book"}</p>
                            <p>Published: {bookInfo.first_publish_year}</p>
                            <p>Number of Pages: {bookInfo.number_of_pages_median}</p>
                        </div>
                        <hr/>
                        <BookReviewList />
                    </div>
                </div>
            }
        </div>
    );
};

export default BookItem;