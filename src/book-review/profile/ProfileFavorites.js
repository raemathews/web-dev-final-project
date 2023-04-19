import React from 'react'
import Navigation from "../navigation/Navigation";
import ProfileInfo from "./Profile-Info";
import FavoritesList from "./favorites-data/ReadList";

const ProfileFavorites = ({active}) => {
    return (
        <>
            <div className="row mt-2">
                <Navigation />
                <div className="col-2"></div>
                <div className="col-8">
                    <ProfileInfo active={active}/>
                    <div className="row">
                        <FavoritesList />
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default ProfileFavorites