import React from "react";
import ForYouItem
    from "./for-you-item";

const ForYouList = () => {
    return(

        <ul className="list-group ">
            {

                <ForYouItem/>

            }
        </ul>
    );
};
export default ForYouList;

