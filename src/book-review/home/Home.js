import React from 'react'
import Navigation from "../navigation/Navigation";
import ForYouList from "../for-you/for-you-list";
import AddNewList from "../add-new/add-new-list";

const Home = () => {
    return (
        <>
            <Navigation />
            <h1>Home</h1>

            <div className="row mt-2 ml-3">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2 ">
                    <h1>Add New</h1>
                    <AddNewList/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <h1>For You</h1>
                    <ForYouList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    Trending Books
                </div>
            </div>



        </>

    );
}

export default Home