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
                <div className="row mt-2 ml-3 ">
                    <div className="col-12 col-md-5 col-lg-3 col-xl-3 align-items-center">
                        <PopularUsers user={currentUserId}/>
                    </div>
                    <div className="col-12 col-md-7 col-lg-9 col-xl-9 align-items-center">
                        <BooksForYou/>
                        <hr className={"text-secondary"} />
                        <SuggestedReviews />
                    </div>
                </div>
                <br/>
            </div>

        </>

    );
}

export default Home