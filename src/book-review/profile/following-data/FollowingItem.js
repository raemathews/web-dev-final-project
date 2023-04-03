import React from "react";
const FollowingItem = (
    {f}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="fw-bolder">{f.name}
                        <i className="fas fa-check-circle"></i>
                        - {f.userName}
                    </div>
                    <div>{f.bio}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${f.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default FollowingItem;
