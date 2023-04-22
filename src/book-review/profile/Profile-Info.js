import React, {useEffect} from 'react'
import ProfileTabs from "./ProfileTabs";
import ProfilePersonalInfoMutable from "./ProfilePersonalInfoMutable";
import {useParams} from "react-router-dom";
import ProfileNonpersonalInfoNonmutable from "./ProfileNonpersonalInfoNonmutable";


const ProfileInfo = ({ownAccount, active}) => {
    const {uid} = useParams();
    // let accountId = uid;
    console.log(`uid: ${uid}`);

    const getAccountInfo = ((id) => {
        console.log(`Ownaccount: ${ownAccount}`);
        if (ownAccount) {
            return <ProfilePersonalInfoMutable/>;
        } else {
            console.log(`user id in info: ${id}`);
            return <ProfileNonpersonalInfoNonmutable user={id}/>;
        }
    })

    return(
        <>
                <div className="row">
                    <h2> Profile </h2>
                    {getAccountInfo(uid)}
                </div>
                <div className="row mt-3">
                    <ProfileTabs ownAccount={ownAccount} accountId={uid}/>
                </div>
        </>
    );
}

export default ProfileInfo;