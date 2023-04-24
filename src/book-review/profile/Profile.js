import React from 'react'
import Navigation from "../navigation/Navigation";
import ProfileInfo from "./Profile-Info";
import {useParams} from "react-router-dom";

const Profile = ({ownAccount, active}) => {
    const {uid} = useParams();
    return (
        <>
            <Navigation />
            <div className="row mt-2">
                <div className="col-2" />
                <div className="col-8">
                    <ProfileInfo ownAccount={ownAccount} active={active}/>
                </div>
                <div className="col-2" />
            </div>
        </>
    );
}

export default Profile