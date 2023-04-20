import React, {useEffect, useState} from "react";
import BookReviewList from "./book-review-list";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk} from "../../services/reviews/reviews-thunk";
import {useParams} from "react-router-dom";
import StarRating from "../search/StarRating";
import {findBookByIdThunk, findBooksThunk} from "../../services/books/library-thunk";
import ReviewItem from "./book-review-item";

const defaultBook = {
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
    "summary": "Sometimes it is the one who loves you who hurts you the most.\n" +
        "\n" +
        "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life " +
        "she wants. She’s come a long way from the small town in Maine where she grew up — she graduated " +
        "from college, moved to Boston, and started her own business. So when she feels a spark with a " +
        "gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too " +
        "good to be true.\n" +
        "\n" +
        "Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and " +
        "has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t " +
        "get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as " +
        "Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what " +
        "made him that way in the first place.\n" +
        "\n" +
        "As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her " +
        "first love and a link to the past she left behind. He was her kindred spirit, her protector. " +
        "When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.",
}
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
    // console.log(`book id: ${bookid}`);
    const dispatch = useDispatch();

    const {numResults, books, loading} =
        useSelector(store => store.library)
    // console.log(`original books: ${books}`);
    useEffect(() => {
        dispatch(findBookByIdThunk(bookid));
    }, [])
    // console.log(`books: ${books}`);

    const createReviewHandler = () => {
        const newReview = {
            body: currentReview,
        }
        dispatch(createReviewThunk(newReview));
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
                        <img width="100%" className="float-end" src={`/images/${book.image}`}/>
                        {/*TODO: will change to say something else when you click it, and # of saved will go up*/}
                        <button type="button"
                                className="btn btn-primary mt-3"
                                style={{width: "100%"}}>
                            Save to Reading List
                        </button>
                        <textarea className="mt-2 p-1"
                                  placeholder={'Write a review...'}
                                  style={{width: "100%"}}></textarea>
                        {/*TODO: will submit and add a review about this book*/}
                        <button type="button"
                                className="btn btn-primary mt-2"
                                style={{width: "100%"}}>
                            Add review
                        </button>
                    </div>
                    <div className="col-9 position-relative pt-5 ps-xl-5" style={{marginLeft: '26%'}}>
                    {/*    <div>*/}
                    {/*        <div className="float-end">*/}
                    {/*            <i className="bi bi-star-fill text-warning fa-2x"></i>*/}
                    {/*            <h2 className="ps-2" style={{display: "inline"}}>{books.rating}</h2>*/}
                    {/*        </div>*/}
                    {/*        <h1><b>{books.title}</b></h1>*/}
                    {/*        <h4>{books.author_name}</h4>*/}
                    {/*        <p>{books.reviews} reviews | {books.already_read_count} saves</p>*/}
                    {/*    </div>*/}
                    {/*    <hr/>*/}
                    {/*    {console.log(`BBBOOK: ${Object.keys(books)}`)}*/}
                    {/*    {console.log(`desc: ${books.description}`)}*/}
                    {/*    <div style={{whiteSpace: "pre-line"}}>{books.data}</div>*/}
                        <hr/>
                        <div>
                            <p>Tags: {books.subject_facet}</p>
                            <p>Published: {books.published}</p>
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