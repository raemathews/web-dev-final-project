import React from "react";
import profileArray from "./profiles.json";

const AddNewItem = (
    {
    }
) => {
    return(
        <ul className="list-group">
            {
                profileArray.map(profile => <li className="list-group-item">
                        <div className="row ">
                            <div className="col-3 ml-3">
                                <img width={70} className="float-end rounded-3"
                                     src={`/images/${profile.image}`}/>
                            </div>
                            <div className="col-9">
                                <div>{profile.name} - Joined: {profile.dateJoined}</div>
                                <div className="fw-bolder"> Favorite Book: {profile.favBook}</div>
                            </div>

                        </div>
                    </li>
                )
            }
        </ul>

    );
};
export default AddNewItem;