import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return(
        <>
            <div className="list-group" >
                <div className="list-group-item">
                    <Link to="/">Home</Link></div>
                <div className="list-group-item">
                    <Link to="/login">Login</Link></div>
                <div className="list-group-item">
                    <Link to="/profile" >Profile</Link></div>
                <div className="list-group-item">
                    <Link to="/search" >Search</Link></div>
                <div className="list-group-item">
                    <Link to="/book-details" >Book Details</Link></div>
            </div>
        </>

    );
}

export default Navigation;