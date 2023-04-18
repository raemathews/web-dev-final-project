import React, {useEffect} from 'react'
import Navigation from "../navigation/Navigation";
import "./BookRatings.css";
import BookResults from "./BookResults";
import UserResults from "./UserResults";
import {useParams} from "react-router-dom";


const SearchResults = () => {
    const {query} = useParams();

    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <span className="d-block d-md-none">{`Search Results for "${query}"`}</span>
                    <ul className="nav nav-tabs mt-2 d-md-none">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profiles</a>
                        </li>
                    </ul>
                    <BookResults/>
                    <UserResults/>
                </div>
            </div>
        </div>
    );
}

export default SearchResults