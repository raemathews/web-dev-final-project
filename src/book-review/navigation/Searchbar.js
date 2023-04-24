import React from 'react'
import {useState} from "react";
import {useNavigate} from "react-router";

const Searcbbar = () => {
    const navigate = useNavigate();
    const [searchKeys, setSearchKeys] = useState("")
    const checkForSearch = (e) => {
        if (e.key === 'Enter') {
            searchKeys.replaceAll(" ", "+");
            searchKeys && navigate("/search/" + searchKeys)
        }
    }
    return (
        <form className="nav-item mx-auto form-inline col-12 col-lg-5">
            <input className="form-control mr-sm-2 d-inline" type="text" placeholder="Search Books"
                   aria-label="SearchResults"
                   onChange={(e) => setSearchKeys(e.target.value)}
                   onKeyPress={(e) => checkForSearch(e)}
            />
        </form>
    )
}

export default Searcbbar