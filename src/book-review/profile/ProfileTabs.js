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

const ProfileTabs = ({ownAccount, accountId}) => {
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
            <div className={"list-group-item mt-5 d-md-block"}>
                <Tabs
                    defaultActiveKey="reviews"
                    id="uncontrolled-tab-example"
                    className="mb-3 nav-pills">
                    <Tab eventKey="reviews"
                         title={<><span className={"d-none d-md-inline"}>Reviews</span><i className={"fa fa-star ps-2"}/></>}>
                        {reviewList}
                    </Tab>
                    <Tab eventKey="followers"
                         title={<><span className={"d-none d-md-inline"}>Followers</span><i className={"fa fa-users ps-2"}/><i className={"fa fa-long-arrow-alt-down"}/></>}>
                        {followerList}
                    </Tab>
                    <Tab eventKey="following"
                         title={<><span className={"d-none d-md-inline"}>Following</span><i className={"fa fa-users ps-2"}/><i className={"fa fa-long-arrow-alt-up"}/></>}>
                        {followingList}
                    </Tab>
                    <Tab eventKey="Read"
                         title={<><span className={"d-none d-md-inline"}>Read</span><i className={"fa fa-book-open-reader ps-2"}/></>}>
                        {readList}
                    </Tab>
                    <Tab eventKey="wantToRead"
                         title={<><span className={"d-none d-md-inline"}>Want to Read</span><i className={"fa fa-book-medical ps-2"}/></>}>
                        {willReadList}
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default ProfileTabs;