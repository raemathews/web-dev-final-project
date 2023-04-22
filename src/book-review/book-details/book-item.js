import React, {useEffect, useState} from "react";
import BookReviewList from "./book-review-list";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk, findReviewsByBookId} from "../../services/reviews/reviews-thunk";
import {useParams} from "react-router-dom";
import {findBookByIdThunk, findBooksThunk} from "../../services/books/library-thunk";
import {
    createReadThunk,
    findUnfinishedReadByUserIdThunk,
    updateReadThunk
} from "../../services/want-to-read/want-to-read-thunk";

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
    let [currentRating, setCurrentRating] = useState(3);

    // Get book from library
    const {bookid} = useParams();
    const dispatch = useDispatch();

    const {currentUser} = useSelector(store => store.currentUser)

    const {readingList, read, wantToRead, loadingReadingList} =
        useSelector(store => store.readingList)
    useEffect(() => {
        dispatch(findUnfinishedReadByUserIdThunk(currentUser._id));
    }, [])

    const {numResults, books, bookById, loading} =
        useSelector(store => store.library)

    useEffect(() => {
        dispatch(findBookByIdThunk(bookid));
    }, [])

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
        // TODO: put real values
        console.log(currentUser._id);
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
            "time": "now"
        }
        console.log(newReview);
        dispatch(createReviewThunk(newReview));
    }

    const addToReadHandler = () => {
        if (currentUser) {
            if (bookInfo) {
                const inRead = read.find((r) => (`/works/${r.book_id}` === bookInfo.key) && (r.user_id === currentUser._id));
                const inWantToRead = wantToRead.find((r) => (`/works/${r.book_id}` === bookInfo.key) && (r.user_id === currentUser._id));
                if (inWantToRead) {
                    dispatch(updateReadThunk({
                        ...inWantToRead,
                        finished: false
                    }));
                } else if (!inRead) {
                    dispatch(createReadThunk({
                        user_id: currentUser._id,
                        book_id: bookInfo.key.substring(7),
                        finished: true,
                        title: bookInfo.book_title,
                        cover_i: bookInfo.cover_i,
                        ratings_average: getAverageRating(bookInfo),
                        ratings_count: getNumOfReviews(bookInfo),
                        author_name: bookInfo.author_name ? bookInfo.author_name.toString() : "",
                    }));
                }
            }
        } else {
            // TODO: display something telling them to log in/sign up
        }
    }

    const rrr = (r) => {
        console.log(JSON.stringify(r));
        return (`/works/${r.book_id}` === bookInfo.key) && (r.user_id === currentUser._id);
    }

    const addToWantToReadHandler = () => {
        console.log('ADDING1');
        if (currentUser) {
            console.log('ADDING2');
            if (bookInfo) {
                console.log('ADDING3');
                console.log(bookInfo.key);
                console.log(`JSON: ${wantToRead}`);
                const inRead = read.find((r) => (`/works/${r.book_id}` === bookInfo.key) && (r.user_id === currentUser._id));
                const inWantToRead = wantToRead.find((r) =>
                    rrr(r)
                );
                console.log(inWantToRead);
                if (inRead) {
                    console.log('ADDING4');
                    dispatch(updateReadThunk({
                        ...inRead,
                        finished: true
                    }));
                } else if (!inWantToRead) {
                    console.log('ADDING5');
                    dispatch(createReadThunk({
                        user_id: currentUser._id,
                        book_id: bookInfo.key.substring(7),
                        finished: false,
                        title: bookInfo.book_title,
                        cover_i: bookInfo.cover_i,
                        ratings_average: getAverageRating(bookInfo),
                        ratings_count: getNumOfReviews(bookInfo),
                        author_name: bookInfo.author_name ? bookInfo.author_name.toString() : "",
                    }));
                }
            }
        } else {
            // TODO: display something telling them to log in/sign up
        }
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
            console.log(`rating ${book.ratings_average} / count ${book.ratings_count}`);
            numerator += (book.ratings_count * book.ratings_average);
            denominator += book.ratings_count;
        }
        if (reviews && reviews.length > 0) {
            for (const idx in reviews) {
                const r = reviews[idx];
                // console.log(`review ${JSON.stringify(r)}`);
                if (r.rating) {
                    numerator =+ r.rating;
                    denominator += 1;
                }
            }
        }
        console.log(`numerator ${numerator} / denominator ${denominator}`);
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

    const wantToReadButtonMsg = "Save to Want To Read List";
    const readButtonMsg = "Save to Read List";

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
                                style={{width: "100%"}}
                                onClick={addToReadHandler}>
                            {readButtonMsg}
                        </button>
                        <button type="button"
                                className="btn btn-primary mt-2"
                                style={{width: "100%"}}
                                onClick={addToWantToReadHandler}>
                            {wantToReadButtonMsg}
                        </button>
                    </div>
                    <div className="col-9 position-relative pt-5 ps-xl-5" style={{marginLeft: '26%'}}>
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

                        <h3><b>Add a review</b></h3>
                        <label htmlFor="rating" className="me-2">
                            Rating (between 0 and 5):
                        </label>
                        <input type="number"
                               className="mt-2 p-2"
                               id="rating"
                               name="rating"
                               min="0"
                               max="5"
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
                        {/*TODO: will submit and add a review about this book*/}
                        <button type="button"
                                className="btn btn-primary mt-2 mb- 3"
                                style={{width: "100%"}}
                                onClick={() => createReviewHandler()}>
                            Add review
                        </button>
                        <hr/>

                        <BookReviewList reviews={reviews} loading={loadingReviews}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookItem;