import React, {useEffect} from 'react'
import Navigation from "../navigation/Navigation";
import "./BookRatings.css";
import BookResults from "./BookResults";
import UserResults from "./UserResults";
import {useParams} from "react-router-dom";
import {Tab, Tabs} from "react-bootstrap";


const SearchResults = () => {
    const {query} = useParams();

    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <span className="d-block d-md-none">{`Search Results for "${query}"`}</span>

                    <div className={"mt-2 d-md-none"}>
                        <Tabs
                            defaultActiveKey="reviews"
                            id="uncontrolled-tab-example"
                            className="mb-3 ">
                            <Tab eventKey="books" title="Books">
                                <BookResults/>
                            </Tab>
                            <Tab eventKey="users" title="Profiles">
                                <UserResults/>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className={"d-none d-md-flex"}>
                        <BookResults />
                        <UserResults />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResults