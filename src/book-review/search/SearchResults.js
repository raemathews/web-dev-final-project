import React from 'react'
import Navigation from "../navigation/Navigation";
import BookTile from "./BookTile";
import results from "./books.json";
import "./BookRatings.css";


const SearchResults = ({query}) => {
    /**eventually this will be done using api**/
    const search = results.q
    const books = results.docs
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div>
                    <h5 className="p-4">Results for "{search}" ({results.numFound} found)</h5>
                    <hr/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto align-top">
                        {
                            books.map(book =>
                                <BookTile key={book.key} book={book}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults