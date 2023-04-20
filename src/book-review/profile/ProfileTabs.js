import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PersonalReviewList from "./review-data/PersonalReviewList";
import FollowersList from "./followers-data/FollowersList";
import FollowingList from "./following-data/FollowingList";
import ReadList from "./favorites-data/ReadList";

const ProfileTabs = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab active={true} eventKey="reviews" title="Reviews">
                <PersonalReviewList />
            </Tab>
            <Tab eventKey="followers" title="Followers">
                <FollowersList />
            </Tab>
            <Tab eventKey="following" title="Following">
                <FollowingList />
            </Tab>
            <Tab eventKey="Read" title="Read">
                <ReadList /> // TODO: add boolean so that you get wilRead/hasRead
            </Tab>
            <Tab eventKey="wantToRead" title="Want To Read">
                <ReadList />
            </Tab>
        </Tabs>
    );
}

export default ProfileTabs;