import React, {useEffect} from 'react'
import Navigation from "../navigation/Navigation";
import "./BookRatings.css";
import BookResults from "./BookResults";
import UserResults from "./UserResults";


const SearchResults = () => {

    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <BookResults/>
                    <UserResults/>
                </div>
            </div>
        </div>
    );
}

export default SearchResults