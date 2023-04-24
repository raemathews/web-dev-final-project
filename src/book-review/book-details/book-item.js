import React, {useEffect, useState} from "react";
import BookReviewList from "./book-review-list";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk, findReviewsByBookId} from "../../services/reviews/reviews-thunk";
import {Link, useParams} from "react-router-dom";
import {findBookByIdThunk, findBooksThunk} from "../../services/books/library-thunk";
import ReadingListButtons from "./reading-list-buttons";
import {findReadByUserIdThunk} from "../../services/want-to-read/want-to-read-thunk";
import {useNavigate} from "react-router";
// TODO fix liking

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
    let [currentTitle, setCurrentTitle] = useState('');
    let [currentRating, setCurrentRating] = useState(5);

    // Get book from library
    const {bookid} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {currentUser} = useSelector(store => store.currentUser)

    const {readingList, read, wantToRead, loadingReadingList} =
        useSelector(store => store.readingList)
    useEffect(() => {
        if (currentUser) {dispatch(findReadByUserIdThunk(currentUser._id))};
    }, [])

    const {numResults, books, bookById, loading} =
        useSelector(store => store.library)

    useEffect(() => {
        dispatch(findBookByIdThunk(bookid));
    }, [])

    useEffect(() => {
        if (bookById) {dispatch(findBooksThunk(bookById.title))};
    }, [bookById])

    const {reviews, loadingReviews} = useSelector(
        state => state.reviews)
    useEffect(() => {
        dispatch(findReviewsByBookId(bookid))
    }, [])

    const extraBooks = books.filter(b => b.key == `/works/${bookid}`);
    const extraBook = extraBooks ? extraBooks[0] : {};
    const bookInfo = {
        ...extraBook,
        ...bookById,
    }

    const createReviewHandler = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${month}/${day}/${year}`;

        setCurrentReview("");
        setCurrentTitle("");
        setCurrentRating(5);

        const newReview = {
            "book_title": bookInfo.title,
            "review_title": currentTitle,
            "book_id": bookid,
            "body": currentReview,
            "likes": [currentUser._id],
            "rating": currentRating,
            "replied": 0,
            "spoiler_flag": false,
            "user_id": currentUser._id,
            "time": currentDate
        }
        // console.log(newReview);
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
        // console.log(`keys: ${Object.keys(book)}`);
        if (book.description) {
            if (typeof book.description == 'string') {
                return book.description.split(/\(\[|\[/)[0];
            } else {
                return book.description.value.split(/\(\[|\[/)[0];
            }
        }
        return "No summary available for this title";
    }


    const getAverageRating = (book) => {
        let numerator = 0;
        let denominator = 0;
        if (book && book.ratings_count && book.ratings_average) {
            // console.log(`rating ${book.ratings_average} / count ${book.ratings_count}`);
            numerator += (book.ratings_count * book.ratings_average);
            denominator += book.ratings_count;
        }
        if (reviews && reviews.length > 0) {
            for (const idx in reviews) {
                const r = reviews[idx];
                // console.log(`review ${JSON.stringify(r)}`);
                if (r.rating && r.rating > 0) {
                    numerator += r.rating;
                    denominator += 1;
                }
            }
        }
        // console.log(`numerator ${numerator} / denominator ${denominator}`);
        return denominator != 0 ? (numerator / denominator) : (numerator / denominator);
    }

    const getNumOfReviews = (book) => {
        let result = 0;
        if (book && book.ratings_count) {
            result += book.ratings_count;
        }
        if (reviews) {
            result += reviews.length;
        }
        return result;
    }

    const getBookColumnContents = () => {
        return (
        <>
            {bookInfo.cover_i ?
                <img className="float-end shadow mb-3 bg-white rounded"
                     width="100%"
                     src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-L.jpg`}
                     alt="book cover"/>
                : <img className="float-end not-found border shadow mb-3 bg-white rounded"
                       width="100%"
                       src={"/images/no_cover.png"}
                       alt="book cover"/>               }
            { currentUser && readingList ? <ReadingListButtons bookInfo={bookInfo}
                                                               readingList={readingList}
                                                               read={read}
                                                               wantToRead={wantToRead}
                                                               loadingReadingList={loadingReadingList}/> :
                <button type="button"
                        className="btn btn-secondary mt-3 py-2 mb- 3"
                        style={{width: "100%"}}
                        onClick={() => navigate("/login")}>
                    Sign in to add this book to your reading list
                </button> }
        </>);
    }


    const getSummaryColumnContents = () => {
        return (
            <>
                <div>
                    <div className="float-end">
                        {StarRatingDetails({rating: getAverageRating(bookInfo)})}
                    </div>
                    <h1><b>{bookInfo.title}</b></h1>
                    <h4>{bookInfo.author_name}</h4>
                    <p>{getNumOfReviews(bookInfo)} Ratings
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

                {
                    currentUser ?
                        <div class="card shadow-sm p-3" style={{width: "100%"}}>
                            <h3><b>Add a review</b></h3>
                            <input type="number"
                                   className="mt-2 p-2"
                                   id="rating"
                                   name="rating"
                                   min="0"
                                   max="5"
                                   placeholder="Rating (between 0 and 5):"
                                   onChange={(event) => setCurrentRating(event.target.value)}>
                            </input>
                            <input type="text"
                                   className="mt-2 p-2"
                                   style={{width: "100%"}}
                                   placeholder="Write a title for your review here..."
                                   onChange={(event) => setCurrentTitle(event.target.value)}>
                            </input>
                            <textarea className="mt-2 p-2"
                                      placeholder={'Write your review here...'}
                                      style={{width: "100%"}}
                                      onChange={(event) => setCurrentReview(event.target.value)}>
                            </textarea>
                            <button type="button"
                                    className="btn btn-primary mt-2 mb- 3"
                                    style={{width: "100%"}}
                                    onClick={() => createReviewHandler()}>
                                Add review
                            </button>
                        </div> :
                        <>
                            <h3><b>Add a review</b></h3>
                            <p>Want to add a review? Log in or sign up for an account!</p>
                        </>
                }
                <hr/>

                <BookReviewList reviews={reviews} loading={loadingReviews}/>
            </>
        );
    }

    return (
        <div className="container-fluid px-5">
            {
                // TODO fix this being ugly
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                <div className="row mt-5">
                    {/*Side by side version*/}
                    <div className={`d-none d-md-block col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5 position-fixed`} style={{top: '100px'}}>
                        {getBookColumnContents()}
                    </div>
                    <div className={` d-none d-md-block col-xl-9 col-lg-9 col-md-9 col-sm-12 offset-3 ps-5`}>
                        {getSummaryColumnContents()}
                    </div>

                    {/*Stacked version*/}
                    <div className={`d-block d-md-none col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-5`} style={{top: '100px'}}>
                        {getBookColumnContents()}
                    </div>
                    <div className={`d-block d-md-none col-xl-9 col-lg-9 col-md-9 col-sm-12`}>
                        {getSummaryColumnContents()}
                    </div>
                </div>
            }
        </div>
    );
};

export default BookItem;