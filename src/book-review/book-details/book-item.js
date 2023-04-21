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

    const {currentUser} = useSelector(store => store.currentUser)
    const {numResults, books, bookById, loading} =
        useSelector(store => store.library)
    useEffect(() => {
        dispatch(findBookByIdThunk(bookid));
    }, [])

    const extraBooks = books.filter(b => b.key == `/works/${bookid}`);
    const extraBook = extraBooks ? extraBooks[0] : {};
    const bookInfo = {
        ...extraBook,
        ...bookById,
    }

    const createReviewHandler = () => {
        // TODO: put real values
        console.log(currentUser._id);
        const newReview = {
            "book_title": bookInfo.title,
            "book_id": bookid,
            "body": currentReview,
            "likes": [currentUser._id],
            "replied": 0,
            "spoiler_flag": false,
            "user_id": currentUser._id,
            "time": "now"
        }
        console.log(newReview);
        dispatch(createReviewThunk(newReview));
    }

    const StarRatingDetails = ({rating}) => {
        let stars = []
        let rate = Math.round(rating * 10) / 10;
        for (let r = 1; r < 6; r++) {
            let c = "bi-star-fill text-light";
            if (rate >= r - 0.5) {
                c = "bi-star-half text-warning";
                if (rate >= r) {
                    c = "bi-star-fill text-warning";
                }
            }
            stars.push(<span key={r}
                             className={`bi text-warning fa-2x ${c}`}
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
        console.log(`keys: ${Object.keys(book)}`);
        if (book.description) {
            if (typeof book.description == 'string') {
                return book.description.split(/\(\[|\[/)[0];
            } else {
                return book.description.value.split(/\(\[|\[/)[0];
            }
        }
        return "No summary available for this title";
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
                            Save to Read List
                        </button>
                        <button type="button"
                                className="btn btn-primary mt-2"
                                style={{width: "100%"}}>
                            Save to Want To Read List
                        </button>
                    </div>
                    <div className="col-9 position-relative pt-5 ps-xl-5" style={{marginLeft: '26%'}}>
                        <div>
                            <div className="float-end">
                                {StarRatingDetails({rating: bookInfo.ratings_average})}
                            </div>
                            <h1><b>{bookInfo.title}</b></h1>
                            <h4>{bookInfo.author_name}</h4>
                            <p>{bookInfo.ratings_count? bookInfo.ratings_count : 0} Ratings
                                | {bookInfo.readinglog_count? bookInfo.readinglog_count : 0} Saves</p>
                        </div>
                        <hr/>
                        <div style={{whiteSpace: "pre-line"}}>{getDescription(bookInfo)}</div>
                        <hr/>
                        <div>
                            <p>Tags: {bookInfo.subjects ?
                                bookInfo.subjects.slice(0, Math.min(bookInfo.subjects.length, 25)).join(", ")
                                : "No tags for this book"}</p>
                            <p>Published: {bookInfo.first_publish_year ? bookInfo.first_publish_year : "--"}</p>
                            <p>Number of Pages: {bookInfo.number_of_pages_median ? bookInfo.number_of_pages_median : "--"}</p>
                        </div>
                        <hr/>

                        <h3><b>Add a review</b></h3>
                        <textarea className="mt-2 p-2"
                                       placeholder={'Write a review...'}
                                       style={{width: "100%"}}
                                       onChange={(event) => setCurrentReview(event.target.value)}>
                        </textarea>
                        {/*TODO: will submit and add a review about this book*/}
                        <button type="button"
                                className="btn btn-primary mt-2 mb- 3"
                                style={{width: "100%"}}
                                onClick={() => createReviewHandler()}>
                            Add review
                        </button>
                        <hr/>

                        <BookReviewList />
                    </div>
                </div>
            }
        </div>
    );
};

export default BookItem;