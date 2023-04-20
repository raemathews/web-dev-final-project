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
                    <h5 className="d-block d-md-none mt-3">{`Search Results for "${query}"`}</h5>
                    <ul className="nav nav-tabs mt-2 d-md-none">
                            <li><a className="nav-link" href={"#books"} data-toggle="pill">Books</a></li>
                            <li><a className="nav-link" href={"#profiles"} data-toggle="pill">Profiles</a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="books" className="tab-pane" role="tab">
                            <BookResults/>
                        </div>
                        <div id="profiles" className="tab-pane" role="tab">
                            <UserResults/>
                        </div>
                    </div>
                    <div className="d-none d-md-flex">
                        <BookResults/>
                        <UserResults/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults