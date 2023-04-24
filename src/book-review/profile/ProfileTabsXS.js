import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PersonalReviewList from "./review-data/PersonalReviewList";
import FollowersList from "./followers-data/FollowersList";
import FollowingList from "./following-data/FollowingList";
import ReadList from "./favorites-data/ReadList";
import OtherReviewList from "./review-data/OtherReviewList";
import OtherFollowersList from "./followers-data/OtherFollowersList";
import OtherFollowingList from "./following-data/OtherFollowingList";
import OtherReadList from "./favorites-data/OtherReadList";
import {Link} from "react-router-dom";
import React from "react";

const ProfileTabsXS = ({ownAccount, accountId}) => {
    let reviewList;
    let followerList;
    let followingList;
    let readList;
    let willReadList;
    if (ownAccount) {
        reviewList = (<PersonalReviewList/>);
        followerList = (<FollowersList/>);
        followingList = (<FollowingList/>);
        readList = (<ReadList isRead={true}/>);
        willReadList = (<ReadList isRead={false}/>);
    } else {
        reviewList = (<OtherReviewList accountId={accountId}/>);
        followerList = (<OtherFollowersList accountId={accountId}/>);
        followingList = (<OtherFollowingList accountId={accountId}/>);
        readList = (<OtherReadList isRead={true} accountId={accountId}/>);
        willReadList = (<OtherReadList isRead={false} accountId={accountId}/>);
    }
    return (
        <>
            <div className="dropdown-toggle btn btn-info pull-right pr-3 "
                 id="navbarDropdownMenuLink"
                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user ps-3"/>
            </div>
            <div className="dropdown-menu dropdown-menu-end"
                 aria-labelledby="navbarDropdownMenuLink">
                <Link to="/login" className="dropdown-item">Log In</Link>
                <Link to="/signUp" className="dropdown-item">Sign Up</Link>
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/#" className="dropdown-item">Settings</Link>
                <Link to="/logout" className="dropdown-item">Log Out</Link>
            </div>
            {/*<div className="dropdown d-block d-md-none">*/}
            {/*    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"*/}
            {/*            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
            {/*        Dropdown button*/}
            {/*    </button>*/}
            {/*    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
            {/*        <a className="dropdown-item" href="#">Reviews</a>*/}
            {/*        <a className="dropdown-item" href="#">Followers</a>*/}
            {/*        <a className="dropdown-item" href="#">Following</a>*/}
            {/*        <a className="dropdown-item" href="#">Read</a>*/}
            {/*        <a className="dropdown-item" href="#">Want to Read</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"list-group-item mt-5 d-none d-md-block"}>*/}
            {/*    <Tabs*/}
            {/*        defaultActiveKey="reviews"*/}
            {/*        id="uncontrolled-tab-example"*/}
            {/*        className="mb-3 nav-pills">*/}
            {/*        <Tab eventKey="reviews" title="Reviews">*/}
            {/*            {reviewList}*/}
            {/*        </Tab>*/}
            {/*        <Tab eventKey="followers" title="Followers">*/}
            {/*            {followerList}*/}
            {/*        </Tab>*/}
            {/*        <Tab eventKey="following" title="Following">*/}
            {/*            {followingList}*/}
            {/*        </Tab>*/}
            {/*        <Tab eventKey="Read" title="Read">*/}
            {/*            {readList}*/}
            {/*        </Tab>*/}
            {/*        <Tab eventKey="wantToRead" title="Want To Read">*/}
            {/*            {willReadList}*/}
            {/*        </Tab>*/}
            {/*    </Tabs>*/}
            {/*</div>*/}
        </>
    );
}

export default ProfileTabsXS;