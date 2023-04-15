import React from 'react'
import Navigation from "../navigation/Navigation";
import ForYouList from "../for-you/for-you-list";
import AddNewList from "../add-new/add-new-list";
import TrendingList from "../trending/trending-list";

const Home = () => {
    return (
        <>
            <Navigation />

            <div className="row mt-2 ml-3">
                <div className="col-4 col-md-4 col-lg-3 col-xl-4 ">
                    <h1>Popular Users</h1>
                    <AddNewList/>
                </div>
                <div className="col-8 col-md-8 col-lg-5 col-xl-4"
                     style={{"position": "relative"}}>
                    <h1>For You</h1>
                    <ForYouList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <h1>Trending Reviews</h1>
                    <TrendingList/>
                </div>
            </div>



        </>

    );
}

export default Home