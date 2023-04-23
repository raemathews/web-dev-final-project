import React from 'react'
import Navigation from "../navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import PopularUsers from "./PopularUsers";
import BooksForYou from "./BooksForYou";
import SuggestedReviews from "./SuggestedReviews";

const Home = () => {
    const {currentUserId} =
        useSelector(store => store.currentUser)
    return (
        <>
            <Navigation/>
            <div className={"container"}>
                <div className="row mt-2 ml-3">
                    <div className="col-12 col-md-3 col-lg-3 col-xl-3 ">
                        <PopularUsers user={currentUserId}/>
                        <SuggestedReviews />
                    </div>
                    <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                        <BooksForYou/>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Home