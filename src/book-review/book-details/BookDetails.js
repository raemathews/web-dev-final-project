import React from 'react'
import Navigation from "../navigation/Navigation";
import BookItem from "./book-item";
import BookReviewList from "./book-review-list";

const BookDetails = () => {
    return (
        <>
            <Navigation />
            <h1>Book Details</h1>
            <BookItem />
            <BookReviewList />
        </>
    );
}

export default BookDetails