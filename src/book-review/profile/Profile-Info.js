import React from 'react'
import ProfileTabs from "./ProfileTabs";
import ProfilePersonalInfoMutable from "./ProfilePersonalInfoMutable";
import {useParams} from "react-router-dom";
import ProfileNonpersonalInfoNonmutable from "./ProfileNonpersonalInfoNonmutable";


const ProfileInfo = ({accountId, ownAccount, active}) => {
    let info;
    if (ownAccount) {
        info = (<ProfilePersonalInfoMutable/>);
    } else {
        info = (<ProfileNonpersonalInfoNonmutable user={accountId}/>);
    }
    return(
        <>
                <div className="row">
                    <h2> Profile </h2>
                    {info}
                </div>
                <div className="row mt-3">
                    <ProfileTabs ownAccount={ownAccount}/>
                </div>
        </>
    );
}

export default ProfileInfo;