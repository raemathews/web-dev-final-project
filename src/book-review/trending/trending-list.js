import React from "react";
import TrendingItem
    from "./trending-item";

const TrendingList = () => {
    return(

        <ul className="list-group ">
            {
                <TrendingItem/>

            }
        </ul>
    );
};
export default TrendingList;

