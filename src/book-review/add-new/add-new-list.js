import React from "react";
import AddNewItem
    from "./add-new-item";

const AddNewList = () => {
    return(

        <ul className="list-group">
            {

                <AddNewItem/>

            }
        </ul>
    );
};
export default AddNewList;

