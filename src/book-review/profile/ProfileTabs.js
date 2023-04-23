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
        reviewList = (<PersonalReviewList />);
        followerList = (<FollowersList />);
        followingList = (<FollowingList />);
        readList = (<ReadList isRead={true}/> );
        willReadList = (<ReadList isRead={false}/>);
    }
    else {
        reviewList = (<OtherReviewList accountId={accountId}/>);
        followerList = (<OtherFollowersList accountId={accountId}/>);
        followingList = (<OtherFollowingList accountId={accountId}/>);
        readList = (<OtherReadList isRead={true} accountId={accountId}/> );
        willReadList = (<OtherReadList isRead={false} accountId={accountId}/>);
    }
    return (
        <div className={"list-group-item mt-5"}>
        <Tabs
            defaultActiveKey="reviews"
            id="uncontrolled-tab-example"
            className="mb-3 nav-pills">
            <Tab eventKey="reviews" title="Reviews">
                {reviewList}
            </Tab>
            <Tab eventKey="followers" title="Followers">
                {followerList}
            </Tab>
            <Tab eventKey="following" title="Following">
                {followingList}
            </Tab>
            <Tab eventKey="Read" title="Read">
                {readList}
            </Tab>
            <Tab eventKey="wantToRead" title="Want To Read">
                {willReadList}
            </Tab>
        </Tabs>
        </div>
    );
}

export default ProfileTabs;